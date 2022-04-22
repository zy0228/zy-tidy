module.exports = {
  root: true,
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    quotes: [1, 'single'],
    'no-unused-vars': 'warn'
  }
}
