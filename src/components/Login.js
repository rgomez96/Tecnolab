import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./../App.css";



class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      loggedOn:false
    }
  }
  handleSubmit = event => {
    console.log("Enviando");
    this.setState({loggedOn:true})
    console.log("Login: " + this.state.loggedOn)
  }

  handleChangeUsuario = event => {
    this.setState({ usuario: event.target.value });
    console.log("usuario: " + this.state.usuario);
  }
  
  render() {
    return (
      <div className="containerlogin">
        <h1>Login</h1>
        <p> Ingresa con tu nombre de usuario y contraseña </p>

        <Form method="POST" action="/login" onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="formBasicUser">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control name="username" type="text" placeholder="Nombre de usuario..." onChange={this.handleChangeUsuario.bind(this)} />

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
          >
            Enviar
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
