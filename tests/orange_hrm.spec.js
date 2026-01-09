import { test, expect } from '@playwright/test'

test('login admin en OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com')

  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

  //await expect(page.getByRole('heading','Dashboard')).toBeVisible()

  await page.getByRole('link', { name: 'Admin' }).click()
  /*await page.locator('.oxd-table-filter-header-options').click()*/
  await page.getByRole('button', { name: 'Add' }).click()
  // Abrir dropdown User Role
  await page
    .locator('div.oxd-select-text >> div.oxd-select-text-input')
    .first()
    .click();

  // Seleccionar Admin
  await page.getByRole('option', { name: 'Admin' }).click();

  await page
    .locator('div.oxd-select-text >> div.oxd-select-text-input')
    .nth(1)
    .click();
  await page.getByRole('option', { name: 'Enabled' }).click();

  await page.getByPlaceholder('Type for hints...').fill('n')
  await page.getByRole('option', { name: '99N75 425 5TlV' }).click()
  await page.locator('.oxd-input-group:has-text("Username") input').fill('Admin');
  await page
    .locator('.oxd-input-group:has-text("Password") input')
    .fill('admin123');

  await page
    .locator('.oxd-input-group:has-text("Confirm Password") input')
    .fill('admin123');










})

