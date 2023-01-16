import "./MenuItems.css"

export default function MainMenu({menuIndex, setMenuIndex}) {
  return(
    <div className='landing-screen-container'>
      <h1 className='landing-title'>Main Menu</h1>
      <div className='landing-screen-row'>
        <p onClick={() => setMenuIndex(0)} className={`landing-text square ${menuIndex === 0 && "landing-text-active"}`}>About</p>
        <div onClick={() => setMenuIndex(1)} className="triangle-left">
          <div className={`inner-triangle ${menuIndex === 1 && "inner-triangle-left-active"}`}>
            <span className='landing-text triangle-text'>Projects</span>
          </div>
        </div>
        <p onClick={() => setMenuIndex(2)} className={`landing-text circle ${menuIndex === 2 && "landing-text-active"}`}>Resume</p>
        <div onClick={() =>  setMenuIndex(3)} className={`landing-text rectangle ${menuIndex === 3 && "landing-text-active"}`}></div>
        <p className='rect-text'>Contact</p>
      </div>
    </div>
  )
}