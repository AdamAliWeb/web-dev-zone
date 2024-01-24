import { Link } from "react-router-dom";
import "./DesktopMenu.scss";
import NavMenu from "./NavMenu";
import WebDevZoneLogo from "./WebDevZoneLogo";

export default function DesktopMenu({
    language,
    routes,
    changeLanguage,
    darkTheme,
    handleColorThemes,
    currentPage,
    setCurrentPage,
}) {
    return (
        <header className="desktop-menu">
            <article className="menu-options">
                <NavMenu
                    language={language}
                    routes={routes}
                    darkTheme={darkTheme}
                    setCurrentPage={setCurrentPage}
                />
                <Link
                    className="menu-link language-link"
                    to={`/en${currentPage ? "/" + currentPage : ""}`}
                    onClick={() => changeLanguage("en")}
                >
                    EN
                </Link>
                <Link
                    className="menu-link language-link"
                    to={`/es${currentPage ? "/" + currentPage : ""}`}
                    onClick={() => changeLanguage("es")}
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
            <WebDevZoneLogo />
        </header>
    );
}
