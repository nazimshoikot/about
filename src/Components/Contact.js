import './contact.css';

import { GrLinkedin, GrMail, GrGithub } from 'react-icons/gr';

function Contact(props) {
  return (
    <div id="contact-root-container" ref={props.ref_to_use}>
      <div className="contact-name">SM Nazim Uddin Shoikot</div>
      <div className="contact-subtitle">nazimshoikot.github.io/about | nazim.shoikot@gmail.com | github.com/nazimshoikot</div>

      <div id="inner-border-container">
        <div id="inner-border">&nbsp;</div>
      </div>

      <div id="contact-icons-container">
        <GrMail className="contact-icons" onClick={() => window.open('mailto:nazim.shoikot@gmail.com')} />

        <GrGithub className="contact-icons" onClick={() => window.open('https://github.com/nazimshoikot', '_blank')} />

        <GrLinkedin
          onClick={() => window.open('https://www.linkedin.com/in/nazim-shoikot/', '_blank')}
          className="contact-icons"
        />
      </div>
    </div>
  );
}

export default Contact;
