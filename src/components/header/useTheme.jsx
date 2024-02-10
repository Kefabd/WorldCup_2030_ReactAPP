import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === "true");

    const toggleDarkMode = (isDark) => {
        setDarkMode(isDark);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};
