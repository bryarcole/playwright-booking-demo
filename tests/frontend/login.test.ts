import { test, expect} from '@playwright/test';

test.describe('Login Form', () => {
    test('Login sucess', async ({ page }) => {
        await page.goto('/login');
        await page.fill('#username', 'tomsmith');
        await page.fill('#password', 'secretpassword');
        await page.click('button[type="submit"]');

        const successMessage = await page.locator('.flash.success');
    });
    test('Login failure', async ({page}) => {
        await page.goto('/login');
        await page.fill('#username', 'invalidUser');
        await page.fill('#password', 'invalidPassword');
        await page.click('button[type="submit"]');

        const errorMessage = await page.locator('flash.error');
        await expect(errorMessage).toContainText('Your user is invalid');
    });
});