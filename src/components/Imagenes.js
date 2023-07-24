import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffcanvasNavBar from './Fragments/NavBarFragments';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import ImgInicioFragment from "./Fragments/ImgInicioFragments";
import CardInicioFragment from "./Fragments/CardInicioFragment";
import BannerImgs from "../assets/images/inicioImgs.jpg";
import CardImages from "./Fragments/CardImagesFragment";

import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";
import Img3 from "../assets/images/img3.jpg";
import Img4 from "../assets/images/img4.jpg";
import Img5 from "../assets/images/img5.jpg";
import Img6 from "../assets/images/img6.jpg";
import Img7 from "../assets/images/img7.jpg";
import Img8 from "../assets/images/img8.jpg";
import Img9 from "../assets/images/img9.jpg";
import Img10 from "../assets/images/img10.jpg";
import Img11 from "../assets/images/img11.jpg";
import Img12 from "../assets/images/img12.jpg";

const Imagenes = () => {
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
                                titulo={"Nuestras Imágenes"}
                                imagen={BannerImgs}
                                textoDescripcion={"Registramos nuestras campañas, movilizaciones, eventos y voluntariados para exigir y promover acciones concretas y urgentes para enfrentar el cambio climático, tanto a nivel local como global. Nuestro objetivo es incidir en las políticas públicas, las empresas y la sociedad civil para que se comprometan con la agenda climática."}
                                />
                        </Col>
                        <Col sm={5}> 
                            <CardInicioFragment
                                descripcion={"Hemos participado activamente en la promoción y el seguimiento de los compromisos climáticos de los gobiernos y las empresas, así como en la movilización civil para exigir más ambición y acción. Un ejemplo destacado es el Acuerdo de París, firmado en 2015 por casi 200 países, que establece el objetivo de limitar el aumento de la temperatura global a 1,5 °C respecto a los niveles preindustriales."}
                                />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <CardImages
                                imagen={Img1}
                                titulo={"Limpiamos Bosques"}
                                descripcion={"Nos importa la biodiversidad y la salud de los ecosistemas forestales. Por eso, nos involucramos en proyectos de limpieza de bosques, donde recogemos los residuos que puedan afectar a la flora y la fauna silvestres."}
                                />
                        </Col>
                        <Col>
                            <CardImages
                                imagen={Img2}
                                titulo={"Ayudamos a la Comunidad"}
                                descripcion={"Creemos que el cambio climático es un problema que nos afecta a todos, pero especialmente a los más vulnerables. Por eso, nos dedicamos a ayudar a la comunidad, ofreciendo apoyo social, educativo y económico a las personas que lo necesitan."}
                                />
                        </Col>
                        <Col>
                            <CardImages
                                imagen={Img3}
                                titulo={"Limpiamos Playas"}
                                descripcion={"Nos encanta disfrutar de la belleza y la diversión de las playas. Pero también somos conscientes de que están amenazadas por la contaminación y la erosión. Por eso, participamos en campañas de limpieza de playas, donde recogemos los desechos que puedan dañar el medio marino."}
                                />
                        </Col>
                    </Row><br/>

                    <Row>
                        <Col>
                            <CardImages
                                imagen={Img4}
                                titulo={"Apoyamos a Recolectores"}
                                descripcion={"Nos solidarizamos con los recolectores, que realizan una labor fundamental para el reciclaje y la gestión de los residuos. Por eso, les apoyamos con recursos, capacitación y reconocimiento social."}
                                />
                        </Col>
                        <Col>
                            <CardImages
                                imagen={Img5}
                                titulo={"Plantamos Vida"}
                                descripcion={"Nos gusta cultivar nuestros propios alimentos, de forma ecológica y saludable. Por eso, plantamos frutos en nuestros huertos, balcones o terrazas, y los compartimos con nuestros vecinos y amigos."}
                                />
                        </Col>
                        <Col>
                            <CardImages
                                imagen={Img6}
                                titulo={"Nos Movilizamos"}
                                descripcion={"Nos movemos por la ciudad de forma sostenible y eficiente. Por eso, usamos medios de transporte alternativos, como la bicicleta, el transporte público o el coche compartido."}
                                />
                        </Col>
                    </Row><br/>

                    <Row>
                        <Col>
                            <CardImages
                                imagen={Img7}
                                titulo={"Enseñamos a la Comunidad"}
                                descripcion={"Nos interesa difundir la conciencia y la acción ambiental. Por eso, enseñamos a la comunidad sobre los efectos del cambio climático y las formas de mitigarlo y adaptarse a él."}
                                />
                        </Col>
                        <Col>
                            <CardImages
                                imagen={Img8}
                                titulo={"Limpiamos la Ciudad"}
                                descripcion={"Nos preocupa la limpieza y el orden de nuestra ciudad. Por eso, nos sumamos a las iniciativas de limpieza urbana, donde recogemos la basura y embellecemos los espacios públicos."}
                                />
                        </Col>
                        <Col>
                            <CardImages
                                imagen={Img9}
                                titulo={"Cuidamos el hábitat animal"}
                                descripcion={"Nos sensibilizamos con el bienestar y la protección de los animales. Por eso, cuidamos el hábitat animal, evitando la caza, el tráfico y el maltrato de las especies silvestres y domésticas."}
                                />
                        </Col>
                    </Row><br/>

                    <Row>
                        <Col>
                            <CardImages
                                imagen={Img10}
                                titulo={"Vamos a Zonas Rurales"}
                                descripcion={"Nos enriquecemos con el contacto y el aprendizaje de las zonas rurales. Por eso, vamos a zonas rurales, donde conocemos y apoyamos a las comunidades campesinas e indígenas, y valoramos su cultura y su conocimiento ancestral."}
                                />
                        </Col>
                        <Col>
                            <CardImages
                                imagen={Img11}
                                titulo={"Reciclamos"}
                                descripcion={"Nos comprometemos con el uso responsable y eficiente de los recursos. Por eso, reciclamos los materiales que usamos, reduciendo el consumo, reutilizando lo que podemos y separando lo que no."}
                                />
                        </Col>
                        <Col>
                            <CardImages
                                imagen={Img12}
                                titulo={"Intervenciones Artísticas"}
                                descripcion={"Nos expresamos con creatividad y originalidad. Por eso, realizamos intervenciones artísticas, donde usamos el arte como una herramienta de denuncia, reflexión y transformación social y ambiental."}
                                />
                        </Col>
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
export default Imagenes;