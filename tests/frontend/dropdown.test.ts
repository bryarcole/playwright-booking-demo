import { test, expect } from '@playwright/test';

test.describe('Dropdown Menu', () => {
  test('Select option from dropdown', async ({ page }) => {
    await page.goto('/dropdown');

    const dropdown = page.locator('#dropdown');
    await dropdown.selectOption('2'); // Select Option 2

    const selectedOption = await dropdown.inputValue();
    expect(selectedOption).toBe('2');
  });
});