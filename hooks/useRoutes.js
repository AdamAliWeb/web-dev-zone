import { useState } from "react";

const urlRegex = /#\/[a-z]{2}\/(.+)/;

export default function useRoutes() {
    const [currentPage, setCurrentPage] = useState(() =>
        location.hash.match(urlRegex) ? location.hash.match(urlRegex)[1] : ""
    );

    const parseRoute = (route, index) =>
        index === 0 ? "" : route.toLowerCase().replace(/_/g, "-");

    const routes = {
        en: [
            {
                fileName: `Introduction`,
                title: "Introduction",
            },
            {
                fileName: `English_Learning`,
                title: "English Learning",
            },
            {
                fileName: `Initial_Setup`,
                title: "Initial Setup",
            },
            {
                fileName: `Content_Compilation_and_Organization`,
                title: "Content Compilation and Organization",
            },
            {
                fileName: `Internet`,
                title: "Internet",
            },
            {
                fileName: `HTML`,
                title: "HTML",
            },
            {
                fileName: `CSS`,
                title: "CSS",
            },
            {
                fileName: `JavaScript`,
                title: "JavaScript",
            },
            {
                fileName: `Git`,
                title: "Git",
            },
            {
                fileName: `JavaScript_Compilation`,
                title: "JavaScript Compilation",
            },
            {
                fileName: `JavaScript_Frameworks`,
                title: "JavaScript Frameworks",
            },
            {
                fileName: `CSS_Frameworks`,
                title: "CSS Frameworks",
            },
            {
                fileName: `CSS_Processing`,
                title: "CSS Processing",
            },
            {
                fileName: `Web_Procedure`,
                title: "Web Procedure",
            },
            {
                fileName: `SEO`,
                title: "SEO",
            },
            {
                fileName: `Figma`,
                title: "Figma",
            },
            {
                fileName: `Extra`,
                title: "Extra",
            },
        ],
        es: [
            {
                fileName: `Introduction`,
                title: "Introducción",
            },
            {
                fileName: `English_Learning`,
                title: "Aprendizaje de Inglés",
            },
            {
                fileName: `Initial_Setup`,
                title: "Configuración Inicial",
            },
            {
                fileName: `Content_Compilation_and_Organization`,
                title: "Organización y Recopilación de Contenido",
            },
            {
                fileName: `Internet`,
                title: "Internet",
            },
            {
                fileName: `HTML`,
                title: "HTML",
            },
            {
                fileName: `CSS`,
                title: "CSS",
            },
            {
                fileName: `JavaScript`,
                title: "JavaScript",
            },
            {
                fileName: `Git`,
                title: "Git",
            },
            {
                fileName: `JavaScript_Compilation`,
                title: "Compilación de JavaScript",
            },
            {
                fileName: `JavaScript_Frameworks`,
                title: "Frameworks de JavaScript",
            },
            {
                fileName: `CSS_Frameworks`,
                title: "Frameworks de CSS",
            },
            {
                fileName: `CSS_Processing`,
                title: "Procesamiento de CSS",
            },
            {
                fileName: `Web_Procedure`,
                title: "Procedimiento Web",
            },
            {
                fileName: `SEO`,
                title: "SEO",
            },
            {
                fileName: `Figma`,
                title: "Figma",
            },
            {
                fileName: `Extra`,
                title: "Extra",
            },
        ],
    };

    return { routes, currentPage, setCurrentPage, parseRoute };
}
