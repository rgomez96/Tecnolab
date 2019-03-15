import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class Barra extends React.Component {
  render() {
    return (

      <div>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">Tecnolab</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/ilustraciones">Ilustraciones</Nav.Link>
      <Nav.Link href="/galeria">Galería</Nav.Link>
    </Nav>
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/login">No está autenticado</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav.Item>
  </Nav>
  </Navbar>
      </div>
    );
  }
}

export default Barra;
