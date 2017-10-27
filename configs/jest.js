module.exports = {
  coverageDirectory: './coverage',
  coverageReporters: ['lcov'],
  globals: {
    __DEV__: true,
  },
  roots: [
    './src',
    './tests',
    './packages',
  ],
  setupFiles: [
    './node_modules/@milesj/build-tool-config/jest-setup.js'
  ],
  setupTestFrameworkScriptFile: './tests/setup.js',
  verbose: false
};
