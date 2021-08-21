/* eslint-disable @typescript-eslint/no-explicit-any */

import { join, isAbsolute } from 'path';
import { logger } from '@storybook/node-logger';
import type { IPresetOptions } from './essentials.types';

const requireMain = (configDir: string) => {
  let main = {};
  const absoluteConfigDir = isAbsolute(configDir)
    ? configDir
    : join(process.cwd(), configDir);
  const mainFile = join(absoluteConfigDir, 'main');

  try {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    main = require(mainFile);
  } catch (err) {
    logger.warn(`Unable to find main.js: ${mainFile}`);
  }

  return main;
};

export function addons(options: IPresetOptions = {}) {
  const checkInstalled = (addon: string, main: any) => {
    const existingAddon = main.addons?.find(
      (entry: string | { name: string }) => {
        const name = typeof entry === 'string' ? entry : entry.name;
        return name?.startsWith(addon);
      }
    );

    if (existingAddon) {
      logger.info(
        `Found existing addon ${JSON.stringify(existingAddon)}, skipping.`
      );
    }

    return !!existingAddon;
  };

  const main = requireMain(options.configDir as string);

  return (
    [
      { key: 'docs', package: '@storybook/addon-docs' },
      { key: 'controls', package: '@storybook/addon-controls' },
      { key: 'actions', package: '@storybook/addon-actions' },
      { key: 'backgrounds', package: '@morajlab/storybook-addon-backgrounds' },
      { key: 'viewport', package: '@storybook/addon-viewport' },
      { key: 'toolbars', package: '@storybook/addon-toolbars' },
      { key: 'measure', package: '@storybook/addon-measure' },
      { key: 'outline', package: '@storybook/addon-outline' },
    ]
      .filter((addon) => (options as any)[addon.key] !== false)
      .map((addon) => addon.package)
      .filter((addon) => !checkInstalled(addon, main))
      // Use `require.resolve` to ensure Yarn PnP compatibility
      // Files of various addons should be resolved in the context of `addon-essentials` as they are listed as deps here
      // and not in `@storybook/core` nor in SB user projects. If `@storybook/core` make the require itself Yarn 2 will
      // throw an error saying that the package to require must be added as a dependency. Doing `require.resolve` will
      // allow `@storybook/core` to work with absolute path directly, no more require of dep no more issue.
      // File to load can be `preset.js`, `register.js`, or the package entry point, so we need to check all these cases
      // as it's done in `lib/core/src/server/presets.js`.
      .map((addon) => {
        try {
          return require.resolve(join(addon, 'preset'));
          // eslint-disable-next-line no-empty
        } catch (err) {}

        try {
          return require.resolve(join(addon, 'register'));
          // eslint-disable-next-line no-empty
        } catch (err) {}

        return require.resolve(addon);
      })
  );
}
