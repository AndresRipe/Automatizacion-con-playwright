// importar Playwright Test
import { test, expect } from '@playwright/test';

test('crear cuenta y confirmar correo', async ({ page }) => {
    await page.goto('https://automationexercise.com/')

    const email = `qa${Date.now()}@yopmail.com`;

    await page.getByRole('link', { name: 'Signup / Login' }).click()
    await page.getByPlaceholder('name').fill('QA2')
    await page.locator('[data-qa="signup-email"]').fill(email)
    await page.getByRole('button', { name: 'Signup' }).click()
    await page.locator('#id_gender1').check()

    await page.locator('[data-qa="password"]').fill('Clave123')
    await page.locator('[data-qa="days"]').selectOption('15')
    await page.locator('#months').selectOption('February')
    await page.locator('[data-qa="years"]').selectOption('2004')
    await page.getByRole('checkbox', { name: 'newsletter' }).check()
    await page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }).check()
    await page.locator('[data-qa="first_name"]').fill('QA')
    await page.locator('[data-qa="last_name"]').fill('andresqa')
    await page.locator('[data-qa="company"]').fill('the best')
    await page.locator('[data-qa="address"]').fill('carrera13')
    await page.locator('[data-qa="address2"]').fill('carrwa3')
    await page.locator('[data-qa="country"]').selectOption('Australia')
    await page.locator('[data-qa="state"]').fill('best city')
    await page.locator('[data-qa="city"]').fill('QA')
    await page.locator('[data-qa="zipcode"]').fill('QA')
    await page.locator('[data-qa="mobile_number"]').fill('QA')
    await page.getByRole('button', { name: 'Create Account' }).click()
    await expect(page.getByText('Account Created!')).toBeVisible()
    await page.getByRole('link',{name: 'Continue'}).click()



});

test('usar usuario creado y comprar', async ({ page }) => {
    await page.goto('https://automationexercise.com/')

    });