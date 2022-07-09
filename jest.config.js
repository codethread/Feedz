/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  resetMocks: true,
  automock: false,
};

module.exports = config;
