import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "highlight.js/styles/atom-one-dark.css";

import useRoutes from "../hooks/useRoutes";
import useLanguages from "../hooks/useLanguages";
import useDarkTheme from "../hooks/useDarkTheme";
import useDesktopLayout from "../hooks/useDesktopLayout";
import useMarkdownChecker from "../hooks/useMarkdownChecker";

import DesktopMenu from "../components/DesktopMenu";
import MobileHeader from "../components/MobileHeader";
import MobileMenu from "../components/MobileMenu";
import MarkdownContent from "../components/MarkdownContent";

function App() {
    const { routes, currentPage, setCurrentPage } = useRoutes();
    const { availableLanguages, language, changeLanguage } = useLanguages();
    const { darkTheme, handleColorThemes } = useDarkTheme();
    const { desktopLayout } = useDesktopLayout();
    const { handleLinkTarget, highlightCode } = useMarkdownChecker();

    return (
        <div className={`main-container ${darkTheme ? "" : "dark-theme"}`}>
            <BrowserRouter>
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
            </BrowserRouter>
        </div>
    );
}

export default App;
