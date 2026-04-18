import { test, expect } from '../fixtures/loginPageFixture';

test('Login with credentials happy path', {
  tag: '@Smoke'
}, async ({ loginPage }) => {

  await expect(loginPage.page).toHaveTitle(/Report Portal/);

  await expect(loginPage.loginWithEpamButton).toBeEnabled();
  
  await loginPage.loginWithCredentials('test', 'test');
});

test('Socials links',{
  tag: '@Smoke'
}, async ({ loginValidations }) => {
  await loginValidations.validateSocialLinks();
});

test('Privacy policy',{
  tag: '@Smoke'
}, async ({ loginValidations }) => {
  await loginValidations.validatePrivacyPolicyLink();
});
