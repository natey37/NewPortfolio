import React, { useState } from "react";
import GameBoyColor from "./components/GameBoyColor/GameBoyColor";
import Skyline from "./components/SeattleSkylineBackground/Skyline";
import SimpleMenu from "./components/SimpleMenu/SimpleMenu";
import "./App.css";
import { PROJECTS } from "./components/GameBoyColor/gbcConstants";

function App() {
  const [useSimpleMenu, setUseSimpleMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div>
        <div className="floating-buttons-container">
          <button
            onClick={() => setUseSimpleMenu(!useSimpleMenu)}
            className="floating-button"
          >
            {useSimpleMenu
              ? "Switch to GameBoy View"
              : "Switch to Full-Screen Mode"}
          </button>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="floating-button"
          >
            {isDarkMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </button>
        </div>

        <Skyline darkMode={isDarkMode} />
        {useSimpleMenu ? <SimpleMenu projects={PROJECTS} /> : <GameBoyColor />}
      </div>
    </>
  );
}

export default App;
