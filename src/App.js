import React from "react";
import GameBoyColor from "./components/GameBoyColor/GameBoyColor";
import Skyline from './components/SeattleSkylineBackground/Skyline'
import "./App.css";

function App() {
  return (
    <>
     {/* <GameBoyColor /> */}
      <div id="root">
        <GameBoyColor />
        <Skyline />
      </div>
    </>
  );
}

export default App;
