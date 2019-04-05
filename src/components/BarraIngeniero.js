import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import './../App.css';


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
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Listados
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Pendientes Radiología</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Pendientes Medicina</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Pendientes Modelo 3D</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Pendientes Imprimir 3D</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Listar Planificación Imp</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Solicitudes Canceladas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Solicitudes Finalizadas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Listar Segmentación</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Ingeniería
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Planificar Impresión</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Recuperar cancelada</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Modificar Ficheros</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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