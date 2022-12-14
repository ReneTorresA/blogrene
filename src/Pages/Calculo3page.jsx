import React, { useState } from "react";
import Footers from "../componentes/footer";
import Navbar from "../componentes/navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

import PlantillaCurso from "../componentes/plantillacursos";

function Calculo3page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const Calculo3info = {
    id: "0",
    ruta: "/cursos",
    titulo:
      "Calculo 3 - Apuntes de clase y ayudantías preparados por René Torres.",
    descripcion:
      "Difunde el contenido para que a alguien más le ayude. Si encuentras algún error en los ejercicios por favor comunícate conmigo al correo: rene.torres.a@usach.cl",
    profesor: "René Torres",
    duracion: "--",
    foto: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    alt: "Imagen de un pizarrón con ejercicios",
    nivel: "Hardcore",
    herramientas: ["Estudiar mucho!"],
    data: [
      {
        id: "1",
        name: "Ayudantía 1: Series de Fourier",
        link: "https://drive.google.com/file/d/1BH1TKW-cZAixMegqaYjwCpdPHrZyWQEr/view",
      },
    ],
    fecha: "",
    imagen: "https://i.postimg.cc/dttVG3ng/1.png",
  };

  return (
    <>
      <Navbar />
      <PlantillaCurso info={Calculo3info} />

      <div className="container col-lg-12">
        <div className="list-group">
          <>
            <Button variant="secondary btn-outline-light" onClick={handleShow2}>
              Bad bunny Neverita
            </Button>

            <Modal size="xl" centered show={show2} onHide={handleClose2}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Container>
                  <div className="container-fluid text-center">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item videos-modales"
                        src="https://www.youtube.com/embed/ARWg160eaX4"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary btn-outline-light"
                  onClick={handleClose2}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </>

          <>
            <Button variant="secondary btn-outline-light" onClick={handleShow}>
              Bad Bunny Neverita
            </Button>

            <Modal size="xl" centered show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <Container>
                  <div className="container-fluid text-center">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item videos-modales"
                        src="https://www.youtube.com/embed/ARWg160eaX4"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="btn-secondary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </>

          
        </div>
      </div>

      <Footers />
    </>
  );
}

export default Calculo3page;
