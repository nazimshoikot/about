import React, {useRef} from "react";
import { Navbar, Nav} from 'react-bootstrap';
import "./App.css";

import Intro from "./Components/Intro.js";
import Education from "./Components/Education.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from "./Components/Experience.js";
import Contact from "./Components/Contact.js";
import Projects from "./Components/Projects";



function App() {

  const intro_ref = useRef(null);
  const education_ref = useRef(null);
  const experience_ref = useRef(null);
  const project_ref = useRef(null);
  const contact_ref = useRef(null);
  
  function scrollTo(refToScroll) {
    refToScroll.current.scrollIntoView();
  }

  
  let navigationBar = (
    <Navbar sticky="top" bg="dark" variant="dark">
    <Nav className="mr-auto">
        
      <Nav.Link onClick={() => scrollTo(intro_ref)}>About me</Nav.Link>
      <Nav.Link onClick={() => scrollTo(education_ref)}>Education</Nav.Link>
      <Nav.Link onClick={() => scrollTo(experience_ref)}>Experiences</Nav.Link>
      <Nav.Link onClick={() => scrollTo(project_ref)}>Projects</Nav.Link>
      <Nav.Link onClick={() => scrollTo(contact_ref)}>Contact</Nav.Link>
    </Nav>

  </Navbar>
  )
  

    
  return (
    <div className="App">
      {navigationBar}
      
      <Intro 
        ref_to_use={intro_ref} 
        contact_ref={contact_ref} 
        scroll_to={scrollTo} />
      <Education ref_to_use={education_ref} />
      <Experience ref_to_use={experience_ref} />
      <Projects ref_to_use={project_ref} />
      <Contact ref_to_use={contact_ref}/>
      
    </div>
  );
}

export default App;
