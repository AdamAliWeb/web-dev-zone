import { Link } from "react-router-dom";
import "./Header.css";

import OptionsMenu from "./OptionsMenu";

export default function Header({
    darkTheme,
    language,
    routes,
    parseRoute,
    changeLanguage,
    handleColorThemes,
    currentPage,
    setCurrentPage,
}) {
    const handleRoute = (route) => {
        setCurrentPage(route);
        window.scrollTo(0, 0);
    };

    return (
        <header className="header">
            <div className="wdz-logo">
                <Link
                    to={`/${language}`}
                    onClick={() => {
                        handleRoute(parseRoute("Home"));
                    }}
                >
                    {darkTheme ? (
                        <img
                            src="./assets/img/wdz-light.svg"
                            alt="WebDevZone"
                        />
                    ) : (
                        <img src="./assets/img/wdz-dark.svg" alt="WebDevZone" />
                    )}
                </Link>
            </div>

            <OptionsMenu
                language={language}
                routes={routes}
                parseRoute={parseRoute}
                changeLanguage={changeLanguage}
                darkTheme={darkTheme}
                handleColorThemes={handleColorThemes}
                currentPage={currentPage}
                handleRoute={handleRoute}
            />
        </header>
    );
}
