import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ImgInicioFragment = ({ imagen, titulo, textoDescripcion }) => {

    return (
        <Card className="bg-dark text-white">
            <Card.Img src={imagen} alt="Card image" fluid rounded className=""/>
                <Card.ImgOverlay>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                    {textoDescripcion}
                    </Card.Text>
            </Card.ImgOverlay> 
        </Card>
    )
}

export default ImgInicioFragment