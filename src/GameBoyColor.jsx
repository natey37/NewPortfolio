import React, { useState } from 'react';
import "./App.css"

function GameBoyColor() {

  const [powerOn, setPowerOn] = useState(false)

  return (
    <>
      <div className="gameboy-container">
          <div className="gameboy-screen-container">
            <div className="upper-line"></div>
            <div className="top-left-line"></div>
            <div className="top-right-line"></div>
            <div className="top-triangle"></div>
            <div className="top-text">COMM.</div>
            <div className={`gameboy-screen ${powerOn ? "on" : null}`}></div>

            <div className="gameboy-text">GAME BOY</div>
            <span className="c-text">C</span>
            <span className="o-text">O</span>
            <span className="l-text">L</span>
            <span className="o-two-text">O</span>
            <span className="r-text">R</span>

            <div className="power-icon-container">
              <div className="power-icon-flex-container">
                <div className="power-icon-flex-row">
                  <span className={`power-icon-circle ${powerOn ? "red" : null}`}></span>
                  <span className="moon"></span>
                  <span className="moon2"></span>
                  <span className="moon3"></span>
                </div>
                <span className="power-text">POWER</span>
              </div>
            </div>

            <div onClick={() => setPowerOn(prev => !prev)} className={`power-switch ${powerOn ? "up" : null}`}>
              <div className="outer-power-switch"></div>
            </div>

            <div className="curve"></div>
          </div>
          <div className="lower-gameboy-container">
            <div className="lower-gameboy-container-lines"></div>
            <div className="nintendo-text-container">
              <div className="nintendo-inner-text-container"></div>
              <div className="nintendo-text">Nintendo</div>
              <div className="gamepad-container">
                <div className="gamepad">
                  <span className="gamepad-shadow-cover-upper"></span>
                  <span className="gamepad-shadow-cover-lower"></span>
                  <span className="gamepad-arrow-up"></span>
                  <span className="gamepad-arrow-right"></span>
                  <span className="gamepad-arrow-down"></span>
                  <span className="gamepad-arrow-left"></span>
                  <span className="gamepad-circle"></span>
                </div>
              </div>
              <div className="b-button">
                <div className="b-button-container">
                  <span className="b-button-text">B</span>
                </div>
              </div>
              <div className="a-button">
                <div className="a-button-container">
                  <span className="a-button-text">A</span>
                </div>
              </div>
              <div className="select-start-container">
                <div className="select"></div>
                <div className="start"></div>
              </div>
              <div className="select-start-text-container">
                <div className="select-text">SELECT</div>
                <div className="start-text">START</div>
              </div>
              <div className="speaker-container">
                <div className="speaker-inner-container">
                  <div className="speaker-hole-top-row">
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                  </div>
                  <div className="speaker-hole-row">
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                  </div>
                  <div className="speaker-hole-row">
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                  </div>
                  <div className="speaker-hole-row">
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                  </div>
                  <div className="speaker-hole-row">
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                  </div>
                  <div className="speaker-hole-row">
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                  </div>
                  <div className="speaker-hole-row">
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                  </div>
                  <div className="speaker-hole-bottom-row">
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                    <span className="filled-in-circle"></span>
                    <span className="open-circle"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-curve"></div>
          </div>
        </div>
    </>
  );
}

export default GameBoyColor;
