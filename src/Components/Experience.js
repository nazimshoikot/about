import { Image } from 'react-bootstrap';
import './experience.css';
import messages from "../Data/Messages.json";
import HKU_logo from "./../Data/HKU_logo.jpg";
import eWalker_logo from "./../Data/eWalker_logo.png";
import azeus_logo from "./../Data/azeus_logo.jfif";
import scoolsmart_logo from "./../Data/scoolsmart_logo.png";
import the_coach_logo from "./../Data/the_coach.png";
import D_ENGRAVER_logo from "./../Data/D-ENG.png"
import kodifly_logo from "./../Data/kodifly_logo.png"

function Experience(props) {
    // get the qualification object
    let e = props.experience;
    let logo = null;

    // decide which logo to give
    switch(e.name) {
        case "D-ENGRAVER LIMITED":
            logo = D_ENGRAVER_logo
            break;
        case "THE UNIVERSITY OF HONG KONG":
            logo = HKU_logo;
            break;
        case "EWALKER MANAGEMENT LTD":
            logo = eWalker_logo;
            break;
        case "AZEUS SYSTEMS LIMITED":
            logo = azeus_logo;
            break;
        case "SCOOLSMART":
            logo = scoolsmart_logo;
            break;
        case "THE COACH":
            logo = the_coach_logo;
            break;
        case "KODIFLY LIMITED": 
            logo = kodifly_logo
        default:
            
    }
    return (
        <div className = "qualification-container">
            <Image className = "experience-logo" src = {logo} roundedCircle/>
            <div className="qualification-items-container">
                <div className="e-item-name">{e.name}</div>
                <div className="e-item">{e.position}</div>
                <div className="e-item-year">{e.year}</div>
                <div className="e-item-description">{e.description}</div>
            </div>
        </div>
            
    )
}

function Experiences(props) {

    // get all the qualification
    let experiences_component = messages.Experiences.map((q) => {
        return (<Experience 
            experience = {q}
            key = {q.name}
        />
        )
    });

    return(
        <div ref={props.ref_to_use} className  ="experience-root-container">
            <h1 className="blue-header">EXPERIENCE</h1>
            <div className = "experience-components-container">
                {experiences_component}
            </div>
        </div>
    )
}

export default Experiences;