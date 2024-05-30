import { NavLink } from "react-router-dom";

import "./NavMenu.css";

export default function NavMenu({
    language,
    routes,
    parseRoute,
    closeModal,
    handleRoute,
}) {
    let links = [];
    let category = "";

    return (
        <section className="nav">
            <article className="nav-header">
                <h2 className="nav-title">Menu</h2>
                <button className="close-modal" onClick={closeModal}></button>
            </article>
            <nav className="nav-menu">
                {routes.map((file, index) => {
                    if (file[language].category === false) return;
                    if (!category) category = file[language].category;

                    if (category !== file[language].category) {
                        const navSection = (
                            <div className="nav-section" key={index}>
                                <h4 className="nav-section-title">
                                    {category}
                                </h4>
                                <div className="nav-links">{...links}</div>
                            </div>
                        );

                        links = [
                            <NavLink
                                onClick={() => {
                                    handleRoute(
                                        parseRoute(file.fileName, index)
                                    );
                                    closeModal();
                                }}
                                className={`nav-link`}
                                to={`${language}/${parseRoute(
                                    file.fileName,
                                    index
                                )}`}
                            >
                                {file[language].title}
                            </NavLink>,
                        ];
                        category = file[language].category;

                        return navSection;
                    }

                    if (category === file[language].category) {
                        links.push(
                            <NavLink
                                onClick={() => {
                                    handleRoute(
                                        parseRoute(file.fileName, index)
                                    );
                                    closeModal();
                                }}
                                to={`${language}/${parseRoute(
                                    file.fileName,
                                    index
                                )}`}
                                className={`nav-link`}
                            >
                                {file[language].title}
                            </NavLink>
                        );
                    }

                    if (index === routes.length - 1) {
                        return (
                            <div className="nav-section" key={index}>
                                <h4 className="nav-section-title">
                                    {category}
                                </h4>
                                <div className="nav-links">{...links}</div>
                            </div>
                        );
                    }
                })}
            </nav>
        </section>
    );
}
