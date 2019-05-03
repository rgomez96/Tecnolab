import React from "react";
import "./../App.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: []
    };
  }

  componentDidMount() {
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

      <div>
      {this.state.datos.loggedIn ? (
      <div className="profile">
      <br />
      <h1>Datos personales:</h1>
      <br />
      <div className="casilla">
        <p className="tipodato">Nombre de usuario: </p>
        <p className="dato">{this.state.datos.usuario} </p>
      </div>
      <div className="casilla">
        <p className="tipodato">Nombre y apellidos:</p>
        <p className="dato">
          {this.state.datos.nombre} {this.state.datos.apellidos}{" "}
        </p>
      </div>
      <div className="casilla">
        <p className="tipodato">Correo: </p>
        <p className="dato">{this.state.datos.correo} </p>
      </div>
      <div className="casilla">
        <p className="tipodato">Teléfono: </p>
        <p className="dato">{this.state.datos.telefono} </p>
      </div>
      <div className="casilla">
        <p className="tipodato">Fax: </p>
        <p className="dato">{this.state.datos.fax} </p>
      </div>
    </div>
      ) : (
        <h1> Necesitas estar conectado para ver tus datos. </h1>
      )}
    </div>
    );
  }
}

export default Profile;
