import { Page } from '@playwright/test';

export class BasePage {
  url = '/';
  header = this.page
    .getByRole('heading', { name: 'testing-expained' })
    .getByRole('link');
  constructor(protected page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async title(): Promise<string> {
    return await this.page.title();
  }
}
