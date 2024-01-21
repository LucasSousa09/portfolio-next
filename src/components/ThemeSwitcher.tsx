'use client'

import { useTheme } from "next-themes";

export function ThemeSwitcher(){
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme} 
            className="h-full w-full rounded-full sm:border-2 lg:border-4 border-zinc-700 dark:border-white shadow-arr-light dark:shadow-arr-dark hover:bg-zinc-700 dark:hover:bg-white transition-colors ease-linear"
        />    
    )
}