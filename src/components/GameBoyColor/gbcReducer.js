import { useReducer, useEffect } from 'react';
import resume from '../../images/resume/resume.pdf'
import { handleScroll } from './gbcHelpers';
import { MENU_ITEMS, ABOUT_TITLES, PROJECT_TITLES, PROJECT_DETAIL_TITLES, CONTACT_TITLES, PROJECTS} from './gbcConstants';
import { TOGGLE_POWER, TOGGLE_CONTINUE, SET_MENU_INDEX, SET_ACTIVE_MENU_ITEM, SET_PROJECT_TITLES_INDEX, ABOUT_SCROLL, PROJECTS_SCROLL, PROJECT_DETAILS_SCROLL, CONTACT_SCROLL, TOGGLE_PROJECT_DETAILS, SELECT_PROJECT, COPY_CONTACT, TOGGLE_SELECT, TOGGLE_BACK, SET_SELECT_OPTIONS_INDEX, TOGGLE_ANIMATIONS, TOGGLE_DARK_MODE } from './actionTypes';

const initialState = {
  powerOn: false,
  activeMenuItem: undefined,
  menuIndex: 0,
  continueOn: false,
  containerRef: null,
  aboutTitlesIndex: 0, 
  projectTitlesIndex: 0,
  projects: PROJECTS,
  currentProject: null,
  projectDetails: false, 
  projectDetailsIndex: 0,
  contactIndex: 0, 
  contactCopied: false,
  selectOn: false,
  selectOptionsIndex: 0, 
  animationsOn: true,
  darkMode: false
};

function reducer(state, action) {

  switch (action.type) {
    case TOGGLE_POWER:
      return state.powerOn ? initialState : {...state, powerOn: action.powerOn}
    case TOGGLE_CONTINUE:
      return { ...state, continueOn: action.continueOn };
    case SET_MENU_INDEX:
      return { ...state, menuIndex: action.menuIndex };
    case SET_ACTIVE_MENU_ITEM:
      return { ...state, activeMenuItem: action.activeMenuItem };
    case SET_PROJECT_TITLES_INDEX:
      return {...state, projectTitlesIndex: action.projectTitlesIndex}
    case ABOUT_SCROLL:
      let { aboutForward } = action;
      const newAboutTitlesIndex = handleScroll(aboutForward ? 'forward' : 'backward', state.aboutTitlesIndex, ABOUT_TITLES);
      return { ...state, aboutTitlesIndex: newAboutTitlesIndex }
    case PROJECTS_SCROLL:
      let { projectsForward } = action;
      const newProjectTitlesIndex = handleScroll(projectsForward ? 'forward' : 'backward', state.projectTitlesIndex, PROJECT_TITLES);
      return { ...state, projectTitlesIndex: newProjectTitlesIndex }
    case PROJECT_DETAILS_SCROLL:
      let { project_detailsForward } = action;
      const newProjectDetailsIndex = handleScroll(project_detailsForward ? 'forward' : 'backward', state.projectDetailsIndex, PROJECT_DETAIL_TITLES);
      return { ...state, projectDetailsIndex: newProjectDetailsIndex }
    case CONTACT_SCROLL:
      let { contactForward } = action;
      const newContactIndex = handleScroll(contactForward ? 'forward' : 'backward', state.contactIndex, CONTACT_TITLES);
      return { ...state, contactIndex: newContactIndex }
    case TOGGLE_PROJECT_DETAILS:
      if(action.projectDetails){
        return {...state, projectDetails: action.projectDetails}
      } else {
        return {...state, projectDetails: action.projectDetails, projectDetailsIndex: 0}
      }
    case SELECT_PROJECT:
      return {...state, currentProject: action.project}
    case COPY_CONTACT:
      return {...state, contactCopied: true}
    case TOGGLE_SELECT:
      return {...state, selectOn: action.selectOn}
    case TOGGLE_BACK:
      return {...state, selectOn: false}
    case SET_SELECT_OPTIONS_INDEX:
      const currentIndex = state.selectOptionsIndex === 0 ? 1 : 0
      return {...state, selectOptionsIndex: currentIndex}
    case TOGGLE_ANIMATIONS:
      return {...state, animationsOn: !state.animationsOn}
    case TOGGLE_DARK_MODE:
      if(!state.darkMode) document.body.style.backgroundColor = "#06422c"
      else document.body.style.backgroundColor = "#11e799"
      return {...state, darkMode: !state.darkMode}
    default:
      throw new Error();
  }
}

export function useGBCReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //toggles gameboy on and off
  function handlePowerOn() {
    dispatch({ type: TOGGLE_POWER, powerOn: !state.powerOn})
  }

  //sets the active menu item if the user clicks on a menu item using the cursor
  function handleMenuIndexClick(index) {
    dispatch({ type: SET_MENU_INDEX, menuIndex: index})
    dispatch({ type: SET_ACTIVE_MENU_ITEM, activeMenuItem: MENU_ITEMS[index]})
  }

  //gamepad and A/B button events -> handles scrolling 
  const handleButtonPress = (buttonType) => {
    switch(state.activeMenuItem){
      case "About":
        handleAboutScroll(buttonType)
        break;
      case "Projects":
        handleProjectsScroll(buttonType)
        break;
      case "Contact":
        handleContactScroll(buttonType)
        break; 
      default:
        break;
    }
  }

  const handleGamepadPress = (direction) => {
    if (state.selectOn) {
      handleSelectOptionsIndex();
      return;
    }

    switch(state.activeMenuItem) {
      case undefined:
        handleSetMenuIndex(direction);
        break;
      case 'About':
        handleAboutScroll(direction);
        break;
      case 'Projects':
        handleProjectsScroll(direction);
        break;
      case 'Contact':
        handleContactScroll(direction);
        break;
      default:
        break;
    }
  };

  function handleSelectOptionsIndex(){
    dispatch({ type: SET_SELECT_OPTIONS_INDEX})
  }

  function handleSetMenuIndex(direction) {
    const nextIndex = direction ? (state.menuIndex + 1) % 4 : ((state.menuIndex - 1) + 4) % 4;
    dispatch({ type: SET_MENU_INDEX, menuIndex: nextIndex });
  }

  const handleScroll = (direction, type) => {
    dispatch({ type: `${type.toUpperCase()}_SCROLL`, [`${type}Forward`]: direction });
  }

  function handleAboutScroll(direction) {
    handleScroll(direction, "about");
  }

  function handleProjectsScroll(direction) {
    handleScroll(direction, state.projectDetails ? "project_details" : "projects");
  }

  function handleContactScroll(direction) {
    handleScroll(direction, "contact");
  }
  
  //select button events
  function handleSelectClick() {
    if(state.continueOn){
      dispatch({ type: TOGGLE_SELECT, selectOn: !state.selectOn})
    } 
  }

  //start button events
  const handleStartClick = (buttonType) => {
    if(!state.continueOn){
      handleContinueClick()
      return;
    } 
    if(state.selectOn){
      handleSelectScreenStartClicks(buttonType)
      return;
    }
    handleMenuItemsStartClicks()
  }

  const handleSelectScreenStartClicks = (buttonType) => {
    switch(buttonType) {
      case "Back":
        handleBack();
        break;
      case "Home":
        handleHome();
        break;
      case "Animations":
        handleAnimations();
        break;
      case "Dark":
        handleDarkMode();
        break;
      default:
        handleStartPress();
    }
  }

  const handleMenuItemsStartClicks = () => {
    switch(state.activeMenuItem) {
      case undefined:
        handleActiveMenuItem();
        break;
      case "Projects":
        handleProjectClick(state.currentProject && state.projectDetailsIndex === PROJECT_DETAIL_TITLES.length - 1 ? null : PROJECTS[state.projectTitlesIndex-1])
        break;
      case "Resume":
        handleDownload();
        break;
      case "Contact":
        handleContact();
        break;
      default:
        break;
    }
  }

  function handleContinueClick() {
    dispatch({ type: TOGGLE_CONTINUE, continueOn: true})
  }

  function handleActiveMenuItem() {
    dispatch({ type: SET_ACTIVE_MENU_ITEM, activeMenuItem: MENU_ITEMS[state.menuIndex]})
  }

  function handleProjectClick(project) {
    dispatch({ type: SELECT_PROJECT, project: project})
    dispatch({ type: TOGGLE_PROJECT_DETAILS, projectDetails: project ? true : false})
  };


  function handleContact() {
    if(state.contactIndex === 1){
      window.open('mailto:nathanbrickett@gmail.com', '_blank');
    } else if(state.contactIndex === 2){
      dispatch({ type: COPY_CONTACT })
      navigator.clipboard.writeText('nathanbrickett@gmail.com');
    }
  }

  function handleDownload() {
    const downloadLink = document.createElement('a');
    downloadLink.href = resume;
    downloadLink.download = 'Nathan-Brickett-Resume.pdf';
    downloadLink.click();
  }

  function handleBack(){
    dispatch({ type: TOGGLE_BACK}) 
    dispatch({ type: SET_SELECT_OPTIONS_INDEX})
  }

  function handleHome(){
    dispatch({ type: TOGGLE_BACK}) 
    dispatch({ type: SET_ACTIVE_MENU_ITEM, activeMenuItem: undefined})
    dispatch({ type: SET_SELECT_OPTIONS_INDEX}) 
    dispatch({ type: SET_PROJECT_TITLES_INDEX, projectTitlesIndex: 0})
    handleProjectClick(undefined)
  }

  function handleAnimations(){
    dispatch({ type: TOGGLE_ANIMATIONS })
  }

  function handleDarkMode(){
    dispatch({ type: TOGGLE_DARK_MODE })
  }

  const handleStartPress = () => {
    state.activeMenuItem ? handleActiveMenuStartPress() : handleLandingStartPress()
  }

  const handleActiveMenuStartPress = () => {
    state.selectOptionsIndex === 0 ? handleBack() : handleHome()
  }

  const handleLandingStartPress = () => {
    state.selectOptionsIndex === 0 ? handleAnimations() : handleDarkMode()
  }

  //when the user clicks on the back to projects button, the screen scrolls to the active project title
  useEffect(() => {
    if(!state.projectDetails){
      const cardElement = document.getElementById(PROJECT_TITLES[state.projectTitlesIndex]);
      cardElement && cardElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [state.projectDetails, state.projectTitlesIndex])
  
  return {
    state,
    dispatch,
    handlePowerOn,
    handleButtonPress,
    handleGamepadPress,
    handleMenuIndexClick,
    handleSelectClick, 
    handleStartClick,
    handleProjectClick,
    handleDownload
  };
  
}
  