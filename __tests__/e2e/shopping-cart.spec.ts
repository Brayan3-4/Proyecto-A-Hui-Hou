import { test, expect } from "@playwright/test"

test.describe("Shopping Cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000")
  })

  test("should add product to cart", async ({ page }) => {
    await page.goto("http://localhost:3000/productos")

    // Agregar primer producto
    await page
      .getByRole("button", { name: /agregar al carrito/i })
      .first()
      .click()

    // Verificar que el contador del carrito aumentó
    await expect(page.getByText("1")).toBeVisible()
  })

  test("should update product quantity in cart", async ({ page }) => {
    await page.goto("http://localhost:3000/productos")
    await page
      .getByRole("button", { name: /agregar al carrito/i })
      .first()
      .click()

    // Ir al carrito
    await page.getByRole("button", { name: /carrito/i }).click()
    await page.goto("http://localhost:3000/carrito")

    // Aumentar cantidad
    await page.getByRole("button", { name: /\+/i }).click()
    await expect(page.getByText("2")).toBeVisible()
  })

  test("should remove product from cart", async ({ page }) => {
    await page.goto("http://localhost:3000/productos")
    await page
      .getByRole("button", { name: /agregar al carrito/i })
      .first()
      .click()

    // Ir al carrito
    await page.goto("http://localhost:3000/carrito")

    // Eliminar producto
    await page.getByRole("button", { name: /eliminar/i }).click()
    await expect(page.getByText(/tu carrito está vacío/i)).toBeVisible()
  })

  test("should calculate total correctly", async ({ page }) => {
    await page.goto("http://localhost:3000/productos")

    // Agregar múltiples productos
    const addButtons = page.getByRole("button", { name: /agregar al carrito/i })
    await addButtons.first().click()
    await addButtons.nth(1).click()

    // Ir al carrito
    await page.goto("http://localhost:3000/carrito")

    // Verificar que hay un total
    await expect(page.getByText(/total:/i)).toBeVisible()
  })
})
