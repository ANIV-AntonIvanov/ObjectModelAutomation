import { test, chromium } from '@playwright/test'
import { ObjectModel } from './objectModel';

test('test', async ({ page }) => {

  const objectOne = new ObjectModel(page);

  const browser = await chromium.launch({
    slowMo:500,
    headless: false
  });
  
  await objectOne.beforeEach();
  await objectOne.bookingOne();
  await objectOne.afterAll();
});
