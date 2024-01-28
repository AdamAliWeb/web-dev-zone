import { useState } from "react";

export default function useRoutes() {
    const [currentPage, setCurrentPage] = useState("");

    const routes = {
        en: [
            {
                fileName: `Introduction-en`,
                route: "",
                title: "Introduction",
            },
            {
                fileName: `Initial_Setup-en`,
                route: "initial-setup",
                title: "Initial Setup",
            },
            {
                fileName: `Content_Compilation_and_Organization-en`,
                route: "content-compilation-and-organization",
                title: "Content Compilation and Organization",
            },
            {
                fileName: `Internet-en`,
                route: "internet",
                title: "Internet",
            },
            {
                fileName: `HTML-en`,
                route: "html",
                title: "HTML",
            },
            {
                fileName: `CSS-en`,
                route: "css",
                title: "CSS",
            },
            {
                fileName: `JavaScript-en`,
                route: "javascript",
                title: "JavaScript",
            },
            {
                fileName: `Git-en`,
                route: "git",
                title: "Git",
            },
            {
                fileName: `JavaScript_Compilation-en`,
                route: "javascript-compilation",
                title: "JavaScript Compilation",
            },
            {
                fileName: `JavaScript_Frameworks-en`,
                route: "javascript-frameworks",
                title: "JavaScript Frameworks",
            },
            {
                fileName: `CSS_Frameworks-en`,
                route: "css-frameworks",
                title: "CSS Frameworks",
            },
            {
                fileName: `CSS_Processing-en`,
                route: "css-processing",
                title: "CSS Processing",
            },
        ],
        es: [
            {
                fileName: `Introduction-es`,
                route: "",
                title: "Introducción",
            },
            {
                fileName: `Initial_Setup-es`,
                route: "initial-setup",
                title: "Configuración Inicial",
            },
            {
                fileName: `Content_Compilation_and_Organization-es`,
                route: "content-compilation-and-organization",
                title: "Organización y Recopilación de Contenido",
            },
            {
                fileName: `Internet-es`,
                route: "internet",
                title: "Internet",
            },
            {
                fileName: `HTML-es`,
                route: "html",
                title: "HTML",
            },
            {
                fileName: `CSS-es`,
                route: "css",
                title: "CSS",
            },
            {
                fileName: `JavaScript-es`,
                route: "javascript",
                title: "JavaScript",
            },
            {
                fileName: `Git-es`,
                route: "git",
                title: "Git",
            },
            {
                fileName: `JavaScript_Compilation-es`,
                route: "javascript-compilation",
                title: "Compilación de JavaScript",
            },
            {
                fileName: `JavaScript_Frameworks-es`,
                route: "javascript-frameworks",
                title: "Frameworks de JavaScript",
            },
            {
                fileName: `CSS_Frameworks-es`,
                route: "css-frameworks",
                title: "Frameworks de CSS",
            },
            {
                fileName: `CSS_Processing-es`,
                route: "css-processing",
                title: "Procesamiento de CSS",
            },
        ],
    };

    return { routes, currentPage, setCurrentPage };
}
