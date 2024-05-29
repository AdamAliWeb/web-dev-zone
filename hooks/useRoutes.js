import { useState } from "react";

const urlRegex = /#\/[a-z]{2}\/(.+)/;

export default function useRoutes() {
    const [currentPage, setCurrentPage] = useState(() =>
        location.hash.match(urlRegex) ? location.hash.match(urlRegex)[1] : ""
    );

    const parseRoute = (route, index) =>
        index === 0 ? "" : route.toLowerCase().replace(/_/g, "-");

    const routes = [
        {
            fileName: `Introduction`,
            en: {
                title: "Introduction",
                category: "Getting Started",
            },
            es: {
                title: "Introducción",
                category: "Empezando",
            },
        },
        {
            fileName: `English_Learning`,
            en: {
                title: "English Learning",
                category: "Getting Started",
            },
            es: {
                title: "Aprendizaje de Inglés",
                category: "Empezando",
            },
        },
        {
            fileName: `Content_Compilation_and_Organization`,
            en: {
                title: "Content Compilation & Organization",
                category: "Getting Started",
            },
            es: {
                title: "Organización y Recopilación de Contenido",
                category: "Empezando",
            },
        },
        {
            fileName: `Initial_Setup`,
            en: {
                title: "Initial Setup",
                category: "Getting Started",
            },
            es: {
                title: "Configuración Inicial",
                category: "Empezando",
            },
        },
        {
            fileName: `Internet`,
            en: {
                title: "Internet",
                category: "Getting Started",
            },
            es: {
                title: "Internet",
                category: "Empezando",
            },
        },
        {
            fileName: `HTML`,
            en: {
                title: "HTML",
                category: "Frontend Basics",
            },
            es: {
                title: "HTML",
                category: "Frontend Básico",
            },
        },
        {
            fileName: `CSS`,
            en: {
                title: "CSS",
                category: "Frontend Basics",
            },
            es: {
                title: "CSS",
                category: "Frontend Básico",
            },
        },
        {
            fileName: `JavaScript`,
            en: {
                title: "JavaScript",
                category: "Frontend Basics",
            },
            es: {
                title: "JavaScript",
                category: "Frontend Básico",
            },
        },
        {
            fileName: `Git`,
            en: {
                title: "Git",
                category: "Frontend Basics",
            },
            es: {
                title: "Git",
                category: "Frontend Básico",
            },
        },
        {
            fileName: `JavaScript_Compilation`,
            en: {
                title: "JavaScript Compilation",
                category: "Frontend Advanced",
            },
            es: {
                title: "Compilación de JavaScript",
                category: "Frontend Avanzado",
            },
        },
        {
            fileName: `JavaScript_Frameworks`,
            en: {
                title: "JavaScript Frameworks",
                category: "Frontend Advanced",
            },
            es: {
                title: "Frameworks de JavaScript",
                category: "Frontend Avanzado",
            },
        },
        {
            fileName: `TypeScript`,
            en: {
                title: "TypeScript",
                category: "Frontend Advanced",
            },
            es: {
                title: "TypeScript",
                category: "Frontend Avanzado",
            },
        },
        {
            fileName: `CSS_Frameworks`,
            en: {
                title: "CSS Frameworks",
                category: "Frontend Advanced",
            },
            es: {
                title: "Frameworks de CSS",
                category: "Frontend Avanzado",
            },
        },
        {
            fileName: `CSS_Processing`,
            en: {
                title: "CSS Processing",
                category: "Frontend Advanced",
            },
            es: {
                title: "Procesamiento de CSS",
                category: "Frontend Avanzado",
            },
        },
        {
            fileName: `Web_Procedure`,
            en: {
                title: "Web Procedure",
                category: "Additional Content",
            },
            es: {
                title: "Procedimiento Web",
                category: "Contenido adicional",
            },
        },
        {
            fileName: `SEO`,
            en: {
                title: "SEO",
                category: "Additional Content",
            },
            es: {
                title: "SEO",
                category: "Contenido adicional",
            },
        },
        {
            fileName: `Figma`,
            en: {
                title: "Figma",
                category: "Additional Content",
            },
            es: {
                title: "Figma",
                category: "Contenido adicional",
            },
        },
        {
            fileName: `Web_Design`,
            en: {
                title: "Web Design",
                category: "Additional Content",
            },
            es: {
                title: "Diseño Web",
                category: "Contenido adicional",
            },
        },
        {
            fileName: `Interview_Preparation`,
            titleEn: "Interview Preparation",
            titleEs: "Preparación para Entrevistas",
            en: {
                title: "Interview Preparation",
                category: "Additional Content",
            },
            es: {
                title: "Preparación para Entrevistas",
                category: "Contenido adicional",
            },
        },
        {
            fileName: `Extra`,
            en: {
                title: "Extra",
                category: "Additional Content",
            },
            es: {
                title: "Extra",
                category: "Contenido adicional",
            },
        },
    ];

    return { routes, currentPage, setCurrentPage, parseRoute };
}
