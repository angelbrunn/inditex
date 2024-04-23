const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  modulesNameMapper: {
    '@/components/(.*)$': '<rooDir>/components/$1',
    '@/lib/(.*)$': '<rooDir>/lib/$1',
    '@/pages/(.*)$': '<rooDir>/pages/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/lib/redux/',
  ],
  coveragePathIgnorePatterns: ['/\\.next/'],
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '<rootDir>/**/*.tsx',
    '!/*config.js',
    '!/**/*.spec.js',
    '!/**/*.test.js',
    '!/**/*.setup.js',
  ],
};

module.exports = createJestConfig(customJestConfig);
