import React from 'react';
import "./GameBoyColor.css"
import MainMenu from '../MenuItems/MainMenu';
import About from '../MenuItems/About';
import Projects from '../MenuItems/Projects';
import SelectScreen from '../MenuItems/SelectScreen';
import { useGBCReducer } from './gbcReducer';
import Resume from '../MenuItems/Resume';
import Contact from '../MenuItems/Contact';
import OpeningAnimation from '../MenuItems/OpeningAnimation';
import { handleGamepadAlert, handleStartAlert, handleSelectAlert, handleButtonAlert } from './gbcHelpers';

function GameBoyColor() {

  const { state, handleButtonPress, handleGamepadPress, handleMenuIndexClick, handleSelectClick, handleStartClick, handlePowerOn, handleProjectClick, handleDownload} = useGBCReducer();

  function renderActiveMenuItem() {
    switch (state.activeMenuItem) {
      case "About":
        return <About aboutTitlesIndex={state.aboutTitlesIndex} />;
      case "Projects":
        return <Projects projects={state.projects} currentProject={state.currentProject} handleProjectClick={handleProjectClick} projectDetailsIndex={state.projectDetailsIndex} projectTitlesIndex={state.projectTitlesIndex}  />;
      case "Resume":
        return <Resume handleDownload={handleDownload} />;
      case "Contact":
        return <Contact contactIndex={state.contactIndex} copied={state.contactCopied}/>;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="gameboy-container gameboy-scale">
        <div className="gameboy-screen-container">

          <div className="upper-line"></div>
          <div className="top-left-line"></div>
          <div className="top-right-line"></div>
          <div className="top-triangle"></div>
          <div className="top-text">COMM.</div>

          <div className={`gameboy-screen ${state.powerOn && "on"}`}></div>
          {state.powerOn && !state.continueOn ? <OpeningAnimation/> : null}
          {state.continueOn && !state.activeMenuItem ?
            <MainMenu menuIndex={state.menuIndex} setMenuIndex={handleMenuIndexClick}/>
            :
            null
          }
          {state.activeMenuItem && renderActiveMenuItem()}
          {state.selectOn ? 
            <SelectScreen darkMode={state.darkMode} animationsOn={state.animationsOn} activeMenuItem={state.activeMenuItem} handleStartClick={handleStartClick} selectIndex={state.selectOptionsIndex}></SelectScreen>
            :
            null
          }
          
          <div className="gameboy-text">GAME BOY</div>
          <span className="c-text">C</span>
          <span className="o-text">O</span>
          <span className="l-text">L</span>
          <span className="o-two-text">O</span>
          <span className="r-text">R</span>

          <div className="power-icon-container">
            <div className="power-icon-flex-container">
              <div className="power-icon-flex-row">
                <span className={`power-icon-circle ${state.powerOn && "red"}`}></span>
                <span className="moon"></span>
                <span className="moon2"></span>
                <span className="moon3"></span>
              </div>
              <span className="power-text">POWER</span>
            </div>
          </div>

          <div onClick={() => handlePowerOn()} className={`power-switch ${state.powerOn && "up"} ${!state.powerOn && "power-switch-alert" }`}>
            <div className={`outer-power-switch ${!state.powerOn && "outer-power-switch-alert"}`}></div>
          </div>

          <div className="curve"></div>

        </div>

        <div className="lower-gameboy-container">
          <div className="lower-gameboy-container-lines"></div>
          <div className="nintendo-text-container">

            <div className="nintendo-text">Nintendo</div>

            <div className="gamepad-container">
              <div className="outer-gamepad-container">
                <div onClick={() => handleGamepadPress(false)} className={`box top-box ${handleGamepadAlert(state, 'top')}`}>
                  <div className="gamepad-arrow-up"></div>
                </div>
                <div className="inner-gamepad-container">
                    <div onClick={() => handleGamepadPress(false)} className={`box left-box ${handleGamepadAlert(state, 'left')}`}>
                      <div className="gamepad-arrow-left"></div>                   
                    </div>
                    <div className="box middle-box">
                      <div className="gamepad-circle"></div>
                    </div>
                    <div onClick={() => handleGamepadPress(true)} className={`box right-box ${handleGamepadAlert(state, 'right')}`}>
                      <div className="gamepad-arrow-right"></div>
                    </div>
                </div>
                <div onClick={() => handleGamepadPress(true)} className={`box bottom-box ${handleGamepadAlert(state, 'bottom')}`}>
                  <div className="gamepad-arrow-down"></div>
                </div>
              </div>
            </div>

            <div onClick={() => handleButtonPress(false)} className={`b-button ${handleButtonAlert(state, "b")}`}>
              <div className="b-button-container">
                <span className="b-button-text">B</span>
              </div>
            </div>

            <div onClick={() => handleButtonPress(true)} className={`a-button ${handleButtonAlert(state, "a")}`}>
              <div className="a-button-container">
                <span className="a-button-text">A</span>
              </div>
            </div>

            <div className="select-start-container">
              <div onClick={() => handleSelectClick() } className={`select ${handleSelectAlert(state)}`}></div>
              <div onClick={() => handleStartClick()} className={`start ${handleStartAlert(state)}`}></div>
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
