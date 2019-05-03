import React from 'react';
import Shape from "./visor";


/* Esta clase sirve para comprobar que el usuario está conectado antes de poder utilizar el visor */
class Loginvisor extends React.Component {
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
        <div>
        {this.state.datos.loggedIn ? (
            <Shape />
        ) : (
            <h1> Necesita estar conectado para utilizar el visor. </h1>
        )}
      </div>
    );
  }
}

export default Loginvisor;
