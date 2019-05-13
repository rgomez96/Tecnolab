import React from "react";
import Radio from "./visorDICOM";

/* Esta clase sirve para comprobar que el usuario está conectado antes de poder utilizar el visor */
class LoginVisorDICOM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      Files: [],
      leido: false
    };
  }

  componentWillMount() {
    fetch("/datosusuario")
      .then(userdata => userdata.json())
      .then(data => {
        this.setState({ datos: data });
      });
  }

  render() {
    return (
      <div>
        {this.state.datos.loggedIn ? (
          <div>
            {this.state.leido ? (
              <div>
                <Radio />
              </div>
            ) : (
              <h1>No se puede utilizar el visor hasta que subas un archivo.</h1>
            )}
          </div>
        ) : (
          <h1> Necesita estar conectado para utilizar el visor DICOM. </h1>
        )}
      </div>
    );
  }
}

export default LoginVisorDICOM;
