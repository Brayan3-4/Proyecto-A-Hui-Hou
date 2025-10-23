import { test, expect } from '@playwright/test';

test('Login - usuario demo', async ({ page }) => {
  await page.goto('/login');

  const inputs = page.locator('input');
  // El proyecto incluye un usuario demo en la ruta /api/auth/login:
  // email: usuario@demo.com  password: demo123
  await inputs.nth(0).fill('usuario@demo.com');
  await inputs.nth(1).fill('demo123');

  // Botón con texto 'Iniciar sesión' / 'Login' / 'Entrar'
  const btn = page.getByRole('button', { name: /iniciar sesión|login|entrar|acceder/i }).first();
  await btn.click();

  // Tras login, la UI guarda user en localStorage y redirige.
  // Verificamos que el header muestre 'Cerrar sesión' o el nombre del usuario.
  await expect(page.locator('text=Cerrar sesión').first()).toBeVisible({ timeout: 5000 });
});

