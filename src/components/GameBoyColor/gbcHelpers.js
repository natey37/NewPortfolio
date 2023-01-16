export const handleScroll = (direction, currentIndex, currentOption) => {
  if (direction === 'forward' && currentIndex === currentOption.length - 1) return currentIndex
  if (direction === 'backward' && currentIndex === 0) return currentIndex

  const newIndex = direction === 'forward' ? currentIndex + 1 : currentIndex - 1;
  const cardElement = document.getElementById(currentOption[newIndex]);
  cardElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return newIndex;
}

export const handleStartAlert = (state) => {
  if(!state.animationsOn) return 

  if (
    (state.powerOn && !state.continueOn) ||
    (state.powerOn && state.continueOn && !state.activeMenuItem) ||
    (state.activeMenuItem === "Projects" && state.projectTitlesIndex !== 0 && !state.currentProject) ||
    (state.currentProject && state.projectDetailsIndex === 4) ||
    (state.activeMenuItem === "Resume") ||
    (state.activeMenuItem === "Contact" && state.contactIndex !== 0) ||
    (state.selectOn)
  ) {
    return "start-alert";
  } 
}

export const handleSelectAlert = (state) => {
  if(!state.animationsOn) return 
  if(state.continueOn && !state.selectOn) return "select-alert";
}

export const handleButtonAlert = (state, type) => {
  if(!state.animationsOn) return;
  switch (type) {
  case 'a':
    return handleAlert(state, "a");
  case 'b':
    return handleAlert(state, "b");
  default: 
    return false;
  }
}

const handleAlert = (state, buttonType) => {
  if (!state.selectOn) {
    const isButtonA = buttonType === "a";
    const isCurrentProject = state.currentProject;
    switch (state.activeMenuItem) {
      case "About":
        if (state.aboutTitlesIndex !== (isButtonA ? 4 : 0)) return `${buttonType}-button-alert`;
        break;
      case "Projects":
        if (isCurrentProject) {
          if (state.projectDetailsIndex !== (isButtonA ? 4 : 0)) return `${buttonType}-button-alert`;
        } else {
          if (state.projectTitlesIndex !== (isButtonA ? 6 : 0)) return `${buttonType}-button-alert`;
        }
        break;
      case "Contact":
        if (state.contactIndex !== (isButtonA ? 2 : 0)) return `${buttonType}-button-alert`;
        break;
      default:
        break;
    }
  }
  return;
}
export const handleGamepadAlert = (state, direction) => {
  if (!state.animationsOn) return;

  const isPowerOn = state.powerOn && state.continueOn;
  const isSelectOn = state.selectOn;
  const isActiveMenuItem = state.activeMenuItem;
  const isAbout = isActiveMenuItem === "About";
  const isProjects = isActiveMenuItem === "Projects";
  const isContact = isActiveMenuItem === "Contact";
  const isCurrentProject = state.currentProject;

  switch (direction) {
    case 'left':
      if (isPowerOn && !isActiveMenuItem) return "left-box-alert";
      if (isActiveMenuItem && isSelectOn) return "left-box-alert";
      return;
    case 'right':
      if (isPowerOn && !isActiveMenuItem) return "right-box-alert";
      if (isActiveMenuItem && isSelectOn) return "right-box-alert";
      return;
    case 'top':
      if (!isSelectOn && isPowerOn && (
        (isAbout && state.aboutTitlesIndex !== 0) ||
        (isProjects && state.projectTitlesIndex !== 0 && !isCurrentProject) ||
        (isCurrentProject && state.projectDetailsIndex !== 0) ||
        (isContact && state.contactIndex !== 0)
      )) return "top-box-alert";
      return;
    case 'bottom':
      if (!isSelectOn && isPowerOn && (
        (isAbout && state.aboutTitlesIndex !== 4) ||
        (isProjects && state.projectTitlesIndex !== 6 && !isCurrentProject) ||
        (isCurrentProject && state.projectDetailsIndex !== 4) ||
        (isContact && state.contactIndex !== 2)
      )) return "bottom-box-alert";
      return;
    default:
      return;
  }
}
