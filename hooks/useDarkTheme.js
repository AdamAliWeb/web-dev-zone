import { useState } from "react";

const initialDarkTheme = () => {
    if (!localStorage.getItem("wdz-dark")) {
        localStorage.setItem("wdz-dark", "light");
    }

    return localStorage.getItem("wdz-dark") === "dark" ? false : true;
};

export default function useDarkTheme() {
    const [darkTheme, setDarkTheme] = useState(initialDarkTheme());

    const handleColorThemes = () => {
        if (!darkTheme) {
            setDarkTheme(true);
            localStorage.setItem("wdz-dark", "light");
        } else {
            setDarkTheme(false);
            localStorage.setItem("wdz-dark", "dark");
        }
    };

    return { darkTheme, handleColorThemes };
}
