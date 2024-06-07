import { Link } from "react-router-dom";
import "./Dropdown.css";

export default function Dropdown({
    dropdownActive,
    handleDropdown,
    dropdownRef,
    language,
    handleLanguage,
    currentPage,
}) {
    return (
        <div ref={dropdownRef} className="dropdown menu-link language-btn">
            <button
                onClick={handleDropdown}
                className={`menu-link language-btn dropdown-title ${
                    dropdownActive ? "dropdown-active" : ""
                }`}
            >
                {language.toUpperCase()}
            </button>
            <div
                className={`dropdown-menu ${
                    dropdownActive ? "dropdown-active" : ""
                }`}
            >
                <Link
                    className="language-link"
                    to={`/en${currentPage ? "/" + currentPage : ""}`}
                    onClick={() => {
                        handleDropdown();
                        handleLanguage("en");
                    }}
                >
                    EN
                </Link>
                <div className="separator"></div>
                <Link
                    className="language-link"
                    to={`/es${currentPage ? "/" + currentPage : ""}`}
                    onClick={() => {
                        handleDropdown();
                        handleLanguage("es");
                    }}
                >
                    ES
                </Link>
            </div>
        </div>
    );
}
