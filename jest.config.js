/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  testMatch: ['**/__tests__/**/*.test.ts'],

  cache: false,

  silent: true,
  verbose: true,

  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['clover', 'lcov', 'text'],
  collectCoverageFrom: [
    './src/**/*.ts',
    '!./src/**/index.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: -10,
    },
  },
};

module.exports = jestConfig;
