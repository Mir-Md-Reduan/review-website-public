import React from 'react';
import { ButtonGroup, Card } from 'react-bootstrap';
import './Post.css'

const Post = (props) => {
    const { title, body } = props.post;
    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="images/Blog.jpg" />
                <Card.Body>
                    <Card.Title>{title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                        {body.slice(0, 90)}
                    </Card.Text>

                </Card.Body>
            </Card>
            {/*  <div>
            <h2>{title.slice(0, 20)}</h2>
            <p>{body.slice(0, 50)}</p>
            </div> */}
        </div >
    );
};

export default Post;