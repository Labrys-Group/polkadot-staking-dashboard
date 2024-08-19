// Copyright 2024 @polkadot-cloud/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { LedgerChain } from 'contexts/LedgerHardware/types';
import PolkadotSVG from 'img/appIcons/polkadot.svg?react';

export const LedgerChains: LedgerChain[] = [
  {
    network: 'glue',
    txMetadataChainId: 'glue',
    Icon: PolkadotSVG,
  },
];
