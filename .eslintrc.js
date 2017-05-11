module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  globals: {
    HTMLElement: true,
  },
  extends: 'standard',
  plugins: [
    'html',
  ],
  // add your custom rules here
  'rules': {
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
}
