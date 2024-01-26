import { useEffect, useState } from "react";

const setInitialLanguage = () => {
    if (!localStorage.getItem("wdz-language")) {
        localStorage.setItem("wdz-language", "en");
    }

    return localStorage.getItem("wdz-language");
};

const availableLanguages = ["es", "en"];

export default function useLanguages() {
    const [language, setLanguage] = useState(setInitialLanguage());

    useEffect(() => {
        if (location.pathname.startsWith("/en")) {
            setLanguage("en");
        } else if (location.pathname.startsWith("/es")) {
            setLanguage("es");
        }
    }, [location]);

    const changeLanguage = (lang) => {
        localStorage.setItem("wdz-language", lang);
        setLanguage(lang);
    };

    return { availableLanguages, language, changeLanguage };
}
