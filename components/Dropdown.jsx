import { Link } from "react-router-dom";
import "./Dropdown.css";

export default function Dropdown({
    dropdownActive,
    handleDropdown,
    language,
    handleLanguage,
    currentPage,
}) {
    return (
        <button
            className="dropdown menu-link language-btn"
            onClick={(e) => handleDropdown(e)}
        >
            <h3
                className={`dropdown-title ${
                    dropdownActive ? "dropdown-active" : ""
                }`}
            >
                {language.toUpperCase()}
            </h3>
            <div
                className={`dropdown-menu ${
                    dropdownActive ? "dropdown-active" : ""
                }`}
            >
                <Link
                    className="language-link"
                    to={`/en${currentPage ? "/" + currentPage : ""}`}
                    onClick={() => handleLanguage("en")}
                >
                    EN
                </Link>
                <div className="separator"></div>
                <Link
                    className="language-link"
                    to={`/es${currentPage ? "/" + currentPage : ""}`}
                    onClick={() => handleLanguage("es")}
                >
                    ES
                </Link>
            </div>
        </button>
    );
}
