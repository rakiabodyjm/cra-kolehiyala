module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['react-app', 'plugin:react/recommended', 'eslint:recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
}
