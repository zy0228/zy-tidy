module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
    'node_modules'
  ],
  rules: {
    quotes: [1, 'single'],
    semi: [2, 'never'],
    indent: [
      'error',
      2,
      { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 },
    ],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'max-params': 0,
    'object-curly-spacing': ['error', 'always']
  }
}
