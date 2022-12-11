/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true,
  testPathIgnorePatterns: [
  "/node_modules/",
  "/dist/"
  ],
  "collectCoverageFrom" : ["**/src/domain/*.ts", "**/src/services/*.ts"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: -10,
    },
  },
  setupFilesAfterEnv: ['./singleton.ts'],

};

module.exports = config;
