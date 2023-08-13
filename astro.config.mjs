import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import node from '@astrojs/node';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  /*  output: 'server',
    adapter: node({
      mode: 'standalone'
    }),*/
  integrations: [solid(), preact()]
});