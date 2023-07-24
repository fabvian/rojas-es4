import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffcanvasNavBar from './Fragments/NavBarFragments';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Row } from "react-bootstrap";
import Banner from "../assets/images/banner.jpg";
import Mares from "../assets/images/mares.jpg";
import PLasticos from "../assets/images/noPlasticos.jpg";
import SavePlanet from "../assets/images/savePlanet.jpg";
import Future from "../assets/images/future.jpg";
import Mundo from "../assets/images/mundo.jpg";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import ImgInicioFragment from "./Fragments/ImgInicioFragments";
import CardInicioFragment from "./Fragments/CardInicioFragment";
import CardImages from "./Fragments/CardImagesFragment";
import FraseFragment from "./Fragments/FraseFragment";



const Home = () => {
    const [show, setShow] = useState(false);
    const now = 60;
    
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
                                titulo={"Protectores Climáticos"}
                                imagen={Banner}
                                textoDescripcion={"Somos una organización sin fines de lucro que busca prevenir el cambio climático y sus consecuencias, mediante la educación, la innovación y la acción. Nuestra visión es un mundo más verde, justo y sostenible, donde las personas y el planeta convivan en armonía."}
                                />
                        </Col>
                        <Col sm={5}>
                            
                            <CardInicioFragment
                                descripcion={"Hemos contribuido con éxito en la protección y recuperación de especies, hábitats y servicios ecosistémicos que son esenciales para la vida y el equilibrio climático. Con el Programa Bosques Andinos, liderado por varias fundaciones latinoamericanas, hemos logrado restaurar más de 10.000 hectáreas de bosques nativos en siete países andinos, beneficiando a más de 300.000 personas del continente."}
                                />
                        </Col>
                    </Row>
                    <Row>
                        <FraseFragment
                            texto={'"No podemos salvar el mundo actuando solo en casa. Necesitamos un movimiento colectivo que exija un cambio sistémico" - David Attenborough, naturalista británico.'}
                            />
                    </Row>
                    <Row>
                        <Col>
                            <CardImages
                                imagen={PLasticos}
                                titulo={"Por todo el Mundo"}
                                descripcion={"Estas marchas se organizan en más de 100 países, en ciudades grandes y pequeñas, y reúnen a cientos de miles de personas de todas las edades, culturas y sectores sociales. Son una muestra de la diversidad y la unidad de la ciudadanía frente a un problema común que nos afecta a todos."}
                                />
                        </Col>
                        
                        <Col>
                            <CardImages
                                    imagen={Mares}
                                    titulo={"Liderados por la Juventud"}
                                    descripcion={"Muchas de estas marchas se inspiran en el movimiento Fridays for Future, iniciado por la activista sueca Greta Thunberg, que consiste en hacer huelgas escolares todos los viernes para reclamar acción climática. Los jóvenes son los más conscientes de que el cambio climático afectará su futuro y el de las generaciones venideras, y por eso se movilizan para defender sus derechos."}
                                    />
                        </Col>

                        <Col>
                            <CardImages
                                        imagen={SavePlanet}
                                        titulo={"Creativos"}
                                        descripcion={"Estas marchas se caracterizan por el uso de pancartas, carteles, eslóganes, cánticos, disfraces y otras formas de expresión artística y cultural para transmitir sus mensajes y demandas. Algunos de los lemas más populares son: No hay planeta B, El mundo despertó ante la emergencia climática, Queremos un cambio de sistema, no un cambio climático, entre otros."}
                                        />
                        </Col>

                        <Col>
                            <CardImages
                                        imagen={Future}
                                        titulo={"Pacíficos y No violentos"}
                                        descripcion={"Estas marchas se basan en el respeto, la tolerancia y la convivencia, y no buscan generar disturbios ni enfrentamientos con las autoridades o con otros grupos. Su objetivo es sensibilizar, informar y presionar a los responsables políticos y económicos para que actúen con responsabilidad y coherencia frente al cambio climático."}
                                        />
                        </Col>
                    </Row>
                    <Row>
                        <FraseFragment
                            texto={'"El cambio climático es una realidad que nos afecta a todos. No podemos ignorarlo ni negarlo. Tenemos que actuar con urgencia y responsabilidad para evitar las peores consecuencias" - Leonardo DiCaprio, actor y activista estadounidense.'}
                            />
                    </Row>
                    <Row>
                        <Image src={Mundo} fluid />
                    </Row>
                    <Row>
                        <FraseFragment
                            texto={'"Tenemos una única misión: proteger y entregar el planeta a la próxima generación" - François Holland, ex presidente de Francia.'}
                            />
                    </Row>
                    <Row>
                        <Form>
                            <h1>Conviértete en Voluntario</h1><br/>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Introduzca su nombre" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Introduzca su apellido" />
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Introduzca su correo electrónico" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control placeholder="Instroduzca su dirección" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Continente</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Elegir...</option>
                                    <option>Asia</option>
                                    <option>África</option>
                                    <option>Ámerica del Norte</option>
                                    <option>Ámerica del Sur</option>
                                    <option>Ántartida</option>
                                    <option>Europa</option>
                                    <option>Oceanía</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>País</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Estoy seguro" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Confirmar
                            </Button>
                        </Form>
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
      );
    }

export default Home;







