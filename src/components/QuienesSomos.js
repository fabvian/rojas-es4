import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import OffcanvasNavBar from './Fragments/NavBarFragments';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Form, Button} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import ImgInicioFragment from "./Fragments/ImgInicioFragments";
import CardInicioFragment from "./Fragments/CardInicioFragment";
import BannerQS from "../assets/images/BannerQS.jpg";
import PublicacionesFragment from "./Fragments/PublicacionesFragment";

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  function InputNumber(props) {
    const { input, setInput, handleSubmit } = props;
  
    function handleChange(event) {
      setInput(event.target.value);
    }
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="input">
          <Form.Label>Ingresa un número:</Form.Label>
          <Form.Control
            type="number"
            value={input}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Calcular Factorial
        </Button>
      </Form>
    );
  }
  
  function InputSelect(props) {
    const { input, setInput, handleSubmit } = props;
  
    function handleChange(event) {
      setInput(event.target.value);
    }
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="input">
          <Form.Label>Elige un número:</Form.Label>
          <Form.Control as="select" value={input} onChange={handleChange}>
            {Array.from({ length: 30 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Calcular Factorial
        </Button>
      </Form>
    );
  }


const QuienesSomos = () => {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [inputType, setInputType] = useState("number");

    function handleSubmit(event) {
        event.preventDefault();
        const n = parseInt(input);
        if (isNaN(n)) {
          setOutput("Ingresa un número válido.");
        } else if (n < 0) {
          setOutput("Ingresa un número positivo.");
        } else {
          const result = factorial(n);
          setOutput(`El factorial es: ${result}`);
        }
      }
    
      function handleToggle(event) {
        event.preventDefault();
        if (inputType === "number") {
          setInputType("select");
          setInput(1);
        } else {
          setInputType("number");
          setInput("");
        }
      }


    return (
        <div>
            <header>
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                    <Navbar.Brand href="/Home">Protectores Climáticos</Navbar.Brand>
                    <OffcanvasNavBar show={show} setShow={setShow} />
                    </Container>
                </Navbar>
            </header>
            <main>
                <Container>
                    <Row className="px-4 my-5">
                            <Col sm={7}>
                                <ImgInicioFragment
                                    titulo={"Sobre Nosotros"}
                                    imagen={BannerQS}
                                    textoDescripcion={"Somos protectores climáticos, somos guardianes de la vida, somos sembradores de esperanza, somos agentes de cambio. Nos mueve el amor por la naturaleza, nos inspira el sueño de un mundo mejor, nos une el compromiso con la sociedad, nos guía el respeto por la diversidad. Movilizamos conciencias y voluntades, enseñamos a cuidar y a valorar, creamos y difundimos mensajes positivos. Únete a los protectores climáticos y juntos hagamos la diferencia."}
                                    />
                            </Col>
                            <Col sm={5}> 
                                <CardInicioFragment
                                    descripcion={"Las fundaciones hemos impulsado y financiado proyectos e iniciativas que promueven el uso de energías renovables, la eficiencia energética, la movilidad sostenible y la economía circular, entre otras soluciones para reducir las emisiones de gases de efecto invernadero. Un ejemplo notable es el Fondo para el Medio Ambiente Mundial, respaldado por la ONU, que ha otorgado más de 25.000 pequeñas subvenciones a comunidades locales para desarrollar proyectos relacionados con la recuperación del planeta."}
                                    />
                            </Col>
                    </Row>
                    <Row>
                        <PublicacionesFragment
                            nombre={"¿Quiénes Somos?"}
                            texto={'"Somos Protectores Climáticos, una fundación sin fines de lucro fundada por Fabián Rojas, que nace en el año 2020, con el propósito de prevenir el cambio climático en el mundo. Somos conscientes de que este es uno de los mayores desafíos que enfrenta la humanidad en el siglo XXI, y que requiere de la acción conjunta y coordinada de todos los sectores y actores sociales. Nuestra misión es promover una cultura de cuidado y respeto por el medio ambiente y la sociedad, a través de acciones concretas y participativas que contribuyan a reducir las emisiones de gases de efecto invernadero, a conservar la biodiversidad y los recursos naturales, y a mejorar la calidad de vida de las personas. Nuestra visión es ser un referente de liderazgo y compromiso ambiental, generando un impacto positivo y duradero en nuestro planeta y en las generaciones futuras. Nuestras actividades abarcan diversas iniciativas, que responden a las necesidades y demandas de las comunidades locales e involucran a diferentes actores sociales".'}
                            />
                    </Row>     
                    <Row>
                        <PublicacionesFragment
                            nombre={"Únete a los Voluntarios"}
                            texto={"¿Te gustaría ser parte de los Protectores Climáticos? ¿Te gustaría contribuir a prevenir el cambio climático y a mejorar el mundo? ¿Te gustaría vivir una experiencia única y enriquecedora, donde puedas aprender, compartir y divertirte? Si tu respuesta es sí, entonces te invitamos a ser voluntario de nuestra fundación. Ser voluntario de Protectores Climáticos significa formar parte de una gran familia, donde todos compartimos una misma pasión y un mismo propósito. Significa participar activamente en nuestras actividades e iniciativas, aportando tu tiempo, tu talento y tu energía. Significa también recibir capacitación, orientación y acompañamiento, para que puedas desarrollar tus habilidades y potencialidades. Y significa también disfrutar de los beneficios de ser voluntario, como recibir certificados, reconocimientos, incentivos y oportunidades. Para ser voluntario de Protectores Climáticos, solo necesitas tener más de 18 años, tener ganas de aprender y de ayudar, y comprometerte con nuestra misión y visión. No importa tu profesión, tu nivel educativo o tu experiencia previa. Lo que importa es tu actitud y tu disposición. Si quieres ser voluntario de Protectores Climáticos, solo tienes que llenar el formulario que encontrarás en nuestra página web, donde nos contarás un poco sobre ti y tus intereses. Luego, te contactaremos para invitarte a una sesión informativa, donde te explicaremos más sobre nuestra fundación y nuestras actividades. Y finalmente, te asignaremos una iniciativa acorde a tu perfil y disponibilidad. No lo dudes más. Únete a los Protectores Climáticos y sé parte de la solución al cambio climático. Te esperamos con los brazos abiertos."}
                            />
                    </Row>     
                </Container>
                <Container className="App">
                <h1>Calcular Factorial</h1>
                <Button variant="secondary" onClick={handleToggle}>
                    Cambiar tipo de entrada
                </Button>
                {inputType === "number" ? (
                    <InputNumber
                    input={input}
                    setInput={setInput}
                    handleSubmit={handleSubmit}
                    />
                ) : (
                    <InputSelect
                    input={input}
                    setInput={setInput}
                    handleSubmit={handleSubmit}
                    />
                )}
                <p>{output}</p>
                </Container>
            </main>
            <footer class="py-5 my-5 bg-light">
                <Container>
                    <p class="text-center">
                        Copyright &copy; Protectores Climáticos 2023
                    </p>
                </Container>
            </footer>
        </div>
    )

}
export default QuienesSomos;