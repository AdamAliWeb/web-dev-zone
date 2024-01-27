import { Link } from "react-router-dom";

import "./OptionsMenu.scss";

export default function ({
    children,
    changeLanguage,
    darkTheme,
    handleColorThemes,
    currentPage,
}) {
    const handleLanguage = (lang) => {
        changeLanguage(lang);
        window.scrollTo(0, 0);
    };

    return (
        <article className="options-menu">
            {children}
            <Link
                className="menu-link language-link"
                to={`/en${currentPage ? "/" + currentPage : ""}`}
                onClick={() => handleLanguage("en")}
            >
                EN
            </Link>
            <Link
                className="menu-link language-link"
                to={`/es${currentPage ? "/" + currentPage : ""}`}
                onClick={() => handleLanguage("es")}
            >
                ES
            </Link>
            <button
                className="menu-link theme-link"
                onClick={handleColorThemes}
            >
                {darkTheme ? (
                    <img
                        className="theme-img"
                        src="../assets/img/dark-theme.svg"
                        alt="Dark Theme Logo"
                    />
                ) : (
                    <img
                        className="theme-img"
                        src="../assets/img/light-theme.svg"
                        alt="Light Theme Logo"
                    />
                )}
            </button>
        </article>
    );
}
