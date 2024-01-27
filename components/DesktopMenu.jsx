import NavMenu from "./NavMenu";
import WebDevZoneLogo from "./WebDevZoneLogo";
import OptionsMenu from "./OptionsMenu";

import "./DesktopMenu.scss";

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
            <OptionsMenu
                changeLanguage={changeLanguage}
                darkTheme={darkTheme}
                handleColorThemes={handleColorThemes}
                currentPage={currentPage}
            >
                <NavMenu
                    language={language}
                    routes={routes}
                    darkTheme={darkTheme}
                    setCurrentPage={setCurrentPage}
                />
            </OptionsMenu>
            <WebDevZoneLogo />
        </header>
    );
}
