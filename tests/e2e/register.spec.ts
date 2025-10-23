import { test, expect } from '@playwright/test';

test('Registro - flujo feliz', async ({ page }) => {
  await page.goto('/registro');

  // Llenar los primeros 3 inputs (nombre, correo, contraseña)
  const inputs = page.locator('input');
  await inputs.nth(0).fill('QA Test Usuario');
  const email = `test+${Date.now()}@ahuihou.com`;
  await inputs.nth(1).fill(email);
  await inputs.nth(2).fill('Aa123456');

  // Intentar encontrar botón de envío (fallbacks por texto común en UI)
  const btn = page.getByRole('button', { name: /crear cuenta|registrar|registrarse|crear/i }).first();
  await btn.click();

  // Esperar mensaje de éxito que devuelve la API (si la UI lo muestra)
  await expect(page.locator('text=Usuario creado exitosamente')).toBeVisible({ timeout: 5000 });
});

