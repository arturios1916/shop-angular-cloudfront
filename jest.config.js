/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './api',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
};
