#!/usr/bin/env node

const path = require('path');
const assets = require('./generate');
const pkg = require('./package.json');

const orgId = process.argv[2];
const outputFolder = path.join(process.cwd(), process.argv[3]);

try {
  assets(orgId, outputFolder);
} catch (e) {
  console.error(e);
  process.exit(1);
}
