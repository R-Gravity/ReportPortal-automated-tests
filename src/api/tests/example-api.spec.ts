import { test, expect } from '@playwright/test';
import { generateLaunch, generateTest } from '../../services/generateTestObjects';

test('Get Test', async ({ request }) => {
  const testTestId = (await generateTest()).id;
  const newTest = await request.get(`/test/${testTestId}`);
  expect(newTest.ok()).toBeTruthy();
});


test('Get Launches', async ({ page }) => {
  const launchId = (await generateLaunch()).id;
  const response = await page.request.get(`/launch/${launchId}`);
  expect(response.ok()).toBeTruthy();
});
