import { Image } from 'react-bootstrap';
import './education.css';
import messages from '../Data/Messages.json';
import HKU_logo from './../Data/HKU_logo.jpg';
import purdue_logo from './../Data/purdue.jpg';

function Qualification({ qualification }) {
  const logo = qualification.name === 'THE UNIVERSITY OF HONG KONG' ? HKU_logo : purdue_logo;

  return (
    <div className="qualification-container education-card">
      <Image className="edu-logo" src={logo} roundedCircle />
      <div className="qualification-items-container">
        <div className="q-item-name">{qualification.name}</div>
        <div className="q-item-degree">{qualification.degree}</div>
        <div className="q-item-year">{qualification.year}</div>
        <div className="q-item">{qualification.description}</div>
      </div>
    </div>
  );
}

function Education(props) {
  return (
    <div ref={props.ref_to_use} className="education-root-container">
      <h1 className="white-header">EDUCATION</h1>
      <div className="edu-qual-component-container">
        {messages.Education.map((q) => (
          <Qualification qualification={q} key={q.name} />
        ))}
      </div>
    </div>
  );
}

export default Education;
