module.exports = {
  displayName: 'formaxui-utils-src-lib-style',
  preset: '../../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../../coverage/libs/formaxui/utils/src/lib/style',
};
