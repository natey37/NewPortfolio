import { useState, useEffect } from "react";
import About from "../MenuItems/About";
import Projects from "../MenuItems/Projects";
import Contact from "../MenuItems/Contact";
import Resume from "../MenuItems/Resume";
import resume from "../../images/resume/resume.pdf";
import "./SimpleMenu.css";

export default function SimpleMenu({ projects }) {
  const [menuIndex, setMenuIndex] = useState(0);

  const [currentProject, setCurrentProject] = useState(undefined);
  const [projectTitlesIndex, setProjectTitlesIndex] = useState(0);
  const [projectDetailsIndex, setProjectDetailsIndex] = useState(0);

  const handleProjectClick = (project) => {
    if (project) {
      setCurrentProject(project);
      setProjectDetailsIndex(0);
    } else {
      setCurrentProject(undefined);
      setProjectTitlesIndex(0);
    }
  };

  function handleDownload() {
    const downloadLink = document.createElement("a");
    downloadLink.href = resume;
    downloadLink.download = "Nathan-Brickett-Resume.pdf";
    downloadLink.click();
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [menuIndex]);

  return (
    <div className="simple-menu-container">
      <nav className="simple-menu-nav">
        <button
          className={`simple-menu-button ${menuIndex === 0 ? "active" : ""}`}
          onClick={() => {
            setMenuIndex(0);
            setCurrentProject(undefined);
          }}
        >
          About
        </button>
        <button
          className={`simple-menu-button ${menuIndex === 1 ? "active" : ""}`}
          onClick={() => {
            setMenuIndex(1);
            setCurrentProject(undefined);
          }}
        >
          Projects
        </button>
        <button
          className={`simple-menu-button ${menuIndex === 2 ? "active" : ""}`}
          onClick={() => {
            setMenuIndex(2);
            setCurrentProject(undefined);
          }}
        >
          Resume
        </button>
        <button
          className={`simple-menu-button ${menuIndex === 3 ? "active" : ""}`}
          onClick={() => {
            setMenuIndex(3);
            setCurrentProject(undefined);
          }}
        >
          Contact
        </button>
      </nav>

      <main className="simple-menu-content">
        {menuIndex === 0 && (
          <div className="simple-about-container">
            <About aboutTitlesIndex={0} />
          </div>
        )}
        {menuIndex === 1 && (
          <div className="simple-projects-container">
            <Projects
              projects={projects}
              currentProject={currentProject}
              handleProjectClick={handleProjectClick}
              projectTitlesIndex={projectTitlesIndex}
              projectDetailsIndex={projectDetailsIndex}
            />
          </div>
        )}
        {menuIndex === 2 && (
          <div className="simple-resume-container">
            <Resume handleDownload={handleDownload} />
          </div>
        )}
        {menuIndex === 3 && (
          <div className="simple-contact-container">
            <Contact contactIndex={0} copied={false} />
          </div>
        )}
      </main>
    </div>
  );
}
