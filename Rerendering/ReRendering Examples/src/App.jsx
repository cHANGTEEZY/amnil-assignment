import "./App.css";
import React, { createContext, useState } from "react";
import Grandparent from "../components/GrandParent";

// Create a theme context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  console.log("App rendered");

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <h1>React Rerender Examples</h1>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="theme-toggle"
        >
          Toggle Theme: {theme}
        </button>
        <Grandparent />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
