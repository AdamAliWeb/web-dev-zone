import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import MarkdownContent from "../components/MarkdownContent";
import "./App.css";
import DesktopNavMenu from "../components/DesktopNavMenu";
import useRoutes from "../hooks/useRoutes";
import { useEffect } from "react";

function App() {
    // const [currentFile, setCurrentFile] = useState("JavaScript_Compilation-en");\
    const { language, setLanguage, routes } = useRoutes();

    const changeLanguage = (lang) => {
        localStorage.setItem("wdz-language", lang);
        setLanguage(lang);
    };

    const availableLanguages = ["es", "en"];

    return (
        <>
            <BrowserRouter>
                {/* {mobileLayout ? <MobileNavMenu /> : <DesktopNavMenu />} */}
                <main className="main-content">
                    <Link to="/en" onClick={() => changeLanguage("en")}>
                        en
                    </Link>
                    <br />
                    <Link to="/es" onClick={() => changeLanguage("es")}>
                        es
                    </Link>

                    <DesktopNavMenu language={language} routes={routes} />
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
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
