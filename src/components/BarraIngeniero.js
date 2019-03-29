import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class BarraIngeniero extends React.Component {
  render() {
    return (

      <div>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">Tecnolab</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/nuevasol">Nueva Solicitud</Nav.Link>
      <Nav.Link href="/listapendientes">Actividad Pendiente</Nav.Link>
      <Nav.Link href="/encurso">Casos en Curso</Nav.Link>
      <Nav.Link href="/listados">Listados</Nav.Link>
      <Nav.Link href="/ingenieria">Ingenieria</Nav.Link>
    </Nav>
    <Nav className="justify-content-end">
    <Nav.Item>
      <Nav.Link href="/login">Bienvenido</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/login">Salir</Nav.Link>
    </Nav.Item>
  </Nav>
  </Navbar>
      </div>
    );
  }
}

export default BarraIngeniero;