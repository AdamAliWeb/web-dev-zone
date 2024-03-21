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
                fileName: `English_Learning-en`,
                route: "english-learning",
                title: "English Learning",
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
            {
                fileName: `Web_Procedure-en`,
                route: "web-procedure",
                title: "Web Procedure",
            },
            {
                fileName: `SEO-en`,
                route: "seo",
                title: "SEO",
            },
            {
                fileName: `Figma-en`,
                route: "figma",
                title: "Figma",
            },
            {
                fileName: `Extra-en`,
                route: "extra",
                title: "Extra",
            },
        ],
        es: [
            {
                fileName: `Introduction-es`,
                route: "",
                title: "Introducción",
            },
            {
                fileName: `English_Learning-es`,
                route: "english-learning",
                title: "Aprendizaje de Inglés",
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
            {
                fileName: `Web_Procedure-es`,
                route: "web-procedure",
                title: "Procedimiento Web",
            },
            {
                fileName: `SEO-es`,
                route: "seo",
                title: "SEO",
            },
            {
                fileName: `Figma-es`,
                route: "figma",
                title: "Figma",
            },
            {
                fileName: `Extra-es`,
                route: "extra",
                title: "Extra",
            },
        ],
    };

    return { routes, currentPage, setCurrentPage };
}
