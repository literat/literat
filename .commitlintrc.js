module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes('chore(deps): Update')],
};
