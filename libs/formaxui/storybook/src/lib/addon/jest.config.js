module.exports = {
  displayName: 'formaxui-storybook-src-lib-addon',
  preset: '../../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../../coverage/libs/formaxui/storybook/src/lib/addon',
};
