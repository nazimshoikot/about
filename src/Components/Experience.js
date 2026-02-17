import { Image } from 'react-bootstrap';
import './experience.css';
import messages from "../Data/Messages.json";
import eWalker_logo from "./../Data/eWalker_logo.png";
import D_ENGRAVER_logo from "./../Data/D-ENG.png";
import kodifly_logo from "./../Data/kodifly_logo.png";

function ExperienceCard({ experience }) {
  let logo = null;

  switch (experience.name) {
    case 'D-ENGRAVER LIMITED':
      logo = D_ENGRAVER_logo;
      break;
    case 'EWALKER MANAGEMENT LTD':
      logo = eWalker_logo;
      break;
    case 'KODIFLY LIMITED':
      logo = kodifly_logo;
      break;
    default:
      logo = null;
  }

  return (
    <div className="experience-card">
      {logo ? (
        <Image className="experience-logo" src={logo} roundedCircle />
      ) : (
        <div className="experience-logo experience-logo-fallback">{experience.name[0]}</div>
      )}
      <div className="qualification-items-container">
        <div className="e-item-name">{experience.name}</div>
        <div className="e-item">{experience.position}</div>
        <div className="e-item-year">{experience.year}</div>
        <ul className="experience-highlights">
          {experience.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experiences(props) {
  return (
    <div ref={props.ref_to_use} className="experience-root-container">
      <h1 className="blue-header">EXPERIENCE</h1>
      <div className="experience-components-container">
        {messages.Experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.name} />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
