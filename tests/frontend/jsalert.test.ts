import { test, expect } from '@playwright/test';

test.describe('JavaScript Alerts', () => {
  test('Handle alert and confirm text', async ({ page }) => {
    await page.goto('/javascript_alerts');

    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toBe('I am a JS Alert');
      await dialog.accept();
    });

    await page.click('button:has-text("Click for JS Alert")');
    const resultText = await page.locator('#result').textContent();
    expect(resultText).toBe('You successfully clicked an alert');
  });
});