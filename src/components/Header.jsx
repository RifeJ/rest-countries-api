import React from "react";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="bg-base-300 px-10 py-5 flex justify-between items-center">
      <h1 className="text-base-content text-2xl">Where in the world?</h1>
      <button onClick={changeTheme} className="flex items-center gap-2">
        {theme === "dark" ? <Sun /> : <Moon />}
        {theme === "dark" ? (
          <p className="text-[20px] font-medium">Light Theme</p>
        ) : (
          <p className="text-[20px] font-medium">Dark Theme</p>
        )}
      </button>
    </header>
  );
}

export default Header;
