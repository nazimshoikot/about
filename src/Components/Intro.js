import React, { useEffect, useState } from 'react';
import self from './../Data/Self.jpg';
import { Image } from 'react-bootstrap';
import './intro.css';
import messages from './../Data/Messages.json';
import heroImage from './../Data/hk_skyline.jpg';

function Intro(props) {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = heroImage;
    img.onload = () => setHeroLoaded(true);
  }, []);

  function open_resume() {
    window.open(`${window.location.origin}/about/resume.pdf`, '_blank');
  }

  return (
    <div className="root-container">
      <div className={`greetings-container ${heroLoaded ? 'loaded' : 'loading'}`}>
        <img src={heroImage} alt="Hong Kong skyline" className="hero-bg-image" loading="eager" fetchpriority="high" />
        <div className="hero-overlay">
          {!heroLoaded && <div className="hero-loading">Loading...</div>}
          {heroLoaded && (
            <>
              <div className="greetings-message">{messages.Greetings}</div>
              <div className="hero-tagline">{messages.Tagline}</div>
              <div className="buttons-container">
                <div onClick={open_resume} className="rounded-buttons">
                  Resume
                </div>
                <div className="rounded-buttons" onClick={() => props.scroll_to(props.contact_ref)}>
                  Contact
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="intro-container" ref={props.ref_to_use}>
        <div className="intro-inner-ctn">
          <div className="intro-text-ctn">
            <div className="inner-introduction-message-container">
              <div className="intro-messages-container">{messages.Introduction1}</div>
              <div className="intro-messages-container">{messages.Introduction2}</div>
              <div className="intro-messages-container">{messages.Introduction3}</div>
              <div className="intro-messages-container">{messages.Introduction4}</div>
            </div>
          </div>
          <div className="bg-img">
            <Image className="cover-pic" src={self} alt="Nazim Shoikot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
