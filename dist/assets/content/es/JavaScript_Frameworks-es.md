# Frameworks de JavaScript

## Introducción

Los _frameworks_ llevan existiendo ya décadas y son básicamente conjuntos de código cuya premisa es facilitar el desarrollo de funciones o proyectos específicos.

Un ejemplo sencillo sería utilizar una librería para permitir que los elementos en la pantalla se puedan arrastrar con el ratón mientras se mantiene pulsado, y que el elemento permanezca en el lugar donde el usuario suelta el clic. Esta función se conoce como "_drag and drop_". Si bien esta función se puede programar con **JavaScript** puro, usar una librería puede ahorrarte tiempo al no tener que crearla desde cero.

También existen librerías o _frameworks_ más extensos y generales que permiten la creación de proyectos mucho más complejos. Los _frameworks_ y librerías actuales te brindan la capacidad de optimizar el desarrollo de una aplicación web desde el principio hasta el final y están orientados a la construcción de **SPA** (_Single Page Application_), que son páginas web de una sola página y no requieren visitar otros archivos **HTML** ni recargar la página, ya que todo el contenido se encuentra en una sola página y es completamente reactivo.

Antes de la era de los _frameworks_ y librerías modernas de **JavaScript** para la construcción de **SPA**, como **React**, **Vue**, entre otros, existió otra generación de herramientas, siendo la más popular en ese momento **jQuery**. Esta librería permitía la interacción de **JavaScript** con elementos **HTML**, controlar estilos y garantizar la compatibilidad con varios navegadores, minimizando errores. En su época, **jQuery** se erigía como una herramienta de gran utilidad.

Hoy en día, en proyectos actuales, no hay razón para emplear **jQuery**, ya que las funcionalidades que proporcionaba están ahora cubiertas por **JavaScript** de manera nativa. Sin embargo, sigue habiendo una abundancia de proyectos que aún utilizan **jQuery**, principalmente por ser costoso y laborioso actualizar a otro _framework_ o librería, especialmente en proyectos de gran envergadura. Para desarrolladores que trabajan por afición o como freelancers, el aprendizaje de **jQuery** no es necesario ni beneficioso en la actualidad. No obstante, en muchas empresas, el conocimiento de **jQuery** es un requisito para ciertas posiciones, lo que podría ampliar tus oportunidades laborales. Dominar **jQuery** es relativamente simple si ya comprendes el **DOM** de **JavaScript**.

Cubriremos **jQuery** aquí, pero recuerda que es completamente opcional y que no es comparable a las demás librerías, sino más bien una librería externa que te podría ayudar a tener más oportunidades de encontrar trabajo.

Es importante tener en cuenta que el uso excesivo de _frameworks_ y librerías puede llevar a un rendimiento más lento en tu aplicación debido a la carga adicional que el navegador debe procesar. Además, si tienes varias librerías en tu proyecto, pueden surgir problemas de compatibilidad difíciles de resolver. En esta sección nos enfocaremos principalmente en un _framework_ llamado **React**, aunque también mencionaremos aspectos y guías de otros _frameworks_.

## Tutorial

La lista de _frameworks_ y librerías es extensa y sigue creciendo cada año. Mencionaremos tres principales _frameworks_: **React**, **Vue** y **Angular**. Nos enfocaremos principalmente en **React**, y también mencionaremos a **jQuery**. Aunque existen otros _frameworks_, son menos utilizados y ofrecen menos oportunidades laborales dependiendo del lugar. Sin embargo, si prefieres utilizar alguno de estos, eres libre de hacerlo, todos tienen sus ventajas y desventajas. Yo te recomiendo que si buscas trabajo mires que tecnologías son las que más se piden por tu zona e intentes aprender esas, si tu objetivo es programar para ti mismo puedes escoger la que más prefieras. Antes de hablar sobre los _frameworks_, te recomiendo ver un video que compara las diferencias entre ellos, lo cual te ayudará a entender cuál se adapta mejor a tus necesidades: **[Angular vs. React vs. Vue | ¿Cuál es mejor? ¿Cuál paga más?](https://www.youtube.com/watch?v=IWbl8SXsb7Q)**

### jQuery

**jQuery** es una librería antigua que ya no ofrece novedades, pero aún se utiliza bastante para mantener proyectos antiguos. Aquí tienes algunas guías por si quieres aprenderlo:

-   **[jQuery Tutorial Español - 💪 Curso de jQuery 2018 desde cero 💪](https://www.youtube.com/watch?v=DVN8NWppCN0)**

-   **[Documentación oficial de jQuery](https://api.jquery.com)**

### React

**React** es una de las librerías más populares de **JavaScript** para el desarrollo de aplicaciones móviles y web. Creada por Facebook, **React** contiene una colección de fragmentos de código **JavaScript** reutilizables utilizados para crear interfaces de usuario llamadas componentes.

Es importante señalar que **React** no es un _framework_ de **JavaScript**. Esto se debe a que solo es responsable de renderizar los componentes de la capa de vista de una aplicación. **React** es una alternativa a _frameworks_ como **Angular** y **Vue**, que permiten crear funciones complejas. Aquí tienes los recursos para aprenderlo:

-   **[Curso React.js](https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk)**

-   **[⚛️ Curso React Router 6 - jonmircha](https://www.youtube.com/watch?v=9w33u7hBWyk)**

-   **[Documentación oficial de React](https://react.dev/learn)**

No descarto la posibilidad de agregar contenido sobre otras librerías o _frameworks_ en el futuro, pero por ahora nos centraremos principalmente en **React**. Sin embargo, si prefieres utilizar otra opción, eres totalmente libre de explorar contenido en línea por tu cuenta y emplearlas, ya que todas son igualmente válidas.

## Recursos

-   Te proporciono algunos videos complementarios para verlos después del tutorial y de que hayas practicado algunos de los ejercicios proveídos más abajo sobre **React**:

    -   **[React y sus Meta-Frameworks](https://www.youtube.com/watch?v=JfXlcDL29wg)**

    -   **[¿Qué es y cómo funciona useEffect? Hooks de React](https://www.youtube.com/watch?v=TBxpAhpQqYk)**

    -   **[Principios SOLID en React.js (Buenas prácticas) con ejemplos prácticos](https://www.youtube.com/watch?v=jKdt-BnTTR0)**

    -   **[Cómo Consumir APIs en REACT como un PROFESIONAL](https://www.youtube.com/watch?v=6u1RHUoXIPI)**

    -   **[Aprende a pasar una Prueba Técnica de React. Entiende useMemo, useCallback y useRef. Curso de React](https://www.youtube.com/watch?v=GOEiMwDJ3lc)**

    -   **[Pruebas y Accesibilidad - React Testing Library](https://www.youtube.com/watch?v=ZE4galFU5HU)**

    -   **[¡Resuelvo Prueba Técnica de React para Juniors y Trainee!](https://www.youtube.com/watch?v=XYpadB4VadY)**

-   **Framer Motion** es una librería que te permite animar componentes en **React** de una manera mucho más fácil y rápida. También permite animar **SVG** en **React**. Aquí te dejo un tutorial si quieres utilizarlo: **[Curso de Framer Motion desde cero - 🍃 Animaciones para tu proyecto con React](https://www.youtube.com/watch?v=4HnLIAX0EoM)**. También te dejo la documentación oficial de **Framer Motion**: **[Documentación de Framer Motion](https://www.framer.com/motion/)**.

-   Esta es una librería para crear componentes flotantes (elementos que estén suspendidos en cierta parte de la pantalla) que sean responsivos: **[Floating UI](https://floating-ui.com/docs/getting-started)**.

-   En **[React SVGR](https://react-svgr.com/playground/)** podrás convertir código **SVG** en código **JSX** para poder utilizarlo como componente dinámico.

## Consejos, Trucos y Buenas Prácticas

-   Puedes utilizar el componente `HashRouter` siempre y cuando haya casos de _URLs_ en tu página que presenten errores al acceder a ellas desde otro lugar. Esto suele suceder con hosting compartidos. Sin embargo, lo normal es usar siempre `BrowserRouter`.

-   Toda la lógica que es implementada en los `useState` y `useEffect` intenta dividirla en _custom hooks_, así el código será más limpio y ordenado y podrás reutilizar los _hooks_ en proyectos futuros de manera más fácil y rápida.

-   Esto es una imagen de cómo deberían estar organizadas las carpetas de tus proyectos en **React**:

    ![Estructura de Proyectos con React](./assets/react-project-structure.jpg)

-   Si te has planteado usar **Create React App** para inicializar un proyecto con **React**, te sugiero encarecidamente que no lo hagas. Es una tecnología que está deprecada y tiene muchas desventajas, aquí tienes un video que lo explica a fondo: **[⚛️🚫🚨 ¿Deberíamos seguir usando Create React App? 🚨🚫⚛️ - jonmircha](https://www.youtube.com/watch?v=ju7iZi87s6g)**.

-   Si quieres que tu sitio web se visualice en el móvil con **React** tendrás que seguir los mismos pasos que mencioné en los consejos de **HTML**. Pero la diferencia es que tendrás que irte al `package.json` y agregarle la bandera de `--host` al comando de iniciar el servidor de desarrollo. Aquí está cómo se vería con **Vite**:

    ```json
    "scripts": {
        "dev": "vite --host",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
    },
    ```

## Ejercicios y Proyectos

-   Aquí tienes una playlist de **YouTube** de diversos ejercicios y elementos para practicar con **React**: **[🌔 Proyectos ReactJS](https://www.youtube.com/playlist?list=PL9c-AU5X8n1T4y1Y3VG-maQYyASZEg-4C)**

-   El canal de YouTube de **[JavaScript Mastery](https://www.youtube.com/@javascriptmastery)** te brinda videos para practicar proyectos cotidianos con las últimas tecnologías.

-   **[FreeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/)** ofrece un curso con ejercicios prácticos y un certificado ampliamente reconocido.

## Conclusión

Después de haber aprendido algún _framework_ o librería y haber practicado lo suficiente con él, serías capaz de no solo crear una página web con una estructura compleja y ordenada, sino que también tendrías el conocimiento necesario para empezar a buscar empleo. Aun así, habrá una sección para ayudarte en cuanto a este tema y qué hacer si no te estás todavía preparado. Aún nos falta hablar de algunos aspectos más orientados al diseño, como los _frameworks_ de **CSS**. Sin embargo, en comparación con los _frameworks_ y librerías de **JavaScript**, son mucho más sencillos.
