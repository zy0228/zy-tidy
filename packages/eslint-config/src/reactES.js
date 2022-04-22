module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    quotes: [1, 'single'],
    'no-unused-vars': 'warn'
  }
}
