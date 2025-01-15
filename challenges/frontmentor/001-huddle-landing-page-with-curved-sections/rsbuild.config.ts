import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass({
      sassLoaderOptions: {
        sassOptions: {
          logger: {
            debug(message) {
              console.debug('SCSS Debug:', message);
            },
            warn(message) {
              console.warn('SCSS Warning:', message);
            },
          },
        },
      },
    }),
    pluginSvgr(),
  ],
});
