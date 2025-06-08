module.exports = {
  transform: { '^.+\\.ts$': 'ts-jest' },
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  roots: ['<rootDir>/client', '<rootDir>/server'],
  moduleNameMapper: {
    '^ws$': '<rootDir>/__mocks__/ws.ts',
  },
};