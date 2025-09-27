import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/vendor_modules/**',
      '**/public/**',
      '**/.pinyarn.js',
      'functions/gatsby/**',
      '.netlify/**',
      '.cache/**',
      '.coverage/**',
      '.yarn/**',
    ],
  },
  ...compat.extends('wesbos', 'plugin:mdx/recommended'),
  {
    languageOptions: {
      globals: {
        __PATH_PREFIX__: true,
        JSX: true,
      },
    },

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
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
        },
      ],

      'react/jsx-props-no-spreading': 'off',

      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: 'React',
        },
      ],

      'import/no-extraneous-dependencies': [
        'warn',
        {
          devDependencies: [
            '*.config.{js,cjs,mjs}',
            'scripts/**',
            '.prettierrc.{js,cjs,mjs}',
            '.remarkrc.{js,cjs,mjs}',
            'tests/**',
          ],
        },
      ],

      // Always place Prettier configuration at the end
      'prettier/prettier': [
        'error',
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
    },
  },
];
