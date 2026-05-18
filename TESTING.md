# Guía de Pruebas - A Hui Hou

Esta guía explica cómo ejecutar las diferentes pruebas implementadas en el proyecto.

## Instalación de Dependencias

Primero, asegúrate de tener todas las dependencias instaladas:

\`\`\`bash
npm install
\`\`\`

Para Playwright (pruebas E2E), instala los navegadores:

\`\`\`bash
npx playwright install
\`\`\`

## Tipos de Pruebas

### 1. Pruebas Unitarias (Vitest)

Las pruebas unitarias verifican funciones y lógica individual.

**Ejecutar todas las pruebas unitarias:**
\`\`\`bash
npm run test
\`\`\`

**Ejecutar con interfaz visual:**
\`\`\`bash
npm run test:ui
\`\`\`

**Ejecutar con cobertura de código:**
\`\`\`bash
npm run test:coverage
\`\`\`

**Archivos de prueba:**
- `__tests__/unit/auth.test.ts` - Pruebas del sistema de autenticación
- `__tests__/integration/products.test.ts` - Pruebas de integración de productos

### 2. Pruebas E2E (Playwright)

Las pruebas end-to-end simulan el comportamiento real del usuario.

**Ejecutar todas las pruebas E2E:**
\`\`\`bash
npm run test:e2e
\`\`\`

**Ejecutar con interfaz visual:**
\`\`\`bash
npm run test:e2e:ui
\`\`\`

**Ejecutar en modo debug:**
\`\`\`bash
npm run test:e2e:debug
\`\`\`

**Ejecutar en un navegador específico:**
\`\`\`bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
\`\`\`

**Archivos de prueba:**
- `__tests__/e2e/login.spec.ts` - Flujo de login/logout
- `__tests__/e2e/shopping-cart.spec.ts` - Funcionalidad del carrito

### 3. Ejecutar Todas las Pruebas

\`\`\`bash
npm run test:all
\`\`\`

## Estructura de Pruebas

\`\`\`
__tests__/
├── unit/              # Pruebas unitarias
│   └── auth.test.ts
├── integration/       # Pruebas de integración
│   └── products.test.ts
└── e2e/              # Pruebas end-to-end
    ├── login.spec.ts
    └── shopping-cart.spec.ts
\`\`\`

## Casos de Prueba Implementados

### Autenticación
- ✅ Login con credenciales válidas
- ✅ Login como administrador
- ✅ Manejo de errores con credenciales inválidas
- ✅ Logout desde desktop y móvil
- ✅ Persistencia de sesión en localStorage
- ✅ Validación de email y contraseña

### Productos
- ✅ Listado de productos
- ✅ Filtrado por categoría
- ✅ Búsqueda por nombre
- ✅ Cálculo de precios y descuentos

### Carrito de Compras
- ✅ Agregar productos al carrito
- ✅ Actualizar cantidad de productos
- ✅ Eliminar productos del carrito
- ✅ Cálculo correcto del total

## Usuarios de Prueba

Para las pruebas E2E, usa estos usuarios:

**Usuario Regular:**
- Email: `usuario@demo.com`
- Contraseña: `demo123`

**Administrador:**
- Email: `admin@ahuihou.com`
- Contraseña: `admin123`

## Configuración

### Vitest (vitest.config.ts)
- Entorno: jsdom
- Plugins: React
- Alias: @ apunta a la raíz del proyecto

### Playwright (playwright.config.ts)
- Navegadores: Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari
- Base URL: http://localhost:3000
- Screenshots en fallos
- Traces en reintentos

## Mejores Prácticas

1. **Ejecuta las pruebas antes de hacer commit:**
   \`\`\`bash
   npm run test:all
   \`\`\`

2. **Escribe pruebas para nuevas funcionalidades**

3. **Mantén las pruebas simples y enfocadas**

4. **Usa nombres descriptivos para los tests**

5. **Limpia el estado entre pruebas**

## Solución de Problemas

### Error: "Port 3000 is already in use"
Asegúrate de que no haya otra instancia de Next.js corriendo:
\`\`\`bash
lsof -ti:3000 | xargs kill -9
\`\`\`

### Error: "Playwright browsers not installed"
Instala los navegadores de Playwright:
\`\`\`bash
npx playwright install
\`\`\`

### Pruebas lentas
Ejecuta las pruebas en paralelo (configuración por defecto) o reduce el número de workers en `playwright.config.ts`.

## CI/CD

Las pruebas están configuradas para ejecutarse en CI con:
- Reintentos automáticos en caso de fallo
- Un solo worker para evitar conflictos
- Reportes HTML generados automáticamente

## Recursos Adicionales

- [Documentación de Vitest](https://vitest.dev/)
- [Documentación de Playwright](https://playwright.dev/)
- [Testing Library](https://testing-library.com/)
