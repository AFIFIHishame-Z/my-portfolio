import type { NextPage } from "next";
import { useTheme } from "../hooks/useTheme";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div onClick={toggleTheme}>
      <h1 className="font-bold text-2xl text-primary-light dark:text-primary">
        afifi
      </h1>
    </div>
  );
};

export default Home;
