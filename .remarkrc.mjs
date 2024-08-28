import config from '@almacareer/remark-config';

export default {
  ...config,
  plugins: [
    ...config.plugins,
    'remark-frontmatter',

    // Values should increment by one from the first item
    // @see: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-ordered-list-marker-value
    ['remark-lint-ordered-list-marker-value', 'ordered'],

    // Do not check blank lines between list items
    // @see: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-spacing
    ['remark-lint-list-item-spacing', false],

    // Prefer consistent style for link titles, e.g. `["title"]` or `['title']`
    // @see: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-link-title-style
    ['remark-lint-link-title-style', 'consistent'],
  ],
};
