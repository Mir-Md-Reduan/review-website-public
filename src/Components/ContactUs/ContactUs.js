import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faLinkedin, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs = () => {
    const element = <FontAwesomeIcon icon={faFacebook} />;
    const element1 = <FontAwesomeIcon icon={faLinkedin} />;
    const element2 = <FontAwesomeIcon icon={faGithub} />;
    return (
        <div>
            <div>
                <p>FaceBook: {element}</p>
                <p>Linkedin: {element1}</p>
                <p>GitHub: {element2}</p>
            </div>
        </div>
    );
};

export default ContactUs;