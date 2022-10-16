import React from "react";
import self from "./../Data/Self.jpg"
import {Image } from 'react-bootstrap';
import './intro.css';
import messages from "./../Data/Messages.json";
import {BsFillPersonLinesFill} from "react-icons/bs";
import bg_image from "./../Data/hk_skyline.jpg";
import coverPic from '../Data/cover.jpg'



function Intro(props) {

    function open_resume(){
        let baseURL = window.location.href;
        window.open(baseURL + "/resume.pdf", "_blank")
    }
    const clientWidth = document.documentElement.clientWidth;

    return(
        <div className ="root-container" >
            <div style={{ backgroundImage: `url(${bg_image})` }} className="greetings-container">
                <div>
                    <div className = "greetings-message" >
                        {messages.Greetings}
                    </div>
                    <div className="buttons-container">
                        <div onClick={open_resume} className="rounded-buttons">
                            Resume
                        </div>
                        <div className="rounded-buttons" onClick={() => props.scroll_to(props.contact_ref)}>
                            Contact
                        </div>
                    </div>
                </div>
            </div>  

            <div className="arrow" onClick={()=>props.scroll_to(props.ref_to_use)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="intro-container" ref={props.ref_to_use} >
                <div className="intro-inner-ctn">
                    <div className="intro-text-ctn">
                        <div className="inner-introduction-message-container">
                            <div id="profile-logo-container">
                                <BsFillPersonLinesFill className = "profile-logo" />
                            </div>
                            <div className="intro-messages-container">
                                {messages.Introduction1}
                            </div>
                            <div className="intro-messages-container">
                                {messages.Introduction2}
                            </div>
                            <div className="intro-messages-container">
                                {messages.Introduction3}
                            </div>
                        </div>
                    </div>
                    <div hidden={clientWidth < 800} className="bg-img">
                        <Image className="cover-pic" src={self} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;