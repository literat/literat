const { prettierConfig } = require('./.prettierrc.js');

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    JSX: true,
  },

  extends: ['wesbos'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
  },
};
