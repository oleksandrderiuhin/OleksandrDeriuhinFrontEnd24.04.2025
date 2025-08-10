import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header({ theme, toggleTheme }) {
    return (
        <header className="app-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px" }}>
            <nav>
                <Link to="/">Головна</Link>{" | "}
                <Link to="/contacts">Контакти</Link>{" | "}
                <Link to="/about">Про мене</Link>
            </nav>

            <div>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </header>
    );
}
