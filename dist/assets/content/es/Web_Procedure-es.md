# Procedimiento Web

## Introducción

Esta sección estará dedicada a proponerte ideas y métodos a la hora de crear una página web. Te contaré todo el proceso que sigo desde el inicio hasta el final para poder tener éxito en la creación de proyectos, ya sean pequeños o grandes.

Esta no será una guía estricta; la puedes seguir al pie de la letra, adaptarla o buscar tu forma de hacer las cosas. Yo solo te proporciono una metodología a seguir para que evites más errores y aprendas más rápido.

Yo normalmente, a la hora de inicializar un proyecto, sigo estas pautas:

-   Planificación

-   Contenido

-   Diseño

-   Código

-   Hosting

También te recomiendo dividir cada parte en secciones más pequeñas. Así podrás abordarlo de manera menos abrumadora y más fácil, y ponerle fechas límites para que te centres en acabarlo siempre un poco antes. Pero tampoco te presiones demasiado, ya que te puedes quemar y no es lo que estamos buscando. Recuerda que tendrás que sufrir un poco y sacrificar algunas cosas, pero tampoco llegar al extremo de no descansar y pasar el rato. Intenta buscar un balance en el que te sientas más cómodo y consigas tener una buena productividad.

## Planificación

Al iniciar un proyecto desde cero, tienes que definirle un propósito, el por qué estás haciendo este trabajo. Yo sigo la filosofía de creación de proyectos basándome en si me es útil o no. Pienso que es algo malo lanzar un proyecto del cual no voy a obtener beneficios o no me será útil. El proyecto de **WebDevZone** lo hice para recopilar herramientas y recursos que luego yo pudiese acceder de manera rápida, y aparte, si quisiese repasar cualquier contenido, tendría los cursos y el material resumido.

Otro proyecto que hice es **Youtube Info Gather**, consiste en que puedas comprobar detalles de una lista de reproducción de **YouTube**, como la duración entera y los videos que no están disponibles, con solo el enlace de la lista. Aparte, puedes guardar la información de las listas para, a futuro, si algún video se elimina o se pone en privado, por lo menos saber cuáles son, ya que **YouTube** no te notifica cuando un video no está disponible dentro de tu lista de reproducción.

Como puedes ver, estos proyectos los hice no solo para practicar mis habilidades de programación, sino también para que me pudieran facilitar ciertos aspectos de mi día a día. Puedes seguir esta filosofía para solucionar problemas o automatizar tareas que tú tengas o que alguien cercano tenga.

Así que antes de inicializar el proyecto, debes hacerte estas preguntas:

-   ¿Cuál es el objetivo principal?

-   ¿Lo utilizaré yo o alguien a quien conozco en algún momento?

-   ¿Qué tan reutilizable es, es decir, cuántas veces se va a utilizar?

Una vez resueltas estas preguntas, puedes pensar cómo vas a crear el proyecto y qué herramientas o tecnologías usar.

## Contenido

Cuando tengas la idea principal resuelta, puedes pensar en el contenido que este tendrá. No tendrá que ser el contenido completo de golpe, sino que puedes hacer una primera parte al comenzar, y cuando ya la mayoría esté programada, completar el resto. O en vez de hacerla ahora, puedes focalizarte en el diseño y en el código y luego ya el contenido. Todo dependerá de las necesidades y el objetivo del proyecto en concreto.

Si es un proyecto que tendrá mucho contenido, es decir, mucho texto o muchos apartados, te recomiendo hacer la mayor parte ahora y luego completarla cuando tengas el diseño o el código hecho. Así tendrás contenido con el cual trabajar cuando estés en la parte de diseño y programación. Si el proyecto es corto, es más de gustos en qué orden lo decidas hacer.

## Diseño

Esta parte puede parecer irrelevante, pero puede ser muy importante si tu proyecto tiene un gran enfoque en el diseño. Primero de todo, tienes que saber si tu proyecto tendrá un diseño complejo o no. Si tendrá muchas animaciones, si será muy interactivo, etc., ya que esto hará que el proyecto necesite que le dediques tiempo al diseño o no. Por ejemplo, mi página web personal, al requerir un estilo específico, muchas animaciones y dibujos, tuve que hacer el diseño en **Figma** para no tener problemas en el futuro. Te recomiendo hacer esto, ya que la primera vez que hice mi página web personal, tenía una idea en mente pero no había hecho el diseño, y pues el resultado final no fue malo, pero era muy simple para lo que realmente pudo ser.

Si tu proyecto es pequeño o no tendrá un diseño especial o complejo, puedes saltarte la parte del diseño y hacerla más tarde cuando tengas el código listo. Pero si te va a importar cómo se ve, te recomiendo que no te saltes esta parte. Como editor de diseño, te recomiendo **Figma**, ya que es uno de los más enfocados en programación web, pero esto ya será una elección tuya. Si quieres saber más de **Figma** y cómo usarlo, puedes ir a la sección correspondiente donde te enseño su ecosistema completo.

A la hora de programar, no tienes que seguir el diseño al 100%. Si no sabes o puedes hacer algo, o si cambias de opinión y piensas que cierta sección quedaría mejor de otra manera, pues puedes ir cambiándolo ya cuando apliques el diseño en la programación.

## Código

Aquí es cuando realmente entramos en el tema de la programación como tal. Lo primero será definir qué tecnologías y herramientas vas a usar. Si vas a usar las que siempre usas o vas a implementar una nueva. Te recomiendo que vayas intercalando entre usar las de siempre y agregar algunas nuevas, así para estar mejorando en las que ya sabes y expandir más tu experiencia con nuevas.

Después te pondrás a programar como tal. Si tu proyecto va a ser grande o no tienes claro la lógica que vas a implementar, te incito a que la vayas escribiendo en papel o apuntándola en alguna aplicación. Como qué funcionalidades tendrá tu aplicación o qué es lo que hará una función en específico. Así tendrás las cosas más claras a la hora de programar.

Normalmente, este suele ser mi proceso de programación:

-   Inicializo una carpeta con **Vite** si estoy programando con **React**. Si estoy programando con **JavaScript** _Vanilla_, simplemente creo la carpeta y los archivos.

-   Creo un repositorio en **GitHub** con el título de mi proyecto. En el editor de código, si mi carpeta está vacía, creo los archivos `README.md`, `.gitignore` y `LICENSE`. Si mi proyecto ya fue inicializado con **Vite**, estos archivos ya vendrán por defecto. Si necesitas hacer cambios a esos archivos, te recomiendo que los hagas ahora. Luego, inicializo el repositorio en **GitHub** con este código:

    ```bash
    git init
    git add .
    git tag -a "v0.1" -m "Creating the repository"
    git commit -m "Creating the repository"
    git remote add origin https://github.com/usuario/repositorio.git
    git push --tags
    git push -u origin main
    ```

-   Ya aquí entraría todo el proceso de programación, y es el que más duraría, ya que es cuando realmente se trabaja en el proyecto. Divide este proceso en secciones y por cada una terminada, ve guardando el estado y subiéndola al repositorio. Sin este paso, te costará más identificar errores grandes y mantener tu proyecto.

0 Cuando estés cerca de acabar el proyecto, es recomendable seguir estos pasos cuando ya veas que el funcionamiento de la aplicación esté terminado:

-   Asegúrate de que hayas terminado la sección en la que estabas. Confirma que no haya errores y procede a guardarla y subirla al repositorio.

-   Intenta optimizar el código. Las partes del código que más se repitan, intenta condensarlas en funciones; elimina el código que no se utiliza; hazlo lo más legible posible y coméntalo para poder mantenerlo en el futuro. Después de esto, procede a tener la versión que vas a subir ya lista. En **Vite**, sería tener la carpeta `dist` ya lista ejecutando `npm run build`.

-   Asegúrate de que el rendimiento, accesibilidad y **SEO** estén en niveles aceptables. Si no sabes cómo revisar estos apartados, en la sección de **SEO** de este sitio web te explicaré paso a paso cómo lograrlo.

-   Después de revisar que todo funcione correctamente, tendrás que subirlo al _hosting_ principal. Hay muchos servicios de _hosting_. Si tienes los recursos, puedes seleccionar un _hosting_ de pago y tener más ventajas que con uno gratuito. Pero dependiendo de tus necesidades, puedes escoger cualquiera. También puedes alojarlo en **GitHub Pages** de manera gratuita. Hay varias opciones y escoge la que te parezca más adecuada. Si piensas ir con _hosting_ de pago, te recomiendo **Hostinger**. No es muy caro y ofrece muchas funcionalidades.

## Conclusión

Puede parecerte excesivo y difícil seguir estos pasos, pero recuerda que no son obligatorios y los puedes adaptar a tu manera de trabajar. Yo solo he ofrecido la base. Con el paso del tiempo y cuanto más practiques, irás mejorando y teniendo una mejor estructura de trabajo, y la calidad de ella misma irá mejorando. De aquí, ya solo te falta practicar y serías alguien bastante competente. Si estás inseguro de cómo vas a buscar trabajo o ya lo has intentado y no tuviste éxito, en la sección de preparación para entrevistas te proporciono recursos y consejos para que puedas conseguir ese trabajo tan deseado de programador.
