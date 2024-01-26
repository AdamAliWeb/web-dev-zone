import { useState } from "react";
import { Link } from "react-router-dom";

import "./NavMenu.scss";

import Offcanvas from "react-bootstrap/Offcanvas";

export default function NavMenu({
    language,
    routes,
    darkTheme,
    setCurrentPage,
}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRoute = (route) => {
        setCurrentPage(route);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <button
                className="hamburger-btn menu-link"
                onClick={handleShow}
                type="button"
            >
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
            </button>

            <Offcanvas
                className={`nav-menu ${darkTheme ? "" : "nav-menu-dark"}`}
                show={show}
                onHide={handleClose}
            >
                <Offcanvas.Header className="nav-menu-header" closeButton>
                    <Offcanvas.Title className="nav-menu-title">
                        Menu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="nav-menu-body">
                    <nav>
                        {routes[language].map((file, index) => (
                            <Link
                                onClick={() => {
                                    handleClose();
                                    handleRoute(file.route);
                                }}
                                className="nav-link nav-menu-link"
                                key={index}
                                to={`${language}/${file.route}`}
                            >
                                {file.title}
                            </Link>
                        ))}
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
