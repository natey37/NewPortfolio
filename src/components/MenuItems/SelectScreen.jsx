import "./MenuItems.css"

export default function SelectScreen({handleStartClick, selectIndex, activeMenuItem, animationsOn, darkMode}) {
  return(
    <div className="select-overlay">
      <div className="select-overlay-modal">
        <div className="select-row">
          {activeMenuItem ? 
            <>
              <div onClick={() => handleStartClick("Back")} className={`select-back ${selectIndex === 0 && "back-active" }`} >
                <div className="inner-select-back-triangle">
                  <div className="back-text">Return</div>
                </div>
              </div>
              <div onClick={() => handleStartClick("Home")} className={`select-home ${selectIndex === 1 && "home-active" }`}>
                <div className="inner-select-home-triangle">
                  <span className="home-text">Main Menu</span>
                </div>
              </div>
            </>
            : 
            <>
              <div onClick={() => handleStartClick("Animations")} className={`select-animation ${selectIndex === 0 && "animation-active"} ${animationsOn ? "animation-white" : "animation-black"}`} >
                  <div className="animations-text animations-text-top">Animations</div>
                  <div className={`animations-text animations-text-bottom ${animationsOn ? "text-white" : "text-black"}`}>{`${animationsOn ? "on" : "off"}`}</div>
              </div>
              <div onClick={() => handleStartClick("Dark")} className={`select-darkmode ${selectIndex === 1 && "animation-active"} ${darkMode ? "animation-black" : "animation-white"}`} >
                  <div className="darkmode-text darkmode-text-top">Dark Mode</div>
                  <div className={`darkmode-text darkmode-text-bottom ${darkMode ? "text-black" : "text-white"}`}>{`${darkMode? "off" : "on"}`}</div>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}