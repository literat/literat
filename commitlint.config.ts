// @see { @link https://commitlint.js.org/reference/configuration.html }
export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit: string) => commit.includes('chore(deps): Update')],
};
