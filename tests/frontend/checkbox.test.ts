import { test, expect } from '@playwright/test';

test.describe('Checkboxes', () =>
{
    test('Check and uncheck checkboxes', async ({ page }) => {
        await page.goto('/checkboxes');

        const firstCheckbox = page.locator('input[type="checkbox"]').nth(0);
        const secondCheckbox = page.locator('input[type="checkbox"]').nth(1);

        //first checkbox 
        await firstCheckbox.check();
        await expect(firstCheckbox).toBeChecked();

        await secondCheckbox.uncheck();
        await expect(secondCheckbox).not.toBeChecked();
    });
});