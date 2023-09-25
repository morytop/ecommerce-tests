import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class CatalogPage extends BasePage {
  url = '/collections/all';

  constructor(page: Page) {
    super(page);
  }
}
