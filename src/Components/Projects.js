import { Image } from 'react-bootstrap';
import { GrGithub } from "react-icons/gr";

import './education.css';
import './projects.css';
import messages from "../Data/Messages.json";
import search_logo from "./../Data/search_icon.png";
import lens_logo from "./../Data/lens_logo.jpg";
import mcq_logo from "./../Data/mcq_logo.png";
import twisttier_logo from "./../Data/twisttier_logo.jpg";
import bigtwo_logo from "./../Data/bigtwo_logo.png";
import xinu_logo from "./../Data/xinu_logo.png";
import artisynth_logo from "./../Data/artisynth.jpg";
import movie_mingle_logo from "./../Data/moviemingle.png";

function Project(props) {
    // get the qualification object
    let p = props.project;
    let logo = null;

    // decide which logo to give
    switch(p.name) {
        case "DOCUMIND":
            logo = search_logo;
            break;
        case "EYE SPY":
            logo = lens_logo;
            break;
        case "QUIZ QUEST":
            logo = mcq_logo;
            break;
        case "TWISTTIER":
            logo = twisttier_logo;
            break;
        case "BIGTWO":
            logo = bigtwo_logo;
            break;
        case "XINU FLEX":
            logo = xinu_logo;
            break;
        case "MOVIE MINGLE":
            logo = movie_mingle_logo;
            break;
        case "ARTISYNTH":
            logo = artisynth_logo;
            break;
        default:
            
    }

    let code_button = <div 
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
    if (p.link == "") {
        code_button = <div 
            className="link-button link-button-disable"
        >
            <div>
                <GrGithub className="github-icon" />
            </div>
            <div className="button-code-message msg-justify-left">
                Private
            </div>        
        </div>
    }

    return (
        <div className = "project-component-container">
            <Image className = "project-logo" src = {logo} roundedCircle/>
            <div className="project-items-container">
                <div className="p-item-name">{p.name}</div>
                <div className="p-item">{p.description}</div>
                <div className = "link-button-container">
                    {code_button}   
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