# SEO

## Introducción

**SEO** significa _Search Engine Optimization_ (_Optimización para motores de búsqueda_). Se trata del conjunto de estrategias y técnicas de optimización que se hacen en una página web para que aparezca orgánicamente en buscadores de Internet como **Google**, **Yahoo** o **YouTube**.

Con el tiempo se ha vuelto esencial para que una página aparezca primera en las búsquedas. Pero de esto se ha abusado mucho y han surgido muchas técnicas que sacrificaban en gran parte la calidad del contenido. Un ejemplo de esto sería cuando buscas una pregunta sobre un tema y te salen páginas donde rellenan mucho con explicaciones y comentarios, y hasta al final del blog te responden a la pregunta que estabas haciendo. Esto lo hacen para que te quedes el mayor tiempo posible y así generar más ingresos, pero en este caso están bajando la calidad de la página metiendo relleno en vez de contenido que realmente quieran expresar y compartir.

Por eso hay que tener cuidado porque si te centras demasiado en posicionar tu página web puedes llegar a sacrificar la calidad de esa misma página. Aun así, te enseñaré las buenas prácticas que son sencillas de seguir y harán que puedas posicionar tu página de manera efectiva.

## Tutorial

Estos son los métodos a seguir para tener un mejor posicionamiento:

-   Primeramente te dejo unos videos que se adentran más en el tema del **SEO**. Te explican qué es, cómo implementarlo y, en este caso, cómo usarlo con **React**. Ya que al ser una librería para **SPA** puede resultar más complicado posicionar:

    -   **[🥇 SEO para Principiantes en 2024 (ACTUALIZADO de 0 a 100 🚀)](https://www.youtube.com/watch?v=Em1pTcNgys4)**

    -   **[Curso de Google Search Console 🏅 para Principiantes | Desde Cero en 28 minutos](https://www.youtube.com/watch?v=CXjFdrjwfek)**

    -   **[GoogleBot 🤖, SEO y Estrategias de Renderizado con REACT ⚛️ con Eduardo Garolera](https://www.youtube.com/watch?v=GhblPnIk5Nk)**

    -   **[SEO con React y Deploy integrado con GitHub](https://www.youtube.com/watch?v=b-pwpHaYOTI)**

-   Usa la propiedad `background-image` si quieres insertar una imagen de fondo. El algoritmo no detecta bien si una etiqueta `<img/>` se usa para poner una imagen de fondo. Por eso es mejor práctica insertar esa imagen en la propiedad de **CSS**.

-   Si usas emojis, no los juntes con los textos. Ya que el algoritmo no detectará bien las palabras, por eso deja un espacio en blanco entre la palabra y el emoji.

-   Incluye una _URL_ canónica en la etiqueta `<head>` de tu página web para mejorar su posicionamiento y permitir que **Google** indexe tu página de manera precisa.

    ```html
    <link rel="canonical" href="https://example.com/preferred-url-here/" />
    ```

-   Si quieres saber si tu página ha sido indexada en **Google**, puedes usar el comando `site:nombredeldominio.com` en el buscador.

-   Evita abusar de la etiqueta `<div>` y en su lugar, utiliza etiquetas semánticas como `<main>`, `<section>`, `<article>`, entre otras. Esto contribuirá a mantener un código más limpio, estructurado, semántico y ayudará a los motores de búsqueda para posicionar tu página web mejor.

    ```html
    <!-- MAL -->
    <div>
        <div>
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>

    <!-- BIEN -->
    <article>
        <section>
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </section>
    </article>
    ```

-   Siempre añade el atributo de idioma `<lang>` a la etiqueta `<html>`. Esto ayuda a las herramientas de síntesis de voz a determinar las pronunciaciones adecuadas y a las herramientas de traducción a aplicar las reglas correctas.

-   Para un mejor posicionamiento en la página web, es recomendable que la etiqueta `<title>` tenga entre 55 y 65 caracteres, mientras que la etiqueta `<meta name="description">` no debe exceder los 165 caracteres.

Una herramienta muy poderosa es **[PageSpeed Insights](https://pagespeed.web.dev)**. Esta permite analizar el rendimiento, la accesibilidad y el **SEO** de una página web. Estos datos son aproximados, no deben tomarse literalmente pero pueden ser vistos como una guía y ayudar mucho a saber qué necesita tu página web en la mayoría de las ocasiones.

Si te interesa probar esos aspectos de tu página sin publicarla oficialmente todavía, puedes subir tu página a un subdominio o un _hosting_ para testear páginas web. Un ejemplo sería subirla a **[AwardSpace.com](https://www.awardspace.com/free-web-hosting-to-test-website/)** para poder comprobar que la aplicación funcione. No he probado ese _hosting_, pero es un ejemplo que te pongo para que entiendas el punto. Después, coge el enlace de tu sitio web y pégalo en **Page Speed Insights** y te devolverá un análisis de la página web.

## Conclusión

Con esta información podrás posicionar tus páginas web y aumentar la audiencia que trafica en ellas si sigues estas técnicas y ofreces un contenido de calidad. Ya casi estamos acabando pero faltan algunas secciones que te serán útiles para pulir tus habilidades y tener mejores oportunidades.
