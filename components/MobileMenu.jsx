import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import NavMenu from "./NavMenu";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";

export default function MobileMenu({
    language,
    routes,
    changeLanguage,
    darkTheme,
    handleColorThemes,
    currentPage,
    setCurrentPage,
}) {
    return (
        <section className="mobile-menu">
            <DropdownButton
                className="dropdown-btn"
                key={"up-centered"}
                id={`dropdown-button-drop-up-centered`}
                drop={"up-centered"}
                variant="secondary"
            >
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
            </DropdownButton>
            <NavMenu
                language={language}
                routes={routes}
                darkTheme={darkTheme}
                setCurrentPage={setCurrentPage}
            />
        </section>
    );
}
