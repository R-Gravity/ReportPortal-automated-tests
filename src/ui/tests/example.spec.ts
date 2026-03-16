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

test('Socials links', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.validateSocialLinks();
});
