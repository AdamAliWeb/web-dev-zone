# Procesamiento de CSS

## Introducción

Cuando trabajas con **CSS**, a veces las acciones pueden volverse repetitivas o incluso difíciles de lograr. Es por eso que en muchas ocasiones manipulamos el código **CSS** directamente en **JavaScript**, en lugar de hacerlo en la hoja de estilos.

Sin embargo, hace tiempo surgieron tecnologías que implementan nuevas funcionalidades y optimizan la creación de estilos. Estas herramientas se conocen como preprocesadores y postprocesadores de **CSS**.

Un preprocesador te permite escribir código similar a **CSS**, pero con funcionalidades adicionales como funciones, variables, condiciones, etc. Esto lo hace más similar a un lenguaje de programación completo. Luego, este código se compila a código **CSS** puro, permitiéndote programar estilos de manera más rápida y eficiente.

Los postprocesadores no son tan complejos. Por lo general, toman el código **CSS** proporcionado y lo mejoran agregando prefijos o reduciendo su tamaño (eliminando espacios en blanco y saltos de línea no necesarios).

Estas herramientas no son obligatorias pero la decisión de usarlas o no depende completamente de ti. La situación es bastante similar a la de los _frameworks_ de **CSS**; no son obligatorios, pero sí pueden facilitar el desarrollo y la búsqueda de trabajo, aunque los preprocesadores son menos requeridos que los _frameworks_.

En cuanto a preprocesadores, cubriremos uno en particular, **Sass**. Existen otros como **Less** o **Stylus**, pero se usan mucho menos y, por lo tanto, son menos solicitados. Sin embargo, si prefieres utilizar otro, puedes hacerlo sin problemas, todos son igualmente válidos. En cuanto a postprocesadores, también abordaremos **PostCSS**, por la misma razón que los preprocesadores.

## Tutorial

### SASS

-   **[Curso completo de Sass desde cero - 2023](https://www.youtube.com/watch?v=Nj0BoY111Mk)**
-   **[Documentación de SASS](https://sass-lang.com/documentation/)**

### PostCSS

-   **[👌POSTCSS + AUTOPREFIXER - Optimiza al MÁXIMO tu CSS](https://www.youtube.com/watch?v=_ZecWI4_jyU)**
-   **[Documentación de PostCSS](https://postcss.org)**

## Recursos

-   Aquí tienes una guía de estilo de Airbnb para **CSS** y **SASS**: **[Airbnb SASS Styleguide](https://github.com/airbnb/css)**

-   Esta es la extensión que se usa para compilar código **SASS** en tiempo real para **Visual Studio Code**. Para empezar está bien, pero no te recomiendo utilizarla por norma general y es mucho mejor compilarla mediante **WebPack** u otra herramienta de compilación: **[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)**

## Consejos, Trucos y Buenas Prácticas

-   Normalmente puedes usar **SASS** para ejecutar funciones complejas con estilos o para poder modificar y programar con librerías hechas con **SASS**. Pero si no es el caso personalmente no le veo la utilidad a usar un preprocesador ya que podrías usar **CSS** puro y tener menos complicaciones, a menos de que sea el caso mencionado previamente. Así que antes de usar **SASS** u otro preprocesador te recomiendo que te plantees cuales son las funciones o características específicas para utilizar **SASS**.

-   Evita abusar del anidamiento en **SASS**, ya que puede conducir a problemas de especificidad y a un código más desorganizado.

-   Como la regla de `@import` está ya deprecada y en el futuro será eliminada deberías usar `@use`. Las razones de esto son:

    -   `@import` hace que todas las variables, mixins y funciones sean globales, eso complica saber el origen de definición de los propios recursos.

    -   Como todo es importado de manera global, las librerías deben de usar prefijos a todos sus miembros para evitar colisiones con los nombres.

    -   `@import` tarda más en compilar.

## Ejercicios y Proyectos

-   **[Estilizamos una Página Web Responsive con SASS | Tutorial SASS](https://www.youtube.com/watch?v=4lb_IC9nmA0)**

-   **[TU PRIMER SITIO WEB CON SASS - CURSO COMPLETO](https://www.youtube.com/watch?v=I39yxJUgOuA)**

-   **[Proyecto para Principiantes - Sitio Web Responsivo Animado - Html, Css y Sass - Speed Code](https://www.youtube.com/watch?v=obI7GEjN7pM)**

## Conclusión

Estas herramientas no son necesarias, pero pueden facilitar el desarrollo de los estilos de tu página web según el proyecto. Por lo tanto, la decisión de usarlas o no depende de ti. Y aquí terminaríamos con el apartado de tecnologías para la programación de código más efectivo. Todas estas herramientas realmente no son del todo necesarias, pero pueden agilizar la programación siempre y cuando sepas cómo y por qué las estás utilizando, y aparte de que son muy apreciadas en las ofertas laborales. Los siguientes apartados serán adicionales pero muy importantes para que puedas mejorar en la programación web y que tengas más oportunidades al buscar trabajo.
