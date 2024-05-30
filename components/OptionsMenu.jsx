import { Link } from "react-router-dom";

import "./OptionsMenu.css";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import ModalWindow from "./ModalWindow";
import NavMenu from "./NavMenu";
import useModal from "../hooks/useModal";

export default function ({
    language,
    routes,
    parseRoute,
    changeLanguage,
    darkTheme,
    handleColorThemes,
    currentPage,
    handleRoute,
}) {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [modalActive, openModal, closeModal] = useModal(false);

    useEffect(() => {
        if (modalActive) {
            document.querySelector("body").classList.add("modal-overflow-lock");
        } else {
            document
                .querySelector("body")
                .classList.remove("modal-overflow-lock");
        }
    }, [modalActive]);

    const handleLanguage = (lang) => {
        changeLanguage(lang);
        window.scrollTo(0, 0);
    };

    const handleDropdown = (e) => {
        dropdownActive ? setDropdownActive(false) : setDropdownActive(true);
    };

    return (
        <article className="options-menu">
            <Dropdown
                dropdownActive={dropdownActive}
                handleDropdown={handleDropdown}
                language={language}
                handleLanguage={handleLanguage}
                currentPage={currentPage}
            />

            <button
                className="menu-link theme-link"
                onClick={handleColorThemes}
            >
                {darkTheme ? (
                    <img
                        className="theme-img"
                        src="./assets/img/dark-theme.svg"
                        alt="Dark Theme Logo"
                    />
                ) : (
                    <img
                        className="theme-img"
                        src="./assets/img/light-theme.svg"
                        alt="Light Theme Logo"
                    />
                )}
            </button>
            <button
                onClick={() => openModal()}
                className="hamburger-btn menu-link"
                type="button"
            >
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
            </button>
            <ModalWindow modalState={modalActive} closeModal={closeModal}>
                <NavMenu
                    routes={routes}
                    closeModal={closeModal}
                    parseRoute={parseRoute}
                    language={language}
                    handleRoute={handleRoute}
                />
            </ModalWindow>
        </article>
    );
}
