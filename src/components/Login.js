import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./../App.css";

class Login extends React.Component {
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

  render() {
    return (
      <div className="containerlogin">
        {this.state.datos.loggedIn ? (
          <h1>ya hay un usuario conectado </h1>
        ) : (
          <div>
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

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
