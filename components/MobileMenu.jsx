import { DropdownButton } from "react-bootstrap";
import NavMenu from "./NavMenu";
import OptionsMenu from "./OptionsMenu";

import "./MobileMenu.scss";

export default function MobileMenu({
    language,
    routes,
    parseRoute,
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
                title={""}
                drop={"up-centered"}
                variant="secondary"
            >
                <OptionsMenu
                    changeLanguage={changeLanguage}
                    darkTheme={darkTheme}
                    handleColorThemes={handleColorThemes}
                    currentPage={currentPage}
                />
            </DropdownButton>
            <NavMenu
                language={language}
                routes={routes}
                parseRoute={parseRoute}
                darkTheme={darkTheme}
                setCurrentPage={setCurrentPage}
            />
        </section>
    );
}
