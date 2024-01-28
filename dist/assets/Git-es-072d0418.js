const e=`# Git\r
\r
## Introducción\r
\r
A la hora de programar cualquier aplicación, es fundamental contar siempre con un respaldo confiable. Es posible que hayas observado en videojuegos o programas las cifras como _1.1_, _v1.3_ o _2.1.4_ que aparecen en algún rincón. Estas representan las versiones disponibles de la aplicación. Este control generalmente se realiza a través de tecnologías que permiten gestionar las versiones del código, y aquí es donde entra en juego **Git**. **Git** te otorga un control casi absoluto sobre tu código, posibilitando mantener un historial de versiones y regresar a cualquiera de ellas con facilidad. Además, facilita la colaboración en proyectos, identificar al responsable de un error en la aplicación y mucho más. En resumen, **Git** se convierte en una herramienta esencial en cualquier ámbito de programación.\r
\r
Además, surgieron plataformas que permiten visualizar y gestionar los archivos que has guardado, proporcionando una forma más cómoda de mantener un registro. Estas tres plataformas son **GitHub**, **GitLab** y **BitBucket**.\r
\r
Para esta guía, dejaremos de lado **BitBucket**, ya que es la menos popular y ofrece menos opciones. Sin embargo, esto no significa que sea malo, simplemente es menos utilizado. No obstante, si deseas, puedes explorarlo por tu cuenta. Tanto **GitHub** como **GitLab** son excelentes opciones, cada una con sus propias ventajas. Más adelante encontrarás un video que explica sus diferencias en detalle. Así que, sigue leyendo para obtener más información.\r
\r
## Tutorial\r
\r
Comenzaré por compartir contigo un video que explica las diferencias entre **GitHub** y **GitLab**. Si estás indeciso sobre cuál elegir o no tienes ninguna preferencia específica en este momento, te recomendaría optar por **GitHub**. Es un poco más popular y ampliamente utilizado en el ámbito casual, y su conjunto de herramientas más simple lo hace más fácil y rápido de aprender:\r
\r
-   **[GitHub vs GitLab | PlatziLive](https://www.youtube.com/watch?v=EscDe0jG6XM)**\r
\r
Y aquí tienes los respectivos cursos según la plataforma que hayas elegido:\r
\r
-   **[Curso Git & GitHub - jonmircha](https://www.youtube.com/watch?v=suzMNqDQiyU)**\r
-   **[Aprende Git y GitLab desde cero con este curso para principiantes, tutorial paso a paso 2023](https://www.youtube.com/watch?v=6NREQqA5wHE)**\r
\r
## Recursos\r
\r
-   Este artículo de la página de _Jonmircha_ te ofrece una breve pero completa introducción a **Git**. Es especialmente útil como recordatorio rápido: **[Introducción a Git por Jonmircha](https://jonmircha.com/git)**\r
\r
## Consejos, Trucos y Buenas Prácticas\r
\r
-   Si deseas cambiar la rama predeterminada a \`main\`, utiliza este comando: \`git config --global init.defaultBranch main\`. Aunque la elección entre usar \`main\` o \`master\` es subjetiva, es bien vista en entornos laborales.\r
\r
-   Para cambiar el usuario registrado en la computadora actual, ejecuta estos dos comandos:\r
\r
    \`\`\`bash\r
    git config --global user.name "NombreDeUsuarioGitHub"\r
    git config --global user.email CorreoDeGitHub@gmail.com\r
    \`\`\`\r
\r
    Si en el repositorio en el que te encuentras ahora necesitas cambiar de usuario para poder hacer push, no necesitas cambiarlo a nivel global. Simplemente en la terminal del directorio del repositorio, ingresa los mismos comandos pero sin la opción de \`--global\`. Esto hará que solo en ese directorio se utilice el usuario que has asignado en lugar de aplicarlo globalmente.\r
\r
-   Personalmente, la secuencia que suelo seguir desde la inicialización hasta la primera publicación de un repositorio es la siguiente:\r
\r
    \`\`\`bash\r
    touch README.md\r
    touch .gitignore\r
    git init\r
    git add .\r
    git tag -a "Versión de la aplicación" -m "Mensaje de la etiqueta"\r
    git commit -m "Mensaje del commit"\r
    git remote add origin https://github.com/usuario/repositorio.git\r
    git push --tags\r
    git push -u origin main\r
    \`\`\`\r
\r
-   Utiliza \`git tag\` para ver las versiones de tu aplicación.\r
\r
-   Si ya has hecho la primera publicación, la siguiente vez solo necesitas escribir \`git push\` a menos que desees hacerlo en otra rama.\r
\r
-   Para subir un repositorio privado, sigue estos pasos:\r
\r
    1. Ingresa a tu perfil de **GitHub**, ve a _Ajustes > Ajustes de desarrollador > Tokens de acceso personal > Tokens (classic)_.\r
    2. Genera un token, establece la fecha de caducidad y asegúrate de guardarlo en un lugar seguro, como un archivo de texto, ya que perderás acceso si no lo haces.\r
    3. Al hacer push al repositorio, agrega este enlace al remoto en lugar del convencional: \`git remote add origin https://Usuario:Token@github.com/usuario/repositorio.git\`. Con esto, deberías poder hacer push al repositorio sin problemas.\r
\r
-   Al principio, trabajar con **Git** puede parecer difícil, pero te acostumbrarás. La mejor práctica que puedes adoptar es subir cualquier proyecto o ejercicio que realices a **GitHub** o **GitLab**. Así estarás practicando constantemente el flujo de trabajo de una aplicación con **Git**.\r
\r
## Conclusión\r
\r
Y eso concluye nuestra exploración de **Git**. Teóricamente, ya podrías crear una página web completa sin entrar en la parte del _Backend_. Sin embargo, aún nos quedan por descubrir herramientas y tecnologías que agilizarán y facilitarán el proceso de desarrollo. Además, estas son altamente requeridas o casi obligatorias a la hora de buscar trabajo en el campo.\r
`;export{e as default};
