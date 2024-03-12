import { useState } from "react";
export const ThemeContext = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prefersDarkMode ? 'light' : 'dark');
        
    }

    return {theme, toggleTheme}

}
