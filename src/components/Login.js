import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './Login.css';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      usuario:"",
      contraseña: ""
    };
  }

  handleChangeUsuario = event => {
    this.setState({usuario: event.target.value});
    console.log("usuario: " + this.state.usuario);
  }

  handleChangeContraseña = event => {
    this.setState({contraseña: event.target.value});
    console.log("contraseña:" + this.state.contraseña);
  }

  handleSubmit = event => {
    console.log(123)
  }

  render() {
    return (
      <div className="containerlogin">
          <h1>Login</h1>
          <p> Ingresa con tu nombre de usuario y contraseña </p>


       <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicUser">
    <Form.Label>Nombre de usuario</Form.Label>
    <Form.Control autoFocus type="text" placeholder="Nombre de usuario..." onChange={this.handleChangeUsuario.bind(this)} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Contraseña..." onChange={this.handleChangeContraseña.bind(this)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Enviar
  </Button>
</Form>
      </div>
    );
  }
}

export default Login;
