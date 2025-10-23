# Pruebas E2E para A Hui Hou (Playwright)

Este paquete contiene un scaffold de pruebas End-to-End con Playwright para el proyecto **A Hui Hou**.
Los tests cubren flujos críticos: registro, login, agregar producto al carrito y ver el resumen.

## Requisitos (local)
- Node.js 18+ instalado
- En el directorio raíz del proyecto (donde está package.json), ejecutar:
  1. `npm install`
  2. `npx playwright install --with-deps`
  3. `npm run dev`  (levantar la app en `http://localhost:3000`)

## Ejecutar tests localmente
Desde la raíz del repo del proyecto:
```bash
# instalar playwright localmente si aún no lo hiciste
npm i -D @playwright/test

# instalar navegadores necesarios
npx playwright install --with-deps

# ejecutar tests (por defecto apuntan a http://localhost:3000)
npx playwright test --project=chromium
```

## Notas prácticas
- Los selectores usados son robustos pero pueden necesitar ajustes menores dependiendo de cambios en el DOM.
- Si un test falla por selector, abre la página en `http://localhost:3000` y usa `npx playwright codegen http://localhost:3000` para generar selectores precisos.
- Los tests asumen rutas:
  - `/registro` → formulario de registro
  - `/login` → formulario de login
  - `/productos` → catálogo
  - `/carrito` → resumen de carrito

## CI / GitHub Actions
Se incluye un workflow de ejemplo en `.github/workflows/playwright.yml`. Ajusta según tu flujo de despliegue.

