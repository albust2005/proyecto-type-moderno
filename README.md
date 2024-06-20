# `agency-theme`

> TODO: description

## Installation

```
lerna bootstrap
```

## Run Development

```
npm run dev
```

## Build

```
npm run build
```

## Run Production

```
npm start
```

Especificación del documento - secciones

Nota: Tener en cuenta que muchos de los modelos y/o componentes del aplicativo, estan planteados para las posibles opciones del menu planteadas. 
Revisar como es posible ejecutar el menu de configuraciones del diseño.

Nota: La configuración de la pagina esta intregada en el archivo config.js dentro de la carpeta theme.

Header - Elementos

Header/Main (Importación de todos los modelos) 
    Modelos Menu Horizontal
    -> Logo y nombre de la empresa - Logo/index.js
    Nota: Tener en cuenta que se puede cambiar los elementos desde el archivo brand.js dentro de la carpeta public/text 
    -> Modelo Inicial - Header/TopNav/MixedNav
    -> Modelo responsive -  Header/sideNav/MixedMobile.js
    -> Menu de usuario (Configuración de idioma, Modo oscuro) - TopNav/UserMenu

Footer - Elementos

Footer/Main (Importación de los modelos)
    -> Modelo por defecto -> Footer/SiteMap.js
    Nota: Tener en cuenta la posibilidad de cambiar el modelo por uno mas acorde a las necesidades del proyecto.


El cuerpo ejecutable se encuentra integrado dentro de la carpeta public/

-> La carpeta [locale] es aquel que tiene la estructura del elemento, las carpetas externas solo son elementos redirecionables. Posiblemente utilizados para proteger las rutas del proyecto.

Blog
    -> Blog principal (Sección superior) -> components/Blog/Headline.js
    -> Detalles del Blog -> components/Blog/Article.js
    -> Modelo de blog segundo elemento -> Cards/PostCard.js
    Nota: Este es adaptable depende del espacio que se le asigne, entonces los modelos que se muestran son el mismo en diferente proporción.
    Nota: Toda la importación de los elementos se encuentra en la carpeta pages -> Ahi es donde se cargan los elementos y se pueden hacer las diferentes modificaciones.