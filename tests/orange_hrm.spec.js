import { test, expect } from '@playwright/test'
import { spec } from 'node:test/reporters'

test('login admin en OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com')

  const user = `qa${Date.now()}`;

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

  await page.getByPlaceholder('Type for hints...').fill('qa')
  await page.getByRole('option', { name: 'qa qa qa' }).click()
  await page.locator('.oxd-input-group:has-text("Username") input').fill(user);
  const contraseña = page.locator('input[type="password"]')
  await contraseña.nth(0).fill('admin123')
  await contraseña.nth(1).fill('admin123')
  await page.getByRole('button', { name: 'Save' }).click()
  await page.getByText('System Users', { exact: true }).waitFor();

  const username = page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Username' })
    .locator('input');

  await username.fill(user);

  await page.locator('div.oxd-select-text >> div.oxd-select-text-input').nth(0).click()
  await page.getByRole('option', { name: 'Admin' }).click()
  await page.getByPlaceholder('Type for hints...').fill('qa')
  await page.getByRole('option', { name: 'qa qa qa' }).click()

  await page
    .locator('div.oxd-select-text >> div.oxd-select-text-input')
    .nth(1)
    .click();

  await page.getByRole('option', { name: 'Enabled' }).click()













})

