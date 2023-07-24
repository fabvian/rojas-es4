import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CardInicioFragment = ({ descripcion }) => {

    return (
        <>
            {[
                'Success',
            ].map((variant) => (
                <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
                >
                <Card.Header>Nuestros logros</Card.Header>
                <Card.Body>
                    <Card.Title>{variant} </Card.Title>
                    <Card.Text>
                    {descripcion}
                    </Card.Text>
                    <Button>Saber más</Button>
                </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default CardInicioFragment