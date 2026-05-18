import { test, expect } from "@playwright/test"

test.describe("Login Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/login")
  })

  test("should display login form", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /iniciar sesión/i })).toBeVisible()
    await expect(page.getByLabel(/correo electrónico/i)).toBeVisible()
    await expect(page.getByLabel(/contraseña/i)).toBeVisible()
    await expect(page.getByRole("button", { name: /iniciar sesión/i })).toBeVisible()
  })

  test("should login successfully with valid credentials", async ({ page }) => {
    await page.getByLabel(/correo electrónico/i).fill("usuario@demo.com")
    await page.getByLabel(/contraseña/i).fill("demo123")
    await page.getByRole("button", { name: /iniciar sesión/i }).click()

    // Esperar redirección
    await page.waitForURL("http://localhost:3000/")
    await expect(page.getByText(/usuario demo/i)).toBeVisible()
  })

  test("should login as admin and redirect to admin panel", async ({ page }) => {
    await page.getByLabel(/correo electrónico/i).fill("admin@ahuihou.com")
    await page.getByLabel(/contraseña/i).fill("admin123")
    await page.getByRole("button", { name: /iniciar sesión/i }).click()

    // Esperar redirección al panel admin
    await page.waitForURL("http://localhost:3000/admin")
    await expect(page.getByText(/panel de administración/i)).toBeVisible()
  })

  test("should show error with invalid credentials", async ({ page }) => {
    await page.getByLabel(/correo electrónico/i).fill("invalid@email.com")
    await page.getByLabel(/contraseña/i).fill("wrongpassword")
    await page.getByRole("button", { name: /iniciar sesión/i }).click()

    // Esperar mensaje de error
    await expect(page.getByText(/error/i)).toBeVisible()
  })

  test("should toggle password visibility", async ({ page }) => {
    const passwordInput = page.getByLabel(/contraseña/i)
    const toggleButton = page.getByRole("button", { name: /mostrar contraseña/i })

    await expect(passwordInput).toHaveAttribute("type", "password")
    await toggleButton.click()
    await expect(passwordInput).toHaveAttribute("type", "text")
  })
})

test.describe("Logout Flow", () => {
  test("should logout successfully from desktop", async ({ page }) => {
    // Login primero
    await page.goto("http://localhost:3000/login")
    await page.getByLabel(/correo electrónico/i).fill("usuario@demo.com")
    await page.getByLabel(/contraseña/i).fill("demo123")
    await page.getByRole("button", { name: /iniciar sesión/i }).click()
    await page.waitForURL("http://localhost:3000/")

    // Logout
    await page.getByRole("button", { name: /usuario demo/i }).click()
    await page.getByRole("menuitem", { name: /cerrar sesión/i }).click()

    // Verificar que se cerró sesión
    await expect(page.getByRole("button", { name: /iniciar sesión/i })).toBeVisible()
  })

  test("should logout successfully from mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })

    // Login primero
    await page.goto("http://localhost:3000/login")
    await page.getByLabel(/correo electrónico/i).fill("usuario@demo.com")
    await page.getByLabel(/contraseña/i).fill("demo123")
    await page.getByRole("button", { name: /iniciar sesión/i }).click()
    await page.waitForURL("http://localhost:3000/")

    // Abrir menú móvil
    await page.getByRole("button", { name: /menu/i }).click()

    // Logout
    await page.getByRole("button", { name: /cerrar sesión/i }).click()

    // Verificar que se cerró sesión
    await expect(page.getByRole("button", { name: /iniciar sesión/i })).toBeVisible()
  })
})
