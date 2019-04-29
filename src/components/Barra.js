import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./../App.css";

const JsonTable = require('ts-react-json-table');


class Barra extends React.Component {
  constructor(props) {
    fetch('/datosusuario')
      .then(peticiones => peticiones.json())
      .then(datos => {
        //datatabla=_.filter(datatabla,{'Especialidad':"Traumatología"})
        this.setState({ datos })
        console.log(this.state.datos);
      })
    super(props);
    this.state = {
      datos: [],
      nombre:"Rafa"
    };
  }



  render() {
    console.log(this.state.datos.nombre);
    return (
      <div>
        <JsonTable rows={this.state.datos}></JsonTable>

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Tecnolab</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/ilustraciones">Ilustraciones</Nav.Link>
            <Nav.Link href="/galeria">Galería</Nav.Link>
            <Nav.Link href="/visor">Visor</Nav.Link>
            <Nav.Link href="/visorstl">Visor stl</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link href="/login">No está autenticado</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">
                Bienvenido {this.state.datos.usuario}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Barra;
