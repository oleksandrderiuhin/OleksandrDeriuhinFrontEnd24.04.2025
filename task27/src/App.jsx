import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ErrorBoundary from "./components/ErrorBoundary";
import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    return (
        <div className={theme}>
            <Router>
                <Header theme={theme} toggleTheme={toggleTheme} />
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </ErrorBoundary>
            </Router>
        </div>
    );
}


