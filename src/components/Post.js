import React from 'react';
import {Card} from 'react-bootstrap';

function Posts({title, body}) {
    return (
        <Card className="mt-2 mb-2">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Posts;
