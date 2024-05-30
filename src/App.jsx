import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import "highlight.js/styles/atom-one-dark.css";

import useRoutes from "../hooks/useRoutes";
import useLanguages from "../hooks/useLanguages";
import useDarkTheme from "../hooks/useDarkTheme";

import MarkdownContent from "../components/MarkdownContent";
import ErrorPage from "../components/ErrorPage";
import Header from "../components/Header";

function App() {
    const { routes, currentPage, setCurrentPage, parseRoute } = useRoutes();
    const { availableLanguages, language, changeLanguage } = useLanguages();
    const { darkTheme, handleColorThemes } = useDarkTheme();

    return (
        <div
            className={`main-container ${
                darkTheme ? "light-theme" : "dark-theme"
            }`}
        >
            <HashRouter>
                <Header
                    darkTheme={darkTheme}
                    language={language}
                    routes={routes}
                    parseRoute={parseRoute}
                    changeLanguage={changeLanguage}
                    handleColorThemes={handleColorThemes}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <main className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to={`/${language}`} />}
                        />
                        {availableLanguages.map((lang, index) => {
                            return (
                                <Route key={index} path={`/${lang}`}>
                                    {routes.map((file, index) => (
                                        <Route
                                            key={index}
                                            index={index < 1}
                                            path={parseRoute(
                                                file.fileName,
                                                index
                                            )}
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
            </HashRouter>
        </div>
    );
}

export default App;
