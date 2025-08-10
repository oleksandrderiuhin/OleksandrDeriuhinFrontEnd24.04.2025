import React from "react";

export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle btn btn-sm"
            aria-pressed={theme === "dark"}
            title="Переключить тему"
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 10px",
            }}
        >
            <span style={{ fontSize: 16 }}>{theme === "dark" ? "🌙" : "☀️"}</span>
            <span style={{ fontSize: 13 }}>
        {theme === "dark" ? "Тёмная" : "Светлая"}
      </span>
        </button>
    );
}
