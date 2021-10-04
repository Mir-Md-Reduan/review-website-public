import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactUs.css'

const ContactUs = () => {
    const element = <FontAwesomeIcon icon={faFacebook} />;
    const element1 = <FontAwesomeIcon icon={faLinkedin} />;
    const element2 = <FontAwesomeIcon icon={faGithub} />;
    return (
        <div className="contact-container">
            <div><p>FaceBook: {element}</p></div>
            <div><p>Linkedin: {element1}</p></div>
            <div><p>GitHub: {element2}</p></div>
        </div>

    );
};

export default ContactUs;