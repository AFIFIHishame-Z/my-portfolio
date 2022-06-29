import { useEffect, useState } from "react";
import { BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "~/hooks/useTheme";

export default function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={className}>
      <button
        onClick={() => toggleTheme()}
        className="p-3 mx-2 rounded-lg cursor-pointer text-xl bg-gradient-to-r from-primary-light to-sky-800 text-white"
      >
        {theme === "light" ? <BiSun /> : <FaMoon />}
      </button>
    </div>
  );
}
