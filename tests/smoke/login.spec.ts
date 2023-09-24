import { LoginPage } from '../../src/pages/login.page';
import { expect, test } from '@playwright/test';

test.describe('Verify login', () => {
  test('login with correct password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();
    await expect(loginPage.header).toBeInViewport();
  });
});
