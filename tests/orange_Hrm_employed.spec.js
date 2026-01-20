import { test, expect } from '@playwright/test'
import { spec } from 'node:test/reporters'

test('crear empleoyed en OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com')

  const user = `qa${Date.now()}`;

  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

  //await expect(page.getByRole('heading','Dashboard')).toBeVisible()

  await page.getByRole('link', { name: 'PIM' }).click()
  await page.getByRole('button', { name: 'Add' }).click()
  await page.getByPlaceholder('First Name').fill('QA1')
  await page.getByPlaceholder('Middle Name').fill('qa1')
  await page.getByPlaceholder('Last Name').fill('QA1')
  // Busca el grupo que contiene ese texto específico y luego el input dentro
  await page.locator('.oxd-input-group')
    .filter({ hasText: 'Employee Id' })
    .getByRole('textbox') // o .locator('input')
    .fill(user);

  await page.getByRole('button',{name: 'Save'}).click()






})

