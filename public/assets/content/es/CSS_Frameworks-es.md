# Frameworks de CSS

## Introducción

Al igual que con los _frameworks_ y librerías de **JavaScript**, también existen _frameworks_ de **CSS**. Estos se basan principalmente en conjuntos de clases **CSS** que te permiten aplicar ciertos estilos de manera efectiva, como por ejemplo, una clase llamada `btn` que facilita la creación de botones atractivos.

Algunos _frameworks_ incluso proporcionan componentes completos, que incluyen código **HTML**, **CSS** y a veces **JavaScript**, para implementar funcionalidades específicas. Por ejemplo, un botón que abre una ventana modal. Este sería un ejemplo de un componente modal. Y otros _frameworks_ ofrecen clases utilitarias solo para aplicar estilos en concreto, como por ejemplo `flex` que aplicaría solo `display: flex;`.

En esta sección nos enfocaremos en dos _frameworks_ muy populares y ampliamente utilizados en la industria: **Bootstrap** y **Tailwind**. Sin embargo, existen una variedad de otros _frameworks_ que se especializan en funcionalidades más específicas y también son muy competentes en sus áreas. De preferencia me gusta más usar **Tailwind**, ya que es mucho más personalizable, liviano y fácil de implementar. Mi experiencia personal tuvo algunas dificultades implementando los estilos y modificando los originales con **Bootstrap**. Al igual que con los _frameworks_ y librerías de **JavaScript**, es importante utilizarlos con moderación en un proyecto para evitar problemas de rendimiento y compatibilidad.

## Tutorial

### Tailwind

-   **[🚀 CURSO PRÁCTICO DE TAILWINDCSS - Landing Page con TAILWIND.](https://www.youtube.com/watch?v=VcIQviqWDRs)**

-   **[Documentación oficial de Tailwind](https://tailwindcss.com/docs/installation)**

### Bootstrap

-   **[Curso Bootstrap - jonmircha](https://www.youtube.com/watch?v=ng8ur8KNrpU)**

-   **[Documentación oficial de Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)**

## Recursos

### Tailwind

-   Esta es la librería de componentes de **Tailwind**: **[Tailwind UI](https://tailwindui.com/)**

-   Esta es la guía de instalación de **Tailwind** para cada tecnología o herramienta disponible: **[Guía de Instalación con Frameworks](https://tailwindcss.com/docs/installation/framework-guides)**

### Bootstrap

-   Estos son los iconos que **Bootstrap** ofrece de manera gratuita y que se pueden usar ya sea en un proyecto con **Bootstrap** o sin él. No olvides que tienes que importarlos de manera aparte mediante **npm** o **CDN**: **[Bootstrap Icons](https://icons.getbootstrap.com)**

-   Puedes usar **Bootstrap** con **React** mediante **React Bootstrap** o **ReactStrap**. Te dejaré tutoriales y la documentación de ambos:

    -   **[🎨 Cómo usar Bootstrap en tu aplicación de React ⚛️ - FullStack Bootcamp JavaScript](https://www.youtube.com/watch?v=Y6giH81r1WI)**

    -   **[Documentación de React Bootstrap](https://react-bootstrap.netlify.app/)**

    -   **[Documentación de ReactStrap](https://reactstrap.github.io/)**

-   Aquí puedes ver una lista de todos los estilos que aplican las clases de **Bootstrap**: **[All Bootstrap CSS classes list](https://bootstrapshuffle.com/classes)**

## Consejos, Trucos y Buenas Prácticas

### Tailwind

-   Si deseas personalizar las clases que te da **Tailwind**, es muy sencillo. Solo tendrás que ir al archivo de `tailwind.config.js` y agregar tus clases personalizadas en el objeto `theme`. Aquí está la parte de la documentación oficial que explica cómo hacerlo: **[Agregando Estilos Personalizados](https://tailwindcss.com/docs/adding-custom-styles)**.

-   Puede ser un problema ordenar las clases de **Tailwind** para poder leerlas y distinguirlas mejor, aparte de que tienes que saber el orden recomendado, por eso la gente de **Tailwind** colaboró con **Prettier** y llegaron a una solución. Aquí está el enlace del tutorial oficial de cómo implementarla: **[Clasificación automática de clases con Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)**.

-   Puedes usar la regla `@apply` en tu **CSS** para aplicar ciertas clases de **Tailwind** y así hacer que el código sea menos verboso:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer components {
        .btn-primary {
            @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
        }
    }
    ```

### Bootstrap

-   Si estás utilizando **Bootstrap** a través de **CDN**, es importante tener en cuenta que si solo importas la hoja de estilos y no el archivo **JavaScript**, algunas funcionalidades de los componentes pueden no funcionar. Esto se debe a que ese archivo es una librería llamada **Popper**, la cual permite ejecutar algunas interacciones en los componentes.

-   El código de **Bootstrap** está escrito en **SASS**, por lo tanto, si sabes cómo utilizar **SASS**, te resultará mucho más fácil cambiar variables de colores, tamaños y más. **SASS** se tratará en la siguiente sección.

-   Si no tienes una buena base en **CSS**, no se recomienda utilizar un _framework_, ya que si surge cualquier problema, ya sea con un estilo en particular o con especificidad, no sabrás cómo resolverlo. Por lo tanto, antes de utilizar cualquier _framework_, asegúrate de tener un buen entendimiento de lo que se basa el _framework_.

-   Puedes ver todas las clases de **Bootstrap** si abres el enlace de la hoja de estilos del **CDN** y le quitas la terminación `.min`. Ahí podrás ver claramente la hoja de estilos principal de **Bootstrap**.

-   Casi todas las clases de **Bootstrap** siguen esta regla `propiedad-tamaño-valor`. Por ejemplo: `mt-md-3` o `justify-content-lg-center`.

## Ejercicios y Proyectos

### Tailwind

-   **[Aprende cómo crear un portafolio web con Tailwind CSS](https://www.youtube.com/watch?v=TC5s9p6T04c)**

-   **[TU PRIMER SITIO WEB CON TAILWIND CSS - CURSO COMPLETO](https://www.youtube.com/watch?v=VbYEtvXroqE)**

-   **[Proyecto de Tailwind CSS | Sitio web de portafolio usando Tailwind CSS](https://www.youtube.com/watch?v=cdDW0_KXlHQ)**

### Bootstrap

-   **[🔥 10 tutoriales en Bootstrap para practicar](https://www.youtube.com/watch?v=7sDWDVODy8c)**

-   **[Crea una Página WEB con BOOTSTRAP 5 desde 0 | Rápido](https://www.youtube.com/watch?v=A5MF1mwmgRI)**

-   **[Nintendo, Sección de Animal Crossing](https://www.youtube.com/watch?v=ZuOL_DoaG9k)**

## Conclusión

Con todo este conocimiento, estarías bien encaminado para convertirte en un desarrollador _Front-End_, solo te faltaría la experiencia. Pero ya sabes, ¡todo se aprende con la práctica! En la siguiente sección, hablaremos sobre los preprocesadores y postprocesadores de **CSS**.
