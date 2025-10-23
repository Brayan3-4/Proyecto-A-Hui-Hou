# A Hui Hou - Tienda de Productos Naturales

Una tienda en línea moderna y elegante especializada en productos naturales y saludables, construida con Next.js 14, React 19, TypeScript y Tailwind CSS.

## 🌿 Características

- **Diseño Minimalista**: Colores naturales (verdes y tierra) con tipografía elegante
- **Autenticación Completa**: Sistema de login/registro con roles de usuario y administrador
- **Catálogo de Productos**: Navegación con filtros, búsqueda y páginas de detalle
- **Carrito de Compras**: Funcionalidad completa de e-commerce
- **Panel de Administración**: Gestión de productos, pedidos y usuarios
- **Responsive**: Optimizado para todos los dispositivos
- **Accesibilidad**: Cumple con estándares WCAG

## 🚀 Tecnologías

- **Frontend**: Next.js 14, React 19, TypeScript
- **Estilos**: Tailwind CSS v4, shadcn/ui
- **Iconos**: Lucide React
- **Formularios**: React Hook Form + Zod
- **Estado**: Context API de React
- **Tipografía**: Inter + Playfair Display

## 📦 Instalación

1. Clona el repositorio:
\`\`\`bash
git clone <tu-repositorio>
cd a-hui-hou
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
# o
pnpm install
# o
yarn install
\`\`\`

3. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
# o
pnpm dev
# o
yarn dev
\`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 👥 Usuarios Demo

### Administrador
- **Email**: admin@ahuihou.com
- **Contraseña**: admin123
- **Acceso**: Panel de administración completo

### Usuario Regular
- **Email**:  
- **Contraseña**: demo123
- **Acceso**: Funcionalidades de cliente

## 🏗️ Estructura del Proyecto

\`\`\`
a-hui-hou/
├── app/                    # App Router de Next.js
│   ├── admin/             # Panel de administración
│   ├── api/               # API Routes
│   ├── carrito/           # Página del carrito
│   ├── login/             # Página de login
│   ├── productos/         # Catálogo y detalles de productos
│   └── registro/          # Página de registro
├── components/            # Componentes reutilizables
│   ├── admin/            # Componentes del admin
│   ├── auth/             # Componentes de autenticación
│   ├── cart/             # Componentes del carrito
│   ├── products/         # Componentes de productos
│   └── ui/               # Componentes base de shadcn/ui
├── hooks/                # Custom hooks
├── lib/                  # Utilidades y configuración
└── public/               # Archivos estáticos
\`\`\`

## 🎨 Paleta de Colores

- **Verde Primario**: `#22c55e` (Sage)
- **Verde Secundario**: `#16a34a` (Forest)
- **Beige**: `#f5f5dc` (Warm)
- **Terracota**: `#cd853f` (Earth)
- **Neutros**: Grises y blancos para balance

## 🛠️ Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter de código

## 📱 Funcionalidades

### Para Usuarios
- Navegación intuitiva del catálogo
- Filtros por categoría y precio
- Búsqueda de productos
- Carrito de compras persistente
- Proceso de checkout
- Historial de pedidos

### Para Administradores
- Dashboard con estadísticas
- Gestión completa de productos (CRUD)
- Administración de pedidos
- Gestión de usuarios
- Reportes y analytics

## 🌐 Deployment

El proyecto está optimizado para deployment en Vercel:

1. Conecta tu repositorio a Vercel
2. Las variables de entorno se configuran automáticamente
3. El build se ejecuta automáticamente en cada push

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, puedes:
- Abrir un issue en GitHub
- Contactar al equipo de desarrollo

---

**A Hui Hou** - Productos naturales para una vida saludable 🌿
