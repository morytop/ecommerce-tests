import { CatalogPage } from '../../src/pages/catalog.page';
import { ContactPage } from '../../src/pages/contact.page';
import { HomePage } from '../../src/pages/home.page';
import { LoginPage } from '../../src/pages/login.page';
import { expect, test } from '@playwright/test';

test.describe('Verify service main pages', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login();
  });
  test('home page title', async ({ page }) => {
    const homePage = new HomePage(page);

    const title = await homePage.title();

    expect(title).toContain('testing-expained');
  });

  test('catalog page title', async ({ page }) => {
    const catalogPage = new CatalogPage(page);

    await catalogPage.goto();

    const title = await catalogPage.title();
    expect(title).toContain('Products – testing-expained');
  });

  test('contact page title', async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.goto();

    const title = await contactPage.title();
    expect(title).toContain('Contact – testing-expained');
  });
});
