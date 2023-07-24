import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffcanvasNavBar from './Fragments/NavBarFragments';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ImgInicioFragment from "./Fragments/ImgInicioFragments";
import CardInicioFragment from "./Fragments/CardInicioFragment";
import BannerPub from "../assets/images/BannerPub.jpg";
import PublicacionesFragment from "./Fragments/PublicacionesFragment";

const Publicaciones = () => {
    const [show, setShow] = useState(false);

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
                                titulo={"Nuestras Publicaciones"}
                                imagen={BannerPub}
                                textoDescripcion={"El voluntariado permite conocer a otras personas con ideas afines, que comparten los mismos valores e intereses. Esto puede generar amistades duraderas y fuertes, así como conexiones empresariales o laborales. El voluntariado también fomenta la diversidad y la inclusión, al facilitar el contacto con personas de diferentes culturas, edades o condiciones. Para comprender el impacto en nuestros voluntarios, les pedimos escribir que piensan de Protectores Climáticos:"}
                                />
                        </Col>
                        <Col sm={5}> 
                            <CardInicioFragment
                                descripcion={"Las fundaciones hemos asistido y empoderado a las poblaciones más vulnerables y afectadas por el cambio climático, especialmente a las mujeres, los niños, los indígenas y los campesinos, para que puedan adaptarse a los impactos climáticos y defender sus derechos. Un ejemplo sobresaliente es el Fondo Verde del Clima, creado por la ONU, que ha destinado más de 8.000 millones de dólares a proyectos que combinan la mitigación y la adaptación al cambio climático en países en desarrollo."}
                                />
                        </Col>
                </Row>
                <Row>
                    <PublicacionesFragment
                        nombre={"Miguel Godoy"}
                        texto={"Soy voluntario de Protectores Climáticos, es una gran fundación que previene el cambio climático y creo que es una de las mejores decisiones que he tomado en mi vida. Me siento parte de una comunidad que comparte los mismos valores e intereses, que se preocupa por el planeta y por las personas, y que actúa con coherencia y compromiso. Creo que estas fundaciones son muy importantes porque realizan una labor fundamental para concientizar, educar, innovar y movilizar a la sociedad frente a este problema global. Estas fundaciones también me han permitido aprender muchas cosas nuevas, conocer a gente maravillosa, desarrollar mis habilidades y contribuir con mi granito de arena a un mundo más verde, justo y sostenible. Estoy orgulloso de ser voluntario y animo a todos los que puedan a que se sumen a esta causa. Juntos podemos hacer la diferencia."}
                        />
                </Row>

                <Row>
                    <PublicacionesFragment
                        nombre={"Micaela Suárez"}
                        texto={"Ser voluntaria de esta fundación y ha sido una experiencia muy enriquecedora para mí. He aprendido mucho sobre el cambio climático y sus soluciones, he desarrollado nuevas habilidades y competencias, y he ampliado mi red de contactos y amigos. Me he sentido útil y valorada, y he podido aportar mi creatividad y mi pasión a una causa noble y urgente. Creo que estas fundaciones son muy importantes para fomentar la participación y el empoderamiento de la ciudadanía frente al cambio climático, y por eso estoy agradecida de ser voluntaria."}
                        />
                </Row>

                <Row>
                    <PublicacionesFragment
                        nombre={"Gonzalo Tapia"}
                        texto={"Ser voluntario de una fundación que previene el cambio climático ha sido un desafío y una oportunidad para mí. He tenido que salir de mi zona de confort, enfrentarme a situaciones nuevas y complejas, y asumir responsabilidades y compromisos. Pero también he tenido la oportunidad de crecer personal y profesionalmente, de conocer otras realidades y culturas, y de contribuir a un bien común. Creo que estas fundaciones son muy valiosas para fortalecer la resiliencia y la justicia climática, y por eso estoy satisfecho de ser voluntario."}
                        />
                </Row>

                <Row>
                    <PublicacionesFragment
                        nombre={"Carlos Flores"}
                        texto={"Me convertí en voluntario de una fundación que previene el cambio climático porque me inspiró el ejemplo de otros jóvenes que se movilizaban por el clima. Quería hacer algo más que solo ver las noticias o firmar peticiones, quería ser parte de la solución y no del problema. Me uní a una fundación que apoya y difunde proyectos e iniciativas que generan impacto positivo en el clima, desde una perspectiva social, económica y ambiental. Creo que estas fundaciones son muy relevantes para promover la transición hacia un modelo de desarrollo bajo en carbono, resiliente y solidario, y por eso estoy contento de ser voluntario."}
                        />
                </Row>

                <Row>
                    <PublicacionesFragment
                        nombre={"Josefina Montenegro"}
                        texto={"Ser voluntaria de una fundación que previene el cambio climático me ha cambiado la vida. He descubierto que hay muchas formas de ayudar al planeta y a las personas que más lo necesitan, desde acciones cotidianas hasta proyectos colectivos. Me he sentido parte de un movimiento global que lucha por un futuro mejor, y he conocido a personas inspiradoras que me han enseñado mucho. Creo que estas fundaciones son esenciales para generar conciencia y acción climática, y por eso estoy feliz de colaborar con ellas."}
                        />
                </Row>
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
export default Publicaciones