import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { fab, faTwitterSquare, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer';
import './Footer.css'

const Footer = () => {
    const element = [<FontAwesomeIcon icon={fab} />, <FontAwesomeIcon icon={faTwitterSquare} />, <FontAwesomeIcon icon={faFacebook} />, <FontAwesomeIcon icon={faLinkedin} />, <FontAwesomeIcon icon={faGithub} />]
    return (
        <div className="color bg-secondary rounded ">
            <Container>
                <Row >
                    <p className="ms-auto">&copy; All Right Reserve To Mir Md Reduan</p>
                </Row>
                <Row>
                    <Col>
                        {element.map(e => <span className="mx-5 ms-auto" >{e}</span>)}</Col>
                </Row>

            </Container>
        </div >
    );
};

export default Footer;