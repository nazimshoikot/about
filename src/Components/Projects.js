import { Image } from 'react-bootstrap';
import { GrGithub } from "react-icons/gr";

import './education.css';
import './projects.css';
import messages from "../Data/Messages.json";
import azeus_logo from "./../Data/azeus_logo.jfif";
import lens_logo from "./../Data/lens_logo.jpg";
import mcq_logo from "./../Data/mcq_logo.png";
import twisttier_logo from "./../Data/twisttier_logo.jpg";
import bigtwo_logo from "./../Data/bigtwo_logo.png";
import xinu_logo from "./../Data/xinu_logo.png";

function Project(props) {
    // get the qualification object
    let p = props.project;
    let logo = null;

    // decide which logo to give
    switch(p.name) {
        case "SEMANTIC SEARCH ENGINE":
            logo = azeus_logo;
            break;
        case "LENS":
            logo = lens_logo;
            break;
        case "MCQUEUE":
            logo = mcq_logo;
            break;
        case "TWISTTIER":
            logo = twisttier_logo;
            break;
        case "BIGTWO":
            logo = bigtwo_logo;
            break;
        case "XINU":
            logo = xinu_logo;
            break;

        default:
            
    }


    return (
        <div className = "project-component-container">
            <Image className = "project-logo" src = {logo} roundedCircle/>
            
            <div className="project-items-container">
                <div className="p-item-name">{p.name}</div>
                <div className="p-item">{p.description}</div>
                <div className = "link-button-container">
                    <div 
                        className="link-button"
                        onClick={()=> window.open(p.link, "_blank")}
                    >
                        <div>
                            <GrGithub className="github-icon" />
                        </div>
                        <div className="button-code-message">
                            Source Code
                        </div>        
                    </div>
                </div>
                
            </div>

        </div>
            
    )
}

function Projects(props) {

    // get all the qualification
    let projects_component = messages.Projects.map((p) => {
        return (<Project 
            project = {p}
            key = {p.name}
        />
        )
    });

    return(
        
        <div ref={props.ref_to_use} className  ="projects-root-container">
                
                <h1 className ="white-header">PROJECTS</h1>

                <div className = "projects-container">
                    {projects_component}
                </div>
                
            
        </div>
    )
}

export default Projects;