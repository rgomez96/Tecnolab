import React from "react";
import imgtecnolab from "./Assets/tecnolab.jpg";
import "./../App.css";

class Logout extends React.Component {
  componentDidMount() {
    fetch("/logout")
      .then(function(response) {
        return response;
      })
      .then(function(myJson) {
        console.log("logged out");
      });
  }
  render() {
    return (
      <div>
        <img
          src={imgtecnolab}
          width="100%"
          alt="Se encuentra usted en un entorno de pruebas"
        />
        <br />
        <br />
        <h1> Se encuentra usted en un entorno de pruebas de logout </h1>
      </div>
    );
  }
}

export default Logout;
