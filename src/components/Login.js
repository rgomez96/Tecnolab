import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import passport from 'passport-ldapauth'

import './Login.css';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }





  handleChangeUsuario = event => {
    this.setState({ usuario: event.target.value });
    console.log("usuario: " + this.state.usuario);
  }

  handleChangeContraseña = event => {
    this.setState({ contraseña: event.target.value });
    console.log("contraseña:" + this.state.contraseña);
  }




  handleSubmit = event => {
  }

  render() {


    return (
      <div className="containerlogin">
        <h1>Login</h1>
        <p> Ingresa con tu nombre de usuario y contraseña </p>


        <Form method='POST' action='/login'>
          <Form.Group controlId="formBasicUser">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control name="username" type="text" placeholder="Nombre de usuario..." onChange={this.handleChangeUsuario.bind(this)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control name="pass" type="password" placeholder="Contraseña..." onChange={this.handleChangeContraseña.bind(this)} />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Enviar
  </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
