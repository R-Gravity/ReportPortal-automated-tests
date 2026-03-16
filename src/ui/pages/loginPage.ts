import { expect, type Locator, type Page } from '@playwright/test';
import { checkReferenceLink } from '../helpers/simpleHelpers';

export class LoginPage  {
  readonly page: Page;
  readonly loginWithEpamButton: Locator;
  readonly loginField: Locator;
  readonly passwordField: Locator;
  readonly forgotPasswordButton: Locator;
  readonly loginButton: Locator;
  readonly githubLink: Locator;
  readonly facebookLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginWithEpamButton = page.locator('button', { hasText: 'Login with EPAM' });
    this.loginField = page.getByRole('textbox', { name: 'login' });
    this.passwordField = page.getByRole('textbox', { name: 'password' });
    this.forgotPasswordButton = page.getByRole('link', { name: 'Forgot password?' });
    this.loginButton = page.getByRole('button', { name: 'Login', exact: true });
    this.githubLink = page.locator('//*[@id="app"]/div/div/div/div/div/div[2]/div/div[3]/a[1]');
    this.facebookLink = page.locator('//*[@id="app"]/div/div/div/div/div/div[2]/div/div[3]/a[2]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async loginWithCredentials(username: string, password: string) {
    await expect(this.page).toHaveURL(/ui\/#login/);
    await this.loginField.fill(username);
    await this.passwordField.fill(password);
    await expect(this.loginButton).toBeEnabled();
    await this.loginButton.click(); 
    await expect(this.page).not.toHaveURL(/members/);
  }

  async validateSocialLinks() {
    const socialLinks = [
      { 'link': this.githubLink, 'url': 'https://github.com/reportportal' },
      { 'link': this.facebookLink, 'url': 'https://www.facebook.com/ReportPortal.io' }
    ];
    for (const pair of socialLinks) {
      await checkReferenceLink(this.page, pair.link, pair.url, true);
    }
  }
}