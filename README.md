# EduFísica Primaria

Web profesional de recursos para docentes de Educación Primaria y Educación Física en España, construida con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, optimizada para SEO, rendimiento y monetización con Google AdSense.

## 📁 Estructura del proyecto

```
edufisica-web/
├── app/                        # Rutas (App Router)
│   ├── layout.tsx              # Layout raíz + metadatos SEO globales + JSON-LD
│   ├── page.tsx                # Home
│   ├── globals.css
│   ├── sitemap.ts              # /sitemap.xml dinámico
│   ├── robots.ts               # /robots.txt dinámico
│   ├── manifest.ts             # manifest PWA
│   ├── not-found.tsx
│   ├── blog/
│   │   ├── page.tsx            # Listado + filtro por categoría
│   │   └── [slug]/page.tsx     # Detalle de artículo (SEO dinámico, índice, relacionados)
│   ├── juegos-educacion-fisica/{page.tsx, [subcategoria]/page.tsx}
│   ├── situaciones-aprendizaje/{page.tsx, [curso]/page.tsx}
│   ├── evaluacion/{page.tsx, [tipo]/page.tsx}
│   ├── herramientas/
│   │   ├── page.tsx
│   │   ├── generador-rubricas/page.tsx
│   │   ├── calculadora-notas/page.tsx
│   │   ├── generador-situaciones-aprendizaje/page.tsx
│   │   └── generador-criterios-evaluacion/page.tsx
│   ├── sobre-nosotros/page.tsx
│   ├── contacto/page.tsx
│   ├── aviso-legal/page.tsx
│   ├── politica-privacidad/page.tsx
│   └── politica-cookies/page.tsx
├── components/                 # Header, Footer, Hero, ArticleCard, AdSlot, etc.
├── lib/                        # site.ts, categories.ts, articles.ts (contenido), markdown.ts
├── public/
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

El contenido (30 artículos de ejemplo) vive en `lib/articles.ts` como datos tipados en TypeScript, no en un CMS externo. Esto simplifica el despliegue: para añadir un artículo nuevo solo hay que añadir un objeto más al array `articles`, respetando la estructura (`slug`, `title`, `metaDescription`, `category`, `subcategory`, `date`, `author`, `readingTime`, `excerpt`, `content`).

## 🎯 Espacios reservados para AdSense

El componente `components/AdSlot.tsx` dibuja un recuadro de "espacio publicitario" en 4 posiciones (`header`, `in-article`, `article-end`, `sidebar`) mientras `siteConfig.adsense.enabled` sea `false` en `lib/site.ts`. Cuando tengas la cuenta de AdSense aprobada, sigue las instrucciones dentro de ese mismo archivo y de `app/layout.tsx` (están comentadas paso a paso).

---

## 🚀 1. Instalar dependencias

Requisitos: Node.js 18.18 o superior.

```bash
cd edufisica-web
npm install
```

## 💻 2. Ejecutar en local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador. Los cambios en el código se recargan automáticamente.

Para comprobar el build de producción en local:

```bash
npm run build
npm run start
```

## 🐙 3. Subir el proyecto a GitHub

```bash
git init
git add .
git commit -m "Primera versión de EduFísica Primaria"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/edufisica-primaria.git
git push -u origin main
```

(Crea antes el repositorio vacío en GitHub, sin README ni .gitignore, para evitar conflictos al hacer push.)

## ▲ 4. Desplegar en Vercel

1. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Pulsa **"Add New… → Project"**.
3. Selecciona el repositorio `edufisica-primaria` que acabas de subir.
4. Vercel detecta automáticamente que es un proyecto Next.js: no necesitas cambiar ningún ajuste de build.
5. Pulsa **Deploy**. En 1-2 minutos tendrás una URL pública tipo `https://edufisica-primaria.vercel.app`.

Cada `git push` a la rama `main` desplegará automáticamente una nueva versión.

## 🌐 5. Conectar tu dominio propio

1. Compra tu dominio (por ejemplo, en Namecheap, IONOS o Google Domains).
2. En el panel de Vercel, entra en tu proyecto → **Settings → Domains**.
3. Escribe tu dominio (ej. `edufisicaprimaria.es`) y pulsa **Add**.
4. Vercel te mostrará los registros DNS que debes configurar en tu proveedor de dominio:
   - Un registro **A** apuntando a la IP de Vercel, o
   - Un registro **CNAME** apuntando a `cname.vercel-dns.com` (para subdominios como `www`).
5. Espera a que se propague el DNS (puede tardar desde minutos hasta 24-48h) y Vercel activará el certificado SSL automáticamente.
6. Actualiza `siteConfig.url` en `lib/site.ts` con tu dominio definitivo y vuelve a desplegar.

## 🔍 6. Configurar Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console).
2. Añade una propiedad de tipo **"Dominio"** (recomendado) o **"Prefijo de URL"** con tu dominio de Vercel/dominio propio.
3. Verifica la propiedad mediante el registro TXT en tu DNS (opción recomendada para dominios propios) o subiendo el archivo HTML de verificación a la carpeta `public/`.
4. Una vez verificada, ve a **Sitemaps** en el menú lateral y envía la URL de tu sitemap:
   ```
   https://tu-dominio.es/sitemap.xml
   ```
5. Revisa periódicamente el informe de **Cobertura** e **Indexación** para detectar errores.

## 📊 7. Configurar Google Analytics (GA4)

1. Entra en [analytics.google.com](https://analytics.google.com) y crea una propiedad GA4.
2. Copia tu ID de medición (formato `G-XXXXXXXXXX`).
3. Pégalo en `lib/site.ts`, en `siteConfig.analytics.gaId`.
4. En `app/layout.tsx`, descomenta el bloque de scripts de Google Analytics (está señalado con un comentario explicativo).
5. Haz commit y push: Vercel desplegará la versión con Analytics activo.
6. Verifica en el informe "Tiempo real" de GA4 que las visitas se están registrando.

## 💰 8. Solicitar Google AdSense

1. Asegúrate de tener contenido suficiente y publicado (ya cuentas con 30 artículos de ejemplo; se recomienda ampliarlos y personalizarlos antes de solicitar la revisión).
2. Entra en [adsense.google.com](https://www.adsense.google.com) y da de alta tu sitio con tu dominio propio ya desplegado.
3. Google te dará un fragmento de código con tu `client ID` (formato `ca-pub-XXXXXXXXXXXXXXXX`):
   - Pégalo en `lib/site.ts`, en `siteConfig.adsense.client`.
   - Descomenta el `<script>` de AdSense en `app/layout.tsx`.
4. Despliega los cambios y espera la revisión de Google (puede tardar de varios días a un par de semanas).
5. Una vez aprobado:
   - Cambia `siteConfig.adsense.enabled` a `true` en `lib/site.ts`.
   - En `components/AdSlot.tsx`, descomenta el bloque `<ins className="adsbygoogle" ...>` y sustituye `data-ad-slot` por el ID de cada bloque de anuncios que crees en tu panel de AdSense (cabecera, dentro de artículo, final de artículo, barra lateral).
6. Revisa la política de contenidos de AdSense y asegúrate de que las páginas de Aviso Legal, Privacidad y Cookies reflejan datos reales antes de la revisión.

## ✅ Checklist final antes de publicar

- [ ] Sustituir los datos de ejemplo en `lib/site.ts` (nombre, email, dominio real).
- [ ] Revisar y personalizar Aviso Legal, Privacidad y Cookies con datos reales (recomendable revisión legal).
- [ ] Añadir imágenes reales en `public/` (og-image.jpg, iconos, favicon).
- [ ] Ampliar o personalizar los 30 artículos de ejemplo de `lib/articles.ts`.
- [ ] Conectar un proveedor real de envío de formularios/newsletter (los formularios actuales son de demostración de UI).
- [ ] Configurar Search Console, Analytics y AdSense siguiendo los pasos anteriores.

---

Hecho con Next.js, TypeScript y Tailwind CSS. Proyecto listo para desplegar en Vercel sin modificaciones adicionales.
