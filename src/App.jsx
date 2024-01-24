import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import useRoutes from "../hooks/useRoutes";
import useDarkTheme from "../hooks/useDarkTheme";

import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";

import MarkdownContent from "../components/MarkdownContent";
import DesktopMenu from "../components/DesktopMenu";
import { useEffect, useState } from "react";
import MobileHeader from "../components/MobileHeader";
import MobileMenu from "../components/MobileMenu";

const initialPage = () => location.pathname.slice(4);

const MIN_WIDTH = 700;

function App() {
    const { availableLanguages, language, routes, changeLanguage } =
        useRoutes();
    const { darkTheme, handleColorThemes } = useDarkTheme();
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileLayout, setMobileLayout] = useState(false);

    const changeWidth = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        if (windowWidth < MIN_WIDTH) setMobileLayout(true);
        else setMobileLayout(false);

        window.addEventListener("resize", changeWidth);

        return () => window.removeEventListener("resize", changeWidth);
    }, [windowWidth]);

    const handleLinkTarget = () => {
        Array.from(document.querySelectorAll(".markdown-content a")).forEach(
            (link) => (link.target = "_blank")
        );
    };

    const highlightCode = () => {
        hljs.highlightAll();
        console.clear();
    };

    return (
        <div className={`main-container ${darkTheme ? "" : "dark-theme"}`}>
            <BrowserRouter>
                {mobileLayout ? (
                    <MobileHeader />
                ) : (
                    <DesktopMenu
                        language={language}
                        routes={routes}
                        changeLanguage={changeLanguage}
                        darkTheme={darkTheme}
                        handleColorThemes={handleColorThemes}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )}

                <main className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to={`/${language}`} />}
                        />
                        {availableLanguages.map((lang, index) => {
                            return (
                                <Route key={index} path={`/${lang}`}>
                                    {routes[lang].map((file, index) => (
                                        <Route
                                            key={index}
                                            index={index < 1}
                                            path={file.route}
                                            element={
                                                <MarkdownContent
                                                    handleLinkTarget={
                                                        handleLinkTarget
                                                    }
                                                    highlightCode={
                                                        highlightCode
                                                    }
                                                    fileName={file.fileName}
                                                    language={lang}
                                                />
                                            }
                                        />
                                    ))}
                                </Route>
                            );
                        })}
                    </Routes>
                </main>
                {mobileLayout && (
                    <MobileMenu
                        language={language}
                        routes={routes}
                        changeLanguage={changeLanguage}
                        darkTheme={darkTheme}
                        handleColorThemes={handleColorThemes}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
