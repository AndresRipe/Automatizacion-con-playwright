// importar Playwright Test
/*import { test, expect } from '@playwright/test';

test('crear cuenta y confirmar correo', async ({ page }) => {
  await page.goto('https://test.a2censo.com');

  await page.getByRole('button', { name: 'Crear cuenta' }).click();
  await page.locator('#sign-up-card-1').click();
  await page.locator('#person-type-card-natural').click();

  await page.locator('#name').fill('AR');
  await page.locator('#lastname').fill('RRbest');

  await page.selectOption('select[name="documentType"]', '1'); // CC
  await page.locator('#documentNumber').fill('32371372');
  await page.locator('#confirmDocument').fill('32371372');

  const email = `qa_${Date.now()}@yopmail.com`;
  await page.locator('#email').fill(email);

  await page.locator('#phoneNumber').fill('3143111428');
  await page.locator('#password').fill('Clave1234*');
  await page.locator('#confirmPassword').fill('Clave1234*');

  // ===== Políticas =====
  await page.locator('#checkbox-politics').click();
  const politicsModal = page.getByTestId('politics-modal-content');
  await politicsModal.evaluate(el => (el.scrollTop = el.scrollHeight));
  await page.locator('#continue-button').click();

  // ===== Términos =====
  await page.locator('#checkbox-terms').click();
  const termsModal = page.getByTestId('terms-modal-content');
  await termsModal.evaluate(el => (el.scrollTop = el.scrollHeight));
  await page.locator('#continue-button').click();

  // ===== Enviar =====
  const sendBtn = page.locator('#send_button');
  await expect(sendBtn).toBeEnabled();
  await sendBtn.click();

  // Esperar cambio de vista (forma correcta)
  await expect(sendBtn).toBeDisabled({ timeout: 10000 });

  await expect(
    page.getByTestId('check-email-container')
  ).toBeVisible({ timeout: 10000 });

  await expect(
    page.getByTestId('check-email-container')
  ).toContainText('Revisa tu correo');

  // ===== YOPMAIL =====
  await page.goto('https://yopmail.com/es/');

  const inbox = email.split('@')[0];
  await page.locator('#login').fill(inbox);
  await page.locator('#refreshbut').click();

  // iframe del correo
  test.setTimeout(120000);

  const mailFrame = page.frameLocator('#ifmail');

  await expect
    .poll(async () => {
      await page.click('#refresh');
      return mailFrame.locator('a', { hasText: /confirm/i }).isVisible();
    }, {
      timeout: 60000,
      intervals: [5000],
    })
    .toBe(true);

  const [nuevaPagina] = await Promise.all([
    page.context().waitForEvent('page'),
    mailFrame.locator('a', { hasText: /confirm/i }).click(),
  ]);

 await nuevaPagina.waitForLoadState('networkidle');







});
*/