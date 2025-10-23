import { test, expect } from '@playwright/test';

test('Agregar producto al carrito y verificar resumen', async ({ page }) => {
  await page.goto('/productos');

  // Click en el primer botón "Agregar al Carrito"
  await page.click('text=Agregar al Carrito');

  // Ir a la página del carrito
  await page.goto('/carrito');

  // Verificar que el carrito muestre algún producto (usamos nombre presente en catálogo)
  await expect(page.locator('text=Aceite de Coco Orgánico')).toBeVisible({ timeout: 5000 });

  // Verificar que el resumen del pedido esté presente
  await expect(page.locator('text=Resumen del pedido')).toBeVisible();
});

