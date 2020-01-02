module.exports = {
  testEnvironment: "jsdom",

  roots: [
    "<rootDir>/src"
  ],

  preset: "ts-jest",

  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  
  testMatch: [
    "<rootDir>/src/**/?(*.)test.{ts,tsx}"
  ],

  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
  ],

  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy"
  },
  
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],

  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/.storybook/",
    "<rootDir>/public/"
  ],
  
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json"
    }
  }
};