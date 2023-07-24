import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const CardImages = ({ imagen, titulo, descripcion }) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                {descripcion}
                </Card.Text>
            </Card.Body>
            </Card>
        </>
    )
}

export default CardImages