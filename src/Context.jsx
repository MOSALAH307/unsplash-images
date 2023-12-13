import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// const getInitialDarkMode = () => {
//   const prefersDarkMode = window.matchMedia(
//     "(prefers-color-scheme:dark)"
//   ).matches;
//   const storedDarkMode = localStorage.getItem("darkTheme") === "true";
//   return prefersDarkMode || storedDarkMode;
// };

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState("cat");

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    // localStorage.setItem("dark-theme", newTheme);
    document.body.classList.toggle("dark-theme", newTheme);
  };

  // useEffect(() => {
  //   document.body.classList.toggle("dark-theme", isDarkTheme);
  // }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
