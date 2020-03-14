module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'impliedStrict': true
    },
    'ecmaVersion': 2018
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'strict': [
      2, 
      "never"
    ],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'double'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};