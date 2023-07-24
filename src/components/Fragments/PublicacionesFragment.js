import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const PublicacionesFragment = ({ nombre, texto }) => {

    return (
        <>
            <Card className="text-center text-green my-5 py-4"> 
                <Card.Body>
                    <h1>{nombre}</h1>
                    <p>{texto}</p>
                </Card.Body>
            </Card>
        </>
    )
}

export default PublicacionesFragment