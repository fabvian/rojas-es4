import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Offcanvas } from 'react-bootstrap';


const OffcanvasNavBar = ({ show, setShow }) => {
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Menú
      </Button>
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navegación</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Publicaciones">
                Publicaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Imagenes">
                Imágenes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/QuienesSomos">
                Quienes Somos
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasNavBar;
