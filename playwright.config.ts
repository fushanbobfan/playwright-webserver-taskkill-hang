import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://127.0.0.1:41733' },
  webServer: {
    command: 'node server.mjs',
    url: 'http://127.0.0.1:41733',
  },
});
