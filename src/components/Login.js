import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import passport from "passport-ldapauth";

import "./../App.css";

class Login extends React.Component {
  handleSubmit = event => {
    console.log("Enviando");
  }
  render() {
    return (
      <div className="containerlogin">
        <h1>Login</h1>
        <p> Ingresa con tu nombre de usuario y contraseña </p>

        <Form method="POST" action="/login">
          <Form.Group controlId="formBasicUser">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Nombre de usuario..."
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Contraseña..."
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={this.handleSubmit.bind(this)}
          >
            Enviar
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
