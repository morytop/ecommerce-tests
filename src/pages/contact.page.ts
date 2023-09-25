import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class ContactPage extends BasePage {
  url = '/pages/contact';

  constructor(page: Page) {
    super(page);
  }
}
