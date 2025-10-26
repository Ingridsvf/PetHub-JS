# PetHub
---
Sitio web estático de ejemplo para una tienda de mascotas (PetHub). Incluye páginas HTML, estilos en SASS/SCSS y JavaScript para funcionalidades de carrito, ofertas y notificaciones.

## Contenido y propósito

Este proyecto es una pequeña tienda front-end que muestra productos/ofertas para mascotas, permite añadir artículos a un carrito y navegar entre páginas estáticas. Está pensado como una plantilla educativa o demo para practicar HTML, CSS (Sass) y JavaScript.

## Estructura del proyecto

`index.html` — Página principal.
📁 `imagenes/` — Imágenes usadas en la web.
📁`js/` — Lógica JavaScript principal:
  - `array.json` — Datos de productos (JSON).
  - `comprar.js` — Lógica relacionada con la compra/añadir productos.
  - `notificaciones.js` — Notificaciones al usuario.
  - `vercarrito.js` — Funcionalidad del carrito (ver/gestionar artículos).
📁`paginas/` — Páginas internas (carrito, gatos, perros, ofertas, registro, gracias, tiendas, otras mascotas, petlovers).
📁`sass/` — Archivos Sass/SCSS (partials y `style.scss`).
  - `_variables.scss`, `_mixins.scss`, `_header.scss`, `_footer.scss`, `_carrito.scss`, `_formulario.scss`, `_ofertas.scss`, `_otrasmascotas.scss`, `_animaciones.scss`, `_media.scss` — parciales y estilos organizados.
  - `style.scss` — archivo principal que importa parciales y compila a `style.css`.
- `style.css` — CSS compilado (generado a partir de `sass/style.scss`).

## Principales funcionalidades

- Listado de productos (desde `array.json`).
- Añadir/quitar productos del carrito y ver el carrito (`vercarrito.js`).
- Proceso de compra (interfaz de compra, `comprar.js`).
- Notificaciones al usuario (`notificaciones.js`).
- Páginas específicas por categoría (gatos, perros, otras mascotas) y páginas auxiliares (registro, gracias).

## Arquitectura y decisiones de diseño

- Proyecto estático: toda la lógica corre en el navegador (cliente). No hay backend incluido.
- Organización modular y por responsabilidad: HTML para estructura, SCSS para estilos (parciales) y JS para comportamiento.
- Datos de ejemplo en `js/array.json` simplifican las pruebas sin un servidor.
- Sass se usa para mantener los estilos escalables y reutilizables mediante parciales y variables.

## Requisitos y herramientas recomendadas

- Navegador moderno (Chrome, Edge, Firefox).
- Node.js/npm sólo si quieres agregar herramientas de desarrollo (optativo).
- Dart Sass (o la extensión Live Sass de tu editor) para compilar SCSS a CSS si editas estilos.

## Desarrollo y ejecución local

1. Abrir el proyecto: simplemente abre `index.html` en el navegador o sirve la carpeta con una extensión como Live Server (VS Code) para recargas automáticas.

2. Compilar SCSS (opcional): si editas SCSS, instala Sass y compila:

```powershell
# Instalar Sass (si no lo tienes)
npm install -g sass

# Compilar en modo watch (desde la raíz del proyecto)
sass --watch sass/style.scss style.css
```

3. Dependencias y scripts: actualmente `package.json` no contiene scripts de desarrollo (sólo el script `test` por defecto). Puedes agregar scripts como:

```json
"scripts": {
  "sass": "sass --watch sass/style.scss:style.css",
  "start": "live-server --port=3000"
}
```

(Ajusta según tus herramientas preferidas — p. ej. `live-server`, `http-server` o la extensión Live Server de VS Code.)

## Buenas prácticas y notas

- Mantén los assets (imágenes) optimizados. Usa rutas relativas en HTML/JS.
- Si conviertes esto en una app real, añade un backend para manejar inventario, pagos y persistencia del carrito.
- Añade validaciones en el front y prepara endpoints seguros en el backend si incorporas uno.

## Contribuir

- Crea un fork y abre un pull request con cambios claros.
- Para cambios en estilos, modifica los parciales SCSS y asegúrate de compilar `style.css`.
- Para cambios en datos de ejemplo, actualiza `js/array.json`.

## Licencia

Este repositorio no especifica una licencia en `package.json`; añade un archivo `LICENSE` o actualiza `package.json` si quieres publicar con una licencia (MIT, GPL, etc.).

## Contacto

Repositorio originario: https://github.com/Ingridsvf/PetHub-JS/

---

Si quieres, puedo:
- añadir scripts útiles en `package.json` para compilar Sass y servir el proyecto.
- crear un pequeño script npm para iniciar Live Server o documentación adicional.

Indícame qué prefieres y lo implemento.
