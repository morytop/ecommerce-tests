import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  url = '/password';
  storePasswordInput = this.page.getByLabel('Enter store password');
  enterButton = this.page.getByRole('button', { name: 'Enter' });

  constructor(page: Page) {
    super(page);
  }

  async login(): Promise<void> {
    await this.storePasswordInput.fill('testing-expained');
    await this.enterButton.click();
  }
}
