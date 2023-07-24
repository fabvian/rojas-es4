import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const FraseFragment = ({ texto }) => {

    return (
        <>
            <Card className="text-center text-green my-5 py-4"> 
                <Card.Body>
                    {texto}
                </Card.Body>
            </Card>
        </>
    )
}

export default FraseFragment