import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.js'

test('login con usuario válido', async ({ page }) => {
  const email = process.env.QA_EMAIL
  const password = process.env.QA_PASSWORD

  await page.goto('https://automationexercise.com')

  const loginPage = new LoginPage(page)

  await loginPage.open()
  await loginPage.login(email, password)

  await expect(page.getByText('Logged in as')).toBeVisible()

  await page.getByRole('link', { name: 'Products' }).click()
  await page.locator('#search_product').fill('Sleeveless Dress')
  await page.locator('#submit_search').click()
  await page.getByText('Add to cart').first().click()
  await expect(page.getByText('Added!')).toBeVisible()
  await page.getByRole('button', { name: 'Continue Shopping' }).click()
  await page.locator('#search_product').clear()
  await page.locator('#search_product').fill('Premium Polo T-Shirts')
  await page.locator('#submit_search').click()
  await page.getByText('Add to cart').first().click()
  await expect(page.getByText('Added!')).toBeVisible()
  await page.getByRole('button',{name: 'Continue Shopping'}).click()
  await page.getByRole('link', {name: 'Cart'}).click()
  await expect(page.getByText('Shopping Cart')).toBeVisible()
  await page.locator('.cart_quantity_delete').nth(2).click()
  await page.getByText('Proceed To Checkout').click()
  await expect (page.getByText('Address Details')).toBeVisible()
  await page.locator('textarea[name="message"]').fill('Este es mi comentario')
  await page.getByRole('link',{name: 'Place Order'}).click()
  await page.locator('[data-qa="name-on-card"]').fill('qa')
  await page.locator('[data-qa="card-number"]').fill ('12344321212')
  await page.locator('[data-qa="cvc"]').fill('123')
  await page.locator('[data-qa="expiry-month"]').fill('12')
  await page.locator('[data-qa="expiry-year"]').fill('33')
  await page.getByRole('button',{name: 'Pay and Confirm Order'}).click()





 


})
