import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import themeConfig from "../assets/theme/theme.json";

const ThemeBtn = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    const selectedTheme = themeConfig[theme];
    Object.keys(selectedTheme).forEach((key) => {
      root.style.setProperty(key, selectedTheme[key]);
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      let newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const isDark = theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className={`flex items-center cursor-pointer transition-transform duration-500 ${
        isDark ? "rotate-0" : "rotate-180"
      }`}
    >
      {isDark ? (
        <Moon className="h-6 w-6 text-primary rotate-0 transition-all" />
      ) : (
        <Sun className="h-6 w-6 text-primary rotate-0 transition-all" />
      )}
    </div>
  );
};

export default ThemeBtn;
