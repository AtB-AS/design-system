#!/usr/bin/env node

import pathlib from 'path';
import assetsFunc from './generate';

const v = process.argv[3];

const orgId = process.argv[2];

if (!v || !orgId) {
  console.log('Output dir and orgId required');
  process.exit(1);
}

const outputFolder = pathlib.join(process.cwd(), v);

try {
  console.log();
  assetsFunc(orgId, outputFolder);
} catch (e) {
  console.error(e);
  process.exit(1);
}

export {};
