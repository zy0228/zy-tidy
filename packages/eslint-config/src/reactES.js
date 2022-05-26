module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    './base.js'
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'simple-import-sort', 'import'],
  rules: {
    'no-unused-vars': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    'import/first': 'error',
    "import/newline-after-import": "error",
    'import/no-duplicates': 'error',

    // react eslint rules
    'react/no-unescaped-entities': 0,
    'react/no-array-index-key': ['error'],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/self-closing-comp': ['error'],

    // jsx
    'react/jsx-no-comment-textnodes': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
  }
}
