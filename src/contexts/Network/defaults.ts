// Copyright 2024 @polkadot-cloud/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function */

import { NetworkList } from 'config/networks';

export const defaultNetworkContext = {
  network: NetworkList.glue.name,
  networkData: NetworkList.glue,
  switchNetwork: () => {},
};

export const defaultNetwork = 'glue';
