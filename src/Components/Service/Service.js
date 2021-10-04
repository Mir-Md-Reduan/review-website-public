import React from 'react';
import { Button, Card, } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    console.log(props.service);
    const { service, img, cost, description } = props.service;
    return (
        <div className="service-container">
            <Card >
                <Card.Img className="fluid" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{service}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 80)} <br />
                        Cost:${cost}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            {/* <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{service}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card> */}
        </div >
    );
};

export default Service;