const e=`# HTML\r
\r
## Introducción\r
\r
**HTML**, que son las siglas en inglés de _HyperText Markup Language_ (‘lenguaje de marcado de hipertexto’), se refiere al lenguaje de marcado utilizado para crear páginas web. Este lenguaje establece un estándar para la construcción de páginas web en varias versiones. Define una estructura fundamental y un conjunto de códigos, conocidos como código **HTML**, para la definición de contenido en una página web. Esto abarca elementos como texto, imágenes, videos, juegos, entre otros.\r
\r
Actualmente estamos en la quinta versión, conocida como **HTML5**, la cual trajo consigo muchas novedades en comparación con las primeras etapas de Internet.\r
\r
También trataremos sobre **Emmet**. Esta es una extensión para editores de código que optimiza la velocidad de codificación y edición en **HTML**, **XML**, **XSL** y otros formatos de código estructurado. Con la asistencia que brinda, **Emmet** te permite escribir y editar código **HTML** y **CSS** de manera rápida y eficiente mediante abreviaciones.\r
\r
Para los desarrolladores de páginas web que trabajan con archivos **HTML**, un simple editor de texto a veces no es suficiente. Especialmente en el desarrollo frontend, **Emmet** representa un avance significativo para aumentar la productividad. Este _plugin_ aprovecha pequeñas abreviaciones para generar estructuras de código **HTML** y **CSS** de mayor envergadura, permitiéndote crear contenido complejo con rapidez y facilidad. Aunque **Emmet** es opcional, puede mejorar significativamente la eficiencia y productividad al escribir código **HTML** y **CSS**.\r
\r
Te recomiendo primero completar todo el contenido sobre **HTML** y practicar con él. Después de sentirte cómodo con **HTML**, puedes comenzar a aprender y utilizar **Emmet**. Probablemente sea más fácil de esa manera.\r
\r
## Tutorial\r
\r
### HTML\r
\r
En este video, a pesar de su duración, descubrirás cómo utilizar **HTML**. Obtendrás consejos, conocerás buenas prácticas y accederás a valiosos recursos. Aunque extenso, es una fuente completa e imprescindible para dar inicio a tu aventura en el mundo del desarrollo web:\r
\r
-   **[Curso HTML & CSS (1/5): Fundamentos HTML - jonmircha](https://www.youtube.com/watch?v=-oK6zL01fNM)**\r
\r
### Emmet\r
\r
En el video, la sección de **Emmet** comienza después de 2 horas, 33 minutos y 30 segundos. Es una referencia al mismo video que se mencionó en la sección de los editores de código.\r
\r
-   **[Curso Visual Studio Code & Emmet - jonmircha](https://www.youtube.com/watch?v=KpgVF0mXOUs&t=9210s)**\r
\r
## Recursos\r
\r
-   Descubre una página que te brinda iconos e imágenes en formato **SVG** de forma gratuita: **[SVG Repo - Free SVG Vectors and Icons](https://www.svgrepo.com/)**\r
-   Explora una página que presenta una tabla de etiquetas **HTML**, inspirada en la tabla periódica de elementos químicos: **[Periodic Table of HTML elements](https://madebymike.github.io/html5-periodic-table/)**\r
-   Explora un **CDN** gratuito y de código abierto en **[cdnjs](https://cdnjs.com/)**. Si tienes dudas sobre qué es un **CDN**, este video lo explica de manera detallada: **[Qué es una CDN y para qué sirve una Red de distribución de contenidos](https://www.youtube.com/watch?v=_RSP3wagz7c)**.\r
-   Si alguna vez tienes dudas acerca de la compatibilidad de una funcionalidad de **HTML** o **CSS** en distintos navegadores, puedes verificarlo en el sitio **[Can I use](https://caniuse.com/)**.\r
-   Aquí tienes la hoja de referencia completa sobre **Emmet**: **[Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)**.\r
-   Sumérgete en estas páginas que ofrecen consejos sobre las mejores prácticas de **HTML** y **CSS**:\r
    -   **[Code Guide by @mdo](https://codeguide.co)**\r
    -   **[30 HTML Best Practices for Beginners](https://webdesign.tutsplus.com/30-html-best-practices-for-beginners--net-4957t)**\r
\r
## Consejos, Trucos y Buenas Prácticas\r
\r
-   No te limites a validar solo con el atributo \`required\`; asegúrate de contar también con validaciones del lado del servidor para una mayor seguridad.\r
\r
-   Coloca las etiquetas de \`<link>\` dentro de \`<head>\`, preferiblemente al final, y las etiquetas de \`<script>\` dentro del \`<body>\`, también al final.\r
\r
    \`\`\`html\r
    <!DOCTYPE html>\r
    <html lang="en">\r
        <head>\r
            <meta charset="UTF-8" />\r
            <meta\r
                name="viewport"\r
                content="width=device-width, initial-scale=1.0"\r
            />\r
            <title>Document</title>\r
            <!-- Estilos CSS -->\r
            <link rel="stylesheet" href="styles.css" />\r
        </head>\r
        <body>\r
            <!-- Codigo JavaScript -->\r
            <script src="index.js"><\/script>\r
        </body>\r
    </html>\r
    \`\`\`\r
\r
-   Si utilizas caracteres especiales básicos (**<, >, &, "**) directamente en el código **HTML**, funcionará correctamente. Sin embargo, al operar con código **JavaScript** o **PHP**, o si no se están mostrando correctamente en la web, necesitarás utilizar terminaciones específicas para insertar estos símbolos. Aquí están las terminaciones correspondientes:\r
\r
    | Terminaciones | Símbolos |\r
    | ------------- | -------- |\r
    | \`&lt;\`        | <        |\r
    | \`&gt;\`        | >        |\r
    | \`&amp;\`       | &        |\r
    | \`&quot;\`      | "        |\r
\r
-   Restringe el empleo de la etiqueta \`<iframe>\` a un máximo de 2 por página para evitar posibles impactos adversos en el rendimiento.\r
\r
-   Para agilizar las etiquetas \`<iframe>\` procedentes de YouTube, puedes aprovechar el sitio web **[Fast Youtube Embed Generator](https://tube.rvere.com)**. Este sitio carga las dependencias requeridas para reproducir el video únicamente cuando presionas el botón de reproducción, en lugar de cargarlas al abrir la página. Obtendrás un código que deberás sustituir en lugar de tu \`<iframe>\` actual.\r
\r
-   Recuerda que en un documento **HTML** solo debe existir un elemento \`<h1>\`.\r
\r
-   Evita incluir estilos o código **JavaScript** directamente en tu contenido **HTML**. En su lugar, es preferible escribirlos en archivos separados destinados para tal fin.\r
\r
-   Asegúrate de proporcionar un valor al atributo \`alt\` en tus imágenes. Esto mejora la accesibilidad de la página y su posición en los resultados de búsqueda.\r
\r
-   Incluye una _url_ canónica en la etiqueta \`<head>\` de tu página web para mejorar su posicionamiento y permitir que **Google** indexe tu página de manera precisa.\r
\r
    \`\`\`html\r
    <link rel="canonical" href="https://example.com/preferred-url-here/" />\r
    \`\`\`\r
\r
-   Ten en cuenta que aunque la etiqueta \`<i>\` tradicionalmente se usaba para dar énfasis al texto, posteriormente también se adoptó para representar iconos. La etiqueta \`<em>\` es ahora ampliamente aceptada como la etiqueta para el énfasis.\r
\r
-   Para probar tus páginas web en tu móvil, asegúrate de que tu teléfono esté conectado a la misma red que tu computadora. Luego, en la terminal, escribe \`ipconfig\` y busca la **Dirección IPv4**. Copia esta dirección IP y pégala en la barra de direcciones de tu navegador, junto al puerto que el servidor en vivo (Live Server) haya asignado a tu servidor. Por ejemplo: \`192.168.0.230:5500\`. Si esto no funciona, te recomiendo seguir las instrucciones detalladas en este video: **[Visualizar proyecto (página web simple HTML, CSS, JS) en tu celular con Live Server](https://www.youtube.com/watch?v=KJIYBbhUOic)**.\r
\r
-   El funcionamiento del favicon esta limitado en dispositivos móviles. Si deseas que funcione en móviles, utiliza \`<link rel="apple-touch-icon" href="img/favicon.png">\`.\r
\r
-   En general, es preferible emplear imágenes en formato **SVG** o **WEBP** en tu sitio web en lugar de **PNG** o **JPG**. Las razones son amplias, por lo que te dejo un artículo que profundiza en este tema: **[¿Qué imágenes debes usar en tu web? ¿JPG, PNG, SVG o WEBP? | EDteam](https://ed.team/blog/que-imagenes-debes-usar-en-tu-web-jpg-png-svg-o-webp)**.\r
\r
-   Evita abusar de la etiqueta \`<div>\` y en su lugar, utilize etiquetas semánticas como \`<main>\`, \`<section>\`, \`<article>\`, entre otras. Esto contribuirá a mantener un código más limpio y estructurado.\r
\r
    \`\`\`html\r
    <!-- MAL -->\r
    <div>\r
        <div>\r
            <div>\r
                <p>Lorem ipsum dolor sit amet.</p>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- BIEN -->\r
    <article>\r
        <section>\r
            <div>\r
                <p>Lorem ipsum dolor sit amet.</p>\r
            </div>\r
        </section>\r
    </article>\r
    \`\`\`\r
\r
-   Siempre añade el atributo de idioma \`<lang>\` a la etiqueta \`<html>\`. Esto ayuda a las herramientas de síntesis de voz a determinar las pronunciaciones adecuadas y a las herramientas de traducción a aplicar las reglas correctas.\r
\r
-   Para un mejor posicionamiento en la página web, es recomendable que la etiqueta \`<title>\` tenga entre 55 y 65 caracteres, mientras que la etiqueta \`<meta name="description">\` no debe exceder los 165 caracteres.\r
\r
-   Para una legibilidad óptima del código, los atributos de los elementos **HTML** deben seguir este orden específico:\r
\r
    1. class\r
    2. id, name\r
    3. data-\r
    4. src, for, type, href, value\r
    5. title, alt\r
    6. role, aria-\r
    7. tabindex\r
    8. style\r
\r
-   Utiliza el atributo \`tabindex="0"\` para crear elementos interactivos que se puedan navegar con la tecla Tab, sin alterar el orden de tabulación actual.\r
\r
-   Un atributo booleano es aquel que no requiere un valor declarado. Mientras **XHTML** exigía declarar un valor, **HTML5** no lo necesita.\r
\r
## Ejercicios y Proyectos\r
\r
Generalmente, se realizan ejercicios que combinan **HTML** con **CSS**. Sin embargo, aquí ya puedes comenzar con este ejercicio más simple: **[Learn HTML by Building a Cat Photo App - FreeCodeCamp](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app)**.\r
\r
## Conclusión\r
\r
Y eso es todo en relación a **HTML**. Aún quedan otros dos fundamentos esenciales para la web: **CSS** y **JavaScript**. Aprenderás cómo dominarlos en sus secciones respectivas.\r
`;export{e as default};
