#!/usr/bin/env node

import pathlib from 'path';
import assetsFunc from './generate';

const orgId = process.argv[2];
const outputDirectory = process.argv[3];

if (!orgId || !outputDirectory) {
  console.error('orgId and outputDirectory required!');
  process.exit(1);
}

const outputFolder = pathlib.join(process.cwd(), outputDirectory);

try {
  assetsFunc(orgId, outputFolder);
} catch (e) {
  console.error(e);
  process.exit(1);
}

export {};
