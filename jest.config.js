const nextJest = require("next/jest");
const { commonJestConfig } = require("./common.jest.config");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  ...commonJestConfig,
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/src/server",
  ],
};

module.exports = createJestConfig(customJestConfig);
