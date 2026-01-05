export class LoginPage {
  constructor(page) {
    this.page = page

    // Locators (los botones y campos)
    this.loginLink = page.getByRole('link', { name: 'Signup / Login' })
    this.emailInput = page.locator('[data-qa="login-email"]')
    this.passwordInput = page.locator('[data-qa="login-password"]')
    this.loginButton = page.getByRole('button', { name: 'Login' })
  }

  async open() {
    await this.loginLink.click()
  }

  async login(email, password) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
}
