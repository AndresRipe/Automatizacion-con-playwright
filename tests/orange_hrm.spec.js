import { test, expect } from '@playwright/test'

test('login admin en OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com')

  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

  //await expect(page.getByRole('heading','Dashboard')).toBeVisible()

  await page.getByRole('link',{name: 'Admin'}).click()
  await page.locator('.oxd-table-filter-header-options').click()

})

