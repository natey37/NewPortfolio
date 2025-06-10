import React, { useEffect, useRef } from 'react';
import "./MenuItems.css"

export default function Projects({projects, currentProject, handleProjectClick, projectTitlesIndex, projectDetailsIndex}) {
  const detailsTitleRef = useRef(null);

  useEffect(() => {
    if(currentProject) detailsTitleRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [currentProject])

  return (
    <div className="projects-container">
      {currentProject ? (
        <div className="project-details-container">
          <h2 ref={detailsTitleRef} className={`${projectDetailsIndex === 0 && "underline"}`} id="project-details-title" >{currentProject.title}</h2>
          {currentProject.videoUrl ? 
            <iframe id="project-details-video" title="Positively Charged" src={currentProject.videoUrl} width="95%" height="100%" frameBorder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen></iframe>
            :
            null
          }
          {currentProject.images.map((image, index) => {
            return (
              <div className='project-details-image-container' key={`${image}-${index}`}>
                <img id="project-details-image" src={image} alt={currentProject.title} />
                {index === 0 && projectDetailsIndex === 1 && <div className="project-details-image-line"></div>}
              </div>
            )
          })}
          <h4 className={`${projectDetailsIndex === 2 && "underline"}`} id="project-details-about" >About the project</h4>
          <p>{currentProject.description}</p>
          <h4 className={`${projectDetailsIndex === 3 && "underline"}`} id="project-details-made-with"  >Made with</h4>
          <p>{currentProject.madeWith}</p>
          {currentProject.url ? 
            <a href={currentProject.url} target="_blank" rel="noopener noreferrer">View Project</a> 
            : 
            null
          }
          <button 
            className={`${projectDetailsIndex === 4 && "underline"}`}
            id="project-details-back-button"
            onClick={() => {handleProjectClick(undefined)}}
          >
            Back to Projects
          </button>
        </div>
      ) : (
        <div className="projects-list-container">
          <h1 className={`about-title ${projectTitlesIndex === 0 && "underline"}`} id={"project-title"}>Projects</h1>
          {projects && projects.map((project, index) => (
            <div
              className="project-card"
              key={`${project.title}-${index}`}
              onClick={() => handleProjectClick(project)}
            > 
              <h3 className={`about-title ${index + 1 === projectTitlesIndex && "underline"}`} id={`project-${project.title}`}>{project.title}</h3>
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
