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
            <OptionsMenu
                changeLanguage={changeLanguage}
                darkTheme={darkTheme}
                handleColorThemes={handleColorThemes}
                currentPage={currentPage}
            />

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
