# Figma

## Introducción

**Figma** es un software de diseño similar a **Photoshop** o **Framer**, alojado en la web, que permite diseñar cualquier _layout_ o cualquier cosa que desees. **Figma** está centrado en el diseño de interfaces, ya sea web u otra interfaz. A diferencia de otros, **Figma** tiene algunas opciones que permiten cierta interacción con tu diseño, las cuales te mostraré más adelante. Principalmente, **Figma** está enfocado para diseñadores de **UI/UX (_Interfaz de Usuario / Experiencia de Usuario_)**, pero también se usa en el ámbito _Front-End_, sobre todo si trabajas solo o si tu trabajo es más de diseño que de programación.

Yo he utilizado **Figma** y realmente facilita mucho la producción de una aplicación y asegura un diseño más elaborado y atractivo. Hay otras aplicaciones que puedes usar para este fin, como **Sketch**, **Adobe XD**, **Framer**, pero he decidido proporcionarte **Figma** por estas razones:

-   Es uno de los editores de diseño líderes en el desarrollo web.

-   Su plan gratuito es uno de los más completos y casi ilimitados.

-   Es bastante fácil e intuitivo de aprender.

-   Tiene un apartado de comunidad que permite usar diversas plantillas, recursos y _plugins_ de otros, o publicar tu propio contenido.

-   Cuenta con un historial de versiones en cada proyecto que te permite retroceder o visualizar una parte antigua de tu proyecto (_en el plan gratuito, el historial es hasta 30 días_).

-   Ofrece prototipado de tu aplicación, lo que significa que puedes reproducirla como si fuera PowerPoint y agregarle ciertas interacciones.

Estas son las funciones que considero positivas de **Figma**. Pero si te interesa ver lo que ofrecen otras opciones, te animo a que lo hagas, especialmente si te interesa más la parte del diseño web o de **UI/UX**.

## Tutorial

Este tutorial de **JonMircha** lo considero uno de los más completos y sencillos que hay en **YouTube** sobre **Figma**; además, realiza un prototipado de cómo sería trabajar en un proyecto de diseño.

-   **[Curso Figma](https://www.youtube.com/playlist?list=PLvq-jIkSeTUbpfewvbKLhHctdkgadAy-K)**

## Recursos

-   Te dejo un enlace donde podrás descargar herramientas de **Figma**: **[Figma Downloads](https://www.figma.com/downloads/)**. El **Font installers** es el instalador de fuentes, este es casi obligatorio, ya que sin él no podrás visualizar la mayoría de las fuentes de **Figma**. **Figma Mirror** es la aplicación que sirve para visualizar tus diseños en la app desde el móvil. Y la aplicación de escritorio es lo mismo, solo que la puedes usar como una aplicación de escritorio por si te es más cómodo.

-   En **Figma** existen _plugins_ que otras personas hacen para poder ejecutar funciones que normalmente no se podrían o que serían muy tediosas de hacer. Ten cuidado de no descargar muchos, ya que pueden ralentizar el rendimiento del editor. Aquí puedes ver los _plugins_ disponibles: **[Figma Plugins](https://www.figma.com/community/plugins)**.

-   Te dejo el blog de **JonMircha** sobre **Figma** para cuando necesites repasar, además de que ofrece algunos recursos extra: **[Figma](https://jonmircha.com/figma)**.

## Consejos, Trucos y Buenas Prácticas

-   Para poder tener más de 3 páginas en tu proyecto de **Figma** sin tener que cambiar al plan de pago, mueve el archivo al apartado de _drafts_, agrega las páginas que necesitas desde ahí, y luego vuelve a meterlo en tus proyectos.

-   Las coordenadas de **Figma** son como un plano cartesiano, solo que con el eje Y invertido, es decir, que cuanto mayor sea el valor de Y, más abajo estará.

-   En el apartado de _Frames_ puedes ver diferentes tamaños. Hay para: teléfonos, ordenadores, presentaciones, documentos, publicaciones de redes sociales y hasta para relojes. Es una opción muy útil si quieres diseñar la interfaz para cierto dispositivo o tamaño.

-   Hay varias formas de copiar en **Figma**:

    -   Ctrl + C más Ctrl + V de toda la vida.

    -   Alt + seleccionando el elemento que quieres copiar y podrás copiarlo directamente en el lugar que prefieras ponerlo.

    -   Ctrl + D permite copiarlo y pegarlo a la vez, y si está en un _auto layout_ se inserta de manera contigua.

-   En **Figma** hay varias formas de eliminar un objeto:

    -   Selección + Backspace: pulsando la tecla para eliminar el texto, eliminas el objeto seleccionado.

    -   Selección + Delete: pulsando la tecla de _Delete_, eliminas el objeto seleccionado. Esta tecla no está disponible para teclados de 60%.

    -   Selección + Ctrl + X: esta combinación te permite no solo eliminar el objeto, sino también tenerlo copiado y poder pegarlo donde sea, así que realmente esta sería la acción de cortar, pero también sirve para eliminar elementos.

-   En **Figma** hay varias formas de reescalar un elemento (_cuando digo reescalar, me refiero a modificar el tamaño de un objeto seleccionando el borde del mismo objeto_):

    -   Selección: simplemente reescala el contenedor de ese objeto de manera libre.

    -   Shift + Selección: reescala el contenedor de ese objeto de manera proporcional.

    -   Alt + Selección: reescala el contenedor de ese objeto partiendo del centro (puedes combinarlo con el Shift, así se hace de manera proporcional).

    -   K -> Selección: este es un método que lo puedes activar y desactivar y te permite no solo reescalar el contenedor padre, sino también sus hijos. Esto llega a ser muy útil cuando quieres que el texto también aumente de tamaño (_puedes combinarlo con el Alt, así lo reescala desde el centro_). No te olvides de desactivarlo yendo al método de seleccionar en vez de reescalar o pulsando V.

-   Las imágenes en **Figma** son como el fondo de un contenedor. Para que lo entiendas mejor, funciona del mismo modo que `background-image` de un elemento en **CSS**. Puedes hacer casi los mismos ajustes en la interfaz de **Figma** que lo harías con **CSS**.

-   Recuerda que en textos, la propiedad _auto-width_ hace que el texto adapte el tamaño de la caja de texto por la anchura, ocupando todo el espacio a lo ancho que sea necesario. Mientras que la propiedad _auto-height_ lo adapta por la altura, es decir, que cuanto menos anchura tenga, aumenta la altura para poder hacer caber el texto.

-   Las reglas y guías te muestran las dimensiones en el elemento enfocado. Si te alejas lo suficiente, te mostrarán las dimensiones del plano de **Figma**. Para activarlas, si no las tienes puestas en la esquina superior izquierda del todo, selecciona vista y activa reglas (_rulers_), o las puedes activar solo con Shift + R. Al llevar el cursor hacia una regla y tirar hacia afuera, puedes sacar una guía. Para eliminarla, haz clic derecho y selecciona "remover guía" o llévala hacia la regla de vuelta. Si haces zoom a un elemento con Shift + 2, las reglas aplicarán a ese elemento, por ende, el punto 0 será en ese elemento. Para remover todas las guías de una orientación, haz clic derecho en la regla de la dirección contraria y elige "remover todas las guías".

-   Las secciones sirven para agrupar _frames_ en un mismo contenedor. Para sacar una sección, usa Shift + S, selecciona el lugar y ajusta el tamaño de la sección en cuestión.

-   El alineamiento especial te permite alinear varios elementos seleccionados midiendo la distancia del primero al último. Puedes alinearlos en eje vertical, en horizontal o en ambos. Para alinear varios elementos en una dirección, es necesario seleccionarlos previamente.

-   Los _constraints_ te permiten modificar el posicionamiento y redimensionado de ciertos elementos para que cuando sus contenedores sean modificados, los elementos hijos se posicionen con respecto al valor de _constraint_ de ese elemento.

-   A un elemento puedes implementarle una retícula (_grid_) para poder orientarte entre las dimensiones de ese elemento. Para implementarla, activa la propiedad de _Layout Grid_. Puedes asignar una retícula (_grid_), columnas (_columns_) o filas (_rows_). Para hacerlas visibles o no, presiona Shift + G.

-   Puedes aplicar la propiedad de _auto layout_ a un frame o a una selección de elementos. Esto modificará las dimensiones del contenedor padre para ajustar el contenido de manera fluida. Para que tengas una idea, es como aplicarle `display: flex;` a ese elemento en concreto.

-   Los componentes sirven para tener varias instancias de un mismo elemento. Puedes crear variantes de un solo componente. Las variantes se aplican en el inspector de propiedades. Si haces un cambio de alguna propiedad de la instancia, este cambio no afectará al componente original. Mientras que si aplicas un cambio al componente original, este cambio se verá reflejado en las demás instancias, a menos que esa propiedad de alguna instancia haya tenido cambios previamente. Entonces, a esa instancia no se aplicará el cambio del componente padre. Tienes ciertas opciones como ir al componente padre desde alguna instancia, eliminar la relación con el componente padre, resetear todos los cambios aplicados a la instancia o insertar cambios de la instancia al componente original. Como recordatorio, no puedes insertar elementos a una instancia de un componente, lo que debes hacer es insertar el elemento en el componente principal y luego ocultarlo en la propia.

-   Al exportar un elemento, puedes seleccionar el formato entre _svg_, _png_, _jpg_, _pdf_. Puedes ver una previsualización de la imagen y seleccionar el escalado.

-   La herramienta de slice sirve para hacer una captura interna de alguna sección de tu proyecto y exportarla. Para usarla, pulsa la tecla s.

-   Para usar la herramienta de máscara, la imagen que va a ir de fondo debe estar por encima del elemento al que queremos aplicar la máscara en el orden de los elementos. Luego, selecciona ambas y aplica la opción de enmascarar.

-   La herramienta de unión permite unificar dos elementos de diferentes maneras. _Flatten selection_ hará que la figura en cuestión se unifique inmutablemente y sea independiente.

## Conclusión

Con esto, habrás aprendido a maquetar y diseñar tus sitios web de una manera mucho más profesional y habrás dominado una gran parte del diseño web. Sin embargo, quedan algunos aspectos que debes ver para poder dominar todo el proceso de programación web.
