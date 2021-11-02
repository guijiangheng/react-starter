#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../tailwind.config');

const themePath = path.resolve(__dirname, '../src/theme.ts');
const tailwindConfigPath = path.resolve(__dirname, '../tailwind.config.js');

if (
  !fs.existsSync(themePath) ||
  fs.statSync(themePath).mtime < fs.statSync(tailwindConfigPath).mtime
) {
  console.log('ejecting tialwind theme...');

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

  console.log('ejecting tialwind theme complete.');
}
