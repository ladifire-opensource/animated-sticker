/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*eslint-env node*/
module.exports = {
  presets: [
    '@babel/react',
    '@babel/env',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    ["@babel/plugin-transform-modules-commonjs"],
    [
      "@babel/plugin-transform-spread",
      {
        "loose": true
      }
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties']
  ],
};
