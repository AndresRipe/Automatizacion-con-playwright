import { test, expect } from '@playwright/test';


test('leer credenciales', async () => {
  console.log(process.env.QA_EMAIL)
  console.log(process.env.QA_PASSWORD)
})
