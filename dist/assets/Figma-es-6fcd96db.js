const e=`# Figma\r
\r
\`\`\`\r
Plan:\r
- Hay varias aplicaciones para el prototipado de interfaces como sketch, adobe xd y figma en este caso.\r
- Historial de versiones de un proyecto, en la prueba gratuita tienes 30 dias de historial.\r
- En Figma Community puedes ver los proyectos de los demas y publicar los tuyos propios.\r
- En Figma Mirror puedes visualizar tu proyecto en el telefono.\r
- Hacer una explicacion de todas las propiedas de Figma a la vista.\r
- Instalar el instalador de fuentes siempre.\r
- En la seccion Drafts de Figma hay tutoriales y pruebas basicas para poder empezar.\r
- Puedes diseñar el aspecto de los posts en redes sociales.\r
- Las coordenadas se basan de la distancia entre el margen izquierdo y el de arriba.\r
- alt + selección otra forma de copiar.\r
- shift + Rescalar rescala el elemento proporcionalmente.\r
- alt + shift Rescalar desde el centro.\r
- las imágenes son el relleno de un elemento, es como el fondo de un elemento en CSS.\r
- Al exportar un svg ajeno a figma, se convierte en un frame.\r
- Mencionar todos los recursos de jonmircha de figma.\r
- En textos auto-width adapta el tamaño de la caja de texto por la anchura, mientras que auto-height lo adapta por la altura.\r
- Usando la tipografia de fontawesome puedes escribir palabras que despues se convierten a iconos, sigue la cheatsheet gratuita para saber que palabras.\r
- Las coordenadas de Figma son  como un plano cartesiano solo que con el eje Y invertida, osea que incrementa el valor de Y cuanto mas abajo este.\r
- Las reglas y guias te permiten ajustar y orientar las dimensiones, para activarlas si no las tienes vete a vista y activa reglas (rulers) o con shift + r, y al llevar el cursor hacia un regla y tirar para afuera puedes sacar una guia, para eliminarla haz click derecho y dale a remover guia o llevala hacia la regla de vuelta. Algo curioso es que si metes zoom a un elemento con shift + 2, las reglas aplicaran a ese elemento, por ende el punto 0 sera en ese elemento.\r
- El alineamiento especial te permite alinear varios elementos seleccionados midiendo la distancia del primero al ultimo. Para alinear varios elementos a una direccion es necesario juntarlos en un elemento.\r
- Los constraints te permite modificar el posicionamiento y rescalado de ciertos elementos para que cuando sus contenedores sean modificados guarden una regla de relacion aspecto.\r
- A un frame le puedes asignar un grid para distribuir contenido mas facilmente.\r
- Puedes aplicar el auto layout a un frame o a una seleccion de elementos, lo que hara el autolayout es modificar las dimensiones del contenedor padre para ajustar el contenido.\r
- Si usas la opcion de escalar (k) puedes escalar un elemento con texto sin cambiar el tamaño de la fuente de ese texto, se adapta automaticamente.\r
- Los componentes sirven para tener varias instancias de un mismo elemento. Puedes crear variantes de un solo componente, las variantes se aplican en el inspector de propiedades. Si haces un cambio de alguna propiedad de la instancia, este cambio no afectara al componente original, mientras que si aplicas un cambio al compenente original, este cambio se vera reflejado en las demas instancias a menos de que esa propiedad de alguna instancia haya tenido cambios previamente, entonces a esa instancia no se aplicara el cambio del componente padre. Tienes opciones como ir al component padre desde alguna instancia, eliminar relacion con el componente padre, resetear todos los cambios aplicados a la instancia o insertar cambios de la instancia al componente original.\r
- Para usar la herramienta de máscara, la imagen de que va ir de fondo ha de estar por encima de el elemento al que queramos aplicar la mascara en el orden de los elementos. Luego selecciona ambas y aplícale la opción de enmascarar.\r
- La herramienta de unión permite unificar dos elementos de diferentes maneras. Flatten selection hará que la figura en cuestión se unifique inmutablemente y sea independiente.\r
- Al exportar un elemento a imagen, puedes seleccionar el formato, puedes ver una preview de la imagen y puedes seleccionar el escalado.\r
- La herramienta de slice (s) sirve para hacer una captura interna de alguna seccion de tu proyecto y exportarla.\r
- Los estilos locales te sirven para crear variables de colores, fuentes, etc.. para usarlos en el documento actual, para usar los estilos del team hay que pagar.\r
- Para que cualquier persona pueda visualizar to proyecto de figma tienes que ponerlo publico en compartir y puedes invitar a otro editor mas en la capa gratuita, para mas editores hay que pagar.\r
- En Figma hay plugins que puedes descargar para tener mas funciones, aunque esto puede afectar el rendimiento o a la funcionalidad vanilla.\r
- En file puedes revisar el historial de guardados de tu proyecto. Tambien resetear los cambios de tu proyecto a un punto en especifico y se aplicara como otro guardado. En la version gratuita son 30 dias de historial, todo lo anterior a eso no se puede manipular a menos de que pagues.\r
- Puedes ver previzualisaciones de tu proyecto, dandole al play arriba a la derecha, puedes cambiar el modo de visualizarlo, las interacciones y sus propiedades. Para agregarle interaccion a un elemento afuera de un frame, lo tienes que convertir en componente.\r
- Figjam es un editor similar al original de Figma pero su proposito es de organizar ideas y debatir en grupo.\r
- Para poder vizualiar o editar un proyecto de figma con mas de 3 paginas teniendo el plan gratuito tienes que exportar el archivo .fig y de ahi importalo a los drafts o a tus proyectos en figma, entonces te dejara vizualizar y editar todas las paginas.\r
- No puedes insertar nuevos elementos a instancias de componentes.\r
- Las secciones (shift + s) sirver para dividir frames en apartados diferentes\r
- (https://www.youtube.com/watch?v=fkM4qxWkatg)\r
- El modo dev te permite ver todas las caracteristicas y propiedades de cada elemento. Tambien puedes procesar las secciones en el modo de "listo para el desarrollo", que permite al desarrollador entender cuales partes estan listas y cuales no.\r
- (https://whydoweinterface.com)\r
- Ctrl + rescalar hara que el tamaño de la caja se reduzca sin modificar las medidas de los elementos de adentro\r
- Para remover todas las reglas de una orientacion haz click derecho en la guia de esa direccion y elige removar todas las reglas.\r
\r
Design:\r
- Usar propiedad de background en una imagen de fondo en vez de un elemento de imagen\r
- No juntar palabras con emojis en un texto, separarlos\r
\r
\r
Proyectos:\r
- Personal Website\r
- Hentai Master\r
- List Ranker\r
\r
\`\`\`\r
`;export{e as default};
