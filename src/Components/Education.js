import { Image } from 'react-bootstrap';
import './education.css';
import messages from "../Data/Messages.json";
import HKU_logo from "./../Data/HKU_logo.jpg";
import purdue_logo from "./../Data/purdue.jpg";
import mastermind_logo from "./../Data/mastermind_logo.jpg";


function Qualification(props) {
    // get the qualification object
    let q = props.qualification;
    let logo = null;

    // decide which logo to give
    switch(q.name) {
        case "THE UNIVERSITY OF HONG KONG":
            logo = HKU_logo;
            break;
        case "PURDUE UNIVERSITY":
            logo = purdue_logo;
            break;
        case "MASTERMIND SCHOOL":
            logo = mastermind_logo;
            break;
        default:
            
    }


    return (
        <div className = "qualification-container">
            
            <Image className = "edu-logo" src = {logo} roundedCircle/>
            
            <div className="qualification-items-container">
                <div className="q-item-name">{q.name}</div>
                <div className="q-item-year">{q.year}</div>
                <div className="q-item">{q.description}</div>
            </div>

        </div>
            
    )
}


function Education(props) {

    // get all the qualification
    let qualifications_component = messages.Education.map((q) => {
        return (<Qualification 
            qualification = {q}
            key = {q.name}
        />
        )
    });

    return(
        
        <div ref={props.ref_to_use} className  ="education-root-container">
                
                <h1 className="white-header">EDUCATION</h1>

                <div className = "edu-qual-component-container">
                    {qualifications_component}
                </div>


                
            
        </div>
    )
}

export default Education;