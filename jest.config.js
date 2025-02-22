module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.xml$': '<rootDir>/fixtures/transformers/xml-transformer.js',
  },
  setupFilesAfterEnv: ['./test-setup.js'],
};
