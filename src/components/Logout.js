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
        <br />
        <br />
        <h1> Se ha cerrado la sesion. </h1>
      </div>
    );
  }
}

export default Logout;
