#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../tailwind.config');

const { theme } = resolveConfig(tailwindConfig);
const themeStr = JSON.stringify(theme.colors);
const ts = `
  export const colors = ${themeStr};
`;

try {
  fs.writeFileSync(
    path.resolve(__dirname, '../src/theme.ts'),
    prettier.format(ts, { parser: 'babel' }),
    'utf-8',
  );
} catch (err) {
  console.log(err.message);
}
