import React from 'react';
import STL from './visorstl'


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
            <STL />
        ) : (
            <h1> Necesita estar conectado para utilizar el visor STL. </h1>
        )}
      </div>
    );
  }
}

export default Loginvisor;
