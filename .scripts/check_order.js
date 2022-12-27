const fs = require('fs');
const path = require('path');
const languageDir = (path.join(__dirname, '..', 'src', 'locale'));

// order keys of a json object.
const orderKeysAlphabetically = (o) => {
  const ordered = Object.keys(o).sort().reduce(
    (obj, key) => { 
      obj[key] = o[key]; 
      return obj;
    }, 
    {}
  );
  return ordered;
}

// check if value is an object. Do not count arrays as objects.
const isObject = (o) => {
  if(Array.isArray(o)) {
    return false;
  }
  if (typeof o === 'object') {
    return true;
  }
  return false;
}

// order keys of object
const orderKeys = (json) => {
  // order top level keys
  json = orderKeysAlphabetically(json);

  // order child objects if they are values.
  const jsonOrdered = {};
  Object.entries(json).forEach(([k, v]) => {
    if (isObject(v)) {
      jsonOrdered[k] = orderKeys(v);
    } else {
      jsonOrdered[k] = v;
    }
  });
  return jsonOrdered;
}

// get all language paths to re-order
const languages = fs
  .readdirSync(languageDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// for each language path
for (let lng of languages) {
  // concat lng to directory to get language path
  const pathToLanguage = path.join(languageDir, `/${lng}`);

  // open language directory & get files
  fs.readdir(pathToLanguage, (error, files) => {
    if (error) {
      return;
    }
    files.forEach((file) => {
      let json = JSON.parse(
        fs.readFileSync(path.join(pathToLanguage, file)).toString()
      );

      // order json object alphabetically
      const orderedJson = orderKeys(json);

      // TODO: write the updated JSON as a string back into file.
    });
  });
};