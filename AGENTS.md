# Reglas del sitio de MetalCim

Lee este archivo completo antes de hacer cualquier cambio. Aplica a personas y a asistentes de IA (Codex, ChatGPT).

## Qué es este repositorio

- Sitio de presentación de **Metalcim Cimbra y Puntales, S.A.S. de C.V.** — `https://metalcim.com.mx`.
- HTML, CSS y JavaScript estáticos. Sin frameworks, sin compilación, sin base de datos.
- Todo lo que se publica está en `site/`. Al aprobar un cambio en `main`, GitHub lo sube solo al hosting.

## Qué se puede tocar

| Se puede | No se puede |
|---|---|
| `site/index.html` | `.github/` (publicación automática) |
| `site/aviso-de-privacidad.html` | `site/.htaccess` y `site/assets/.htaccess` |
| `site/assets/css/` | Este archivo (`AGENTS.md`), salvo que Antonio lo pida |
| `site/assets/js/` | |
| `site/assets/img/` (agregar o reemplazar fotos) | |

## Reglas de contenido

- **Todo en español de México.** Tono claro y directo, sin tecnicismos.
- **Sin precios ni existencias**, excepto en promociones aprobadas (por ejemplo, el Buen Fin). Los precios viven en Odoo.
- **WhatsApp:**
  - Catálogo (puntales, cimbra, andamios) → **55 7419 5833** (Ventas).
  - Botón verde: "Necesito ayuda con mi proyecto" → **772 174 2831**; "Cotizar renta de producto" → **55 7419 5833**.
  - Formulario de cotización → **772 174 2831**.
  - Todo mensaje empieza con: `Hola, vengo de www.metalcim.com.mx, …`
- **El formulario no guarda datos**: solo arma un mensaje y abre WhatsApp. No agregar formularios que envíen datos a servidores ni analíticas con cookies.
- Eslogan: **"Construye con confianza"**.
- Dirección: Calle Vicente Guerrero No. 9, Barrio La Capilla, El Arenal, Hidalgo, C.P. 42680.
- No subir respaldos, contraseñas, archivos de WordPress ni datos de clientes. **Este repositorio es público.**

## Reglas técnicas

- **Sin CDN ni servicios externos nuevos**: fuentes, librerías e imágenes se guardan en `site/assets/`. Excepción existente: el mapa de Google Maps del pie de página.
- **Imágenes**: JPG o PNG optimizadas, máximo ~1200 px de ancho y ~300 KB. Nombres en minúsculas con guiones (`ejemplo-de-uso-de-andamio.jpg`).
- **Caché**: si cambias un archivo de `assets/css/` o `assets/js/`, cambia también el número `?v=` en **todas** las etiquetas `<link>` y `<script>` de `index.html` y `aviso-de-privacidad.html` (usa la fecha, por ejemplo `?v=20261120a`). Si no, los visitantes siguen viendo la versión anterior.
- **Celular primero**: todo debe verse bien a 390 px de ancho y en computadora.
- No romper: el menú del encabezado, el carrusel de promociones (`site/assets/js/promos.js`), el cuestionario en ventana en celular (`site/assets/js/cotizar.js`) ni los enlaces de WhatsApp.

## Cómo trabajar

- **Cambios pequeños**: haz solo lo que se pidió. Nada de rediseños ni "mejoras" extra.
- Un cambio por pull request, con un título claro en español (por ejemplo: "Cambiar foto de la tarjeta de andamios").
- En la descripción del pull request explica **qué cambió y dónde se ve** en el sitio.
- Nunca publiques directo en `main`: siempre por pull request para que Antonio lo apruebe.
