import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./../App.css";

class Barra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: []
    };
  }

  componentWillMount() {
    fetch("/datosusuario")
      .then(userdata => userdata.json())
      .then(data => {
        console.log(data);
        this.setState({ datos: data });
        console.log(this.state.datos);
      });
  }

  logout = event => {
    console.log("logout");
    fetch("/logout")
      .then(userdata => userdata.json())
      .then(data => {
        this.setState({ datos: data });
      });
  };

  render() {
    return (
      <div>
        {this.state.datos.loggedIn ? (
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
                <div className="bienvenido">
                  Bienvenido {this.state.datos.usuario}
                </div>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/profile">Datos personales</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/" onClick={this.logout.bind(this)}> Cerrar sesión </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        ) : (
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Tecnolab</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/ilustraciones">Ilustraciones</Nav.Link>
              <Nav.Link href="/galeria">Galería</Nav.Link>
              <Nav.Link href="/DICOM">Visor DICOM</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="/login">No está autenticado</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/login">Iniciar sesión</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        )}
      </div>
    );
  }
}

export default Barra;
