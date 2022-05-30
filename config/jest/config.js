module.exports = {
  // The root directory that Jest should scan for tests and modules within.
  // https://jestjs.io/docs/configuration#rootdir-string
  rootDir: '../../',

  // A map from regular expressions to paths to transformers
  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/tests/jest-preprocess.js',
  },

  // An array of regexp pattern strings that are matched against all source file paths before transformation.
  // https://jestjs.io/docs/configuration#transformignorepatterns-arraystring
  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-script)/)'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources,
  // like images or styles with a single module.
  // https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/file-mock.js',
  },

  // An array of regexp pattern strings that are matched against all test paths before executing the test
  // https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public', '__fixtures__', '__mocks__'],

  // A set of global variables that need to be available in all test environments.
  // https://jestjs.io/docs/configuration#globals-object
  globals: {
    __PATH_PREFIX__: ``,
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed.
  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ['<rootDir>/tests/setup-test-env.js'],

  // The directory where Jest should output its coverage files.
  // https://jestjs.io/docs/configuration#coveragedirectory-string
  coverageDirectory: '<rootDir>/.coverage',

  // An array of glob patterns indicating a set of files for which coverage information should be collected.
  // https://jestjs.io/docs/configuration#collectcoveragefrom-array
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],

  // An array of regexp pattern strings that are matched against all file paths before executing the test.
  // https://jestjs.io/docs/configuration#coveragepathignorepatterns-arraystring
  coveragePathIgnorePatterns: ['__fixtures__'],

  // The test environment that will be used for testing.
  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'jsdom',
};
