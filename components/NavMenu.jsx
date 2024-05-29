import { Link } from "react-router-dom";

import "./NavMenu.scss";

export default function NavMenu({
    language,
    routes,
    parseRoute,
    darkTheme,
    setCurrentPage,
}) {
    const handleRoute = (route) => {
        setCurrentPage(route);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <button className="hamburger-btn menu-link" type="button">
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
            </button>

            <nav>
                {routes.map((file, index) => (
                    <Link
                        onClick={() => {
                            handleRoute(parseRoute(file.fileName, index));
                        }}
                        className="nav-link nav-menu-link"
                        key={index}
                        to={`${language}/${parseRoute(file.fileName, index)}`}
                    >
                        {file[language].title}
                    </Link>
                ))}
            </nav>
        </>
    );
}
