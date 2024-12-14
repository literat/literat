module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    JSX: true,
  },

  extends: ['wesbos', 'plugin:mdx/recommended'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'mdx/code-blocks': true,
  },

  rules: {
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'] },
    ],
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': [
      'error',
      // @todo: Load this from the prettier config
      {
        singleQuote: true,
        bracketSpacing: true,
        printWidth: 80,
        semi: true,
        trailingComma: 'all',
        proseWrap: 'always',
        plugins: ['prettier-plugin-toml'],
      },
    ],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'React',
      },
    ],
  },
};
