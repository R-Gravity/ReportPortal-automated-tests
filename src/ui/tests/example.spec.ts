import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Login with credentials happy path', {
  tag: '@Smoke'
}, async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await expect(page).toHaveTitle(/Report Portal/);

  await expect(loginPage.loginWithEpamButton).toBeEnabled();
  
  await loginPage.loginWithCredentials('test', 'test');
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
