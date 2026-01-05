// importar Playwright Test
import { test, expect } from '@playwright/test';

test('crear cuenta y confirmar correo', async ({ page }) => {
    await page.goto('https://test.a2censo.com');

    await page.getByRole('button', { name: 'Iniciar Sesión' }).click()
    await page.locator('#email').fill('alegra@yopmail.com')
    await page.locator('#password').fill('Clave1234*')
    await page.getByTestId('_button').click()
    await page.locator('#go-create-campaigns').click()
    await page.getByTestId('nameOfCampaign').fill('playright')
    await page.locator('#whatWillWeDo').fill('QA')







});
