import { Link } from "react-router-dom";

export default function DesktopNavMenu({ language, routes }) {
    return (
        <nav>
            {routes[language].map((file, index) => (
                <Link key={index} to={`${language}/${file.route}`}>
                    {file.title}
                </Link>
            ))}
        </nav>
    );
}
