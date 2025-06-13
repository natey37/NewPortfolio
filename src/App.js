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
      <div >
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <button
            onClick={() => setUseSimpleMenu(!useSimpleMenu)}
            style={{
              position: "fixed",
              top: "90%",
              left: "40%",
              transform: "translate(-50%, -50%)",
              zIndex: 1001,
              padding: "10px 16px",
              fontSize: "14px",
              backgroundColor: "#E7115F",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
              border: "1px solid #E7D509",
            }}
          >
            {useSimpleMenu
              ? "Switch to GameBoy View"
              : "Switch to Full-Screen Mode"}
          </button>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              position: "fixed",
              top: "90%",
              left: "60%",
              transform: "translate(-50%, -50%)",
              zIndex: 1001,
              padding: "10px 16px",
              fontSize: "14px",
              backgroundColor: "#E7115F",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
              border: "1px solid #E7D509",
            }}
          >
            {isDarkMode
              ? "Switch to Dark Mode"
              : "Switch to Light Mode"}
          </button>
        </div>

        <Skyline darkMode={isDarkMode} />
        {useSimpleMenu ? <SimpleMenu projects={PROJECTS} /> : <GameBoyColor />}
      </div>
    </>
  );
}

export default App;
