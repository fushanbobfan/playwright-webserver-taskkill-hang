import { test, expect } from '@playwright/test';

test('the web server answers', async ({ request }) => {
  const response = await request.get('/');
  expect(await response.text()).toBe('ok');
});
