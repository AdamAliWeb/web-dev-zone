import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import "highlight.js/styles/atom-one-dark.css";

import useRoutes from "../hooks/useRoutes";
import useLanguages from "../hooks/useLanguages";
import useDarkTheme from "../hooks/useDarkTheme";
import useDesktopLayout from "../hooks/useDesktopLayout";

import DesktopMenu from "../components/DesktopMenu";
import MobileHeader from "../components/MobileHeader";
import MobileMenu from "../components/MobileMenu";
import MarkdownContent from "../components/MarkdownContent";
import ErrorPage from "../components/ErrorPage";

function App() {
    const { routes, currentPage, setCurrentPage } = useRoutes();
    const { availableLanguages, language, changeLanguage } = useLanguages();
    const { darkTheme, handleColorThemes } = useDarkTheme();
    const { desktopLayout } = useDesktopLayout();

    return (
        <div
            className={`main-container ${
                darkTheme ? "light-theme" : "dark-theme"
            }`}
        >
            <HashRouter>
                {desktopLayout ? (
                    <DesktopMenu
                        language={language}
                        routes={routes}
                        changeLanguage={changeLanguage}
                        darkTheme={darkTheme}
                        handleColorThemes={handleColorThemes}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                ) : (
                    <MobileHeader />
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
                                                    fileName={file.fileName}
                                                    language={lang}
                                                />
                                            }
                                        />
                                    ))}
                                </Route>
                            );
                        })}
                        <Route
                            path="*"
                            element={
                                <ErrorPage errorTitle="Error 404: Page not Found" />
                            }
                        />
                    </Routes>
                </main>
                {!desktopLayout && (
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
            </HashRouter>
        </div>
    );
}

export default App;
