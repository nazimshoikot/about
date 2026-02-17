import { Image } from 'react-bootstrap';
import { GrGithub } from 'react-icons/gr';

import './projects.css';
import messages from '../Data/Messages.json';
import search_logo from './../Data/search_icon.png';
import artisynth_logo from './../Data/artisynth.jpg';
import xinu_logo from './../Data/xinu_logo.png';

function Project({ project }) {
  let logo = artisynth_logo;

  switch (project.name) {
    case 'DOCUMIND':
      logo = search_logo;
      break;
    case 'XINU FLEX':
      logo = xinu_logo;
      break;
    default:
      logo = artisynth_logo;
  }

  return (
    <div className="project-component-container project-card">
      <Image className="project-logo" src={logo} roundedCircle />
      <div className="project-items-container">
        <div className="p-item-name">{project.name}</div>
        <div className="p-item">{project.description}</div>
        <div className="link-button-container">
          {project.link ? (
            <div className="link-button" onClick={() => window.open(project.link, '_blank')}>
              <GrGithub className="github-icon" />
              <div className="button-code-message">Source Code</div>
            </div>
          ) : (
            <div className="link-button link-button-disable">
              <GrGithub className="github-icon" />
              <div className="button-code-message msg-justify-left">Private / Ongoing</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects(props) {
  return (
    <div ref={props.ref_to_use} className="projects-root-container">
      <h1 className="white-header">SELECTED PROJECTS</h1>
      <div className="projects-container">
        {messages.Projects.map((p) => (
          <Project project={p} key={p.name} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
