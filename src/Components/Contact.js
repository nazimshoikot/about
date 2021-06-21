import './contact.css';

import { GrLinkedin, GrFacebook, GrInstagram, GrMail, GrGithub } from "react-icons/gr";


function Contact(props) {


    return(
        
        <div id="contact-root-container">
            <div ref={props.ref_to_use} className="contact-name">
                SM Nazim Uddin Shoikot
            </div>

            <div id = "inner-border-container">
                <div id="inner-border">&nbsp;</div>
            </div>



            

            <div id="contact-icons-container">
                <GrMail 
                    className = "contact-icons" 
                    onClick={()=> window.open("mailto:nazim.shoikot@gmail.com")}
                />

                <GrGithub  
                    className = "contact-icons" 
                    onClick={()=> window.open("https://github.com/nazimshoikot", "_blank")}
                />

                <GrFacebook  
                    className = "contact-icons" 
                    onClick={()=> window.open("https://www.facebook.com/SMShoikot123/", "_blank")}
                />


                <GrLinkedin
                    onClick={()=> window.open("https://www.linkedin.com/in/nazim-shoikot/", "_blank")}
                    className = "contact-icons" 
                />

                <GrInstagram 
                    className = "contact-icons" 
                    onClick={()=> window.open("https://www.instagram.com/nazimshoikot/", "_blank")}
                />
            </div>
        </div>
        

        
    )
}

export default Contact;