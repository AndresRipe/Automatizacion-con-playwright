import { test, expect } from '@playwright/test';


test('usar usuario creado y comprar', async ({ page }) => {

    const email = process.env.QA_EMAIL;
    const password = process.env.QA_PASSWORD;
    await page.goto('https://automationexercise.com/')

    await page.getByRole('link', { name: 'Signup / Login' }).click()
    await page.locator('[data-qa="login-email"]').fill(email)
    await page.locator('[data-qa="login-password"]').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Logged in as')).toBeVisible();
    await page.getByRole('link',{name: ' Products'}).click()
    await page.getByPlaceholder('Search Product').fill('men Tshirt')
    await page.locator('#submit_search').click()
    await page.getByRole('link', {name: 'View Product'}).click()
    await page.getByRole('button',{name:'Add to cart'}).click()
    await expect(page.getByText('Added!')).toBeVisible();
    await page.getByRole('button',{name: 'Continue Shopping'}).click()
    await page.getByRole('link',{name: 'Cart'}).click()
    await page.getByText('Proceed To Checkout').click();
    await page.getByRole('link',{name: 'Place Order'}).click()
    await page.locator('[data-qa="name-on-card"]').fill('QAmaster')
    await page.locator('[data-qa="card-number"]').fill('123456789123')
    await page.locator('[data-qa="cvc"]').fill('123')
    await page.locator('[data-qa="expiry-month"]').fill('12')
    await page.locator('[data-qa="expiry-year"]').fill('33')
    await page.locator('[data-qa="pay-button"]').click()
    await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible()



});