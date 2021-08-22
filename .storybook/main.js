module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    /*require.resolve(
      '../libs/morajlab/storybook/src/lib/addon/src/lib/backgrounds/preset.js'
    ),*/
  ],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
