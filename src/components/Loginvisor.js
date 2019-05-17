import React from "react";
import Shape from "./visor";
import Dropzone from "react-dropzone";

/* Esta clase sirve para comprobar que el usuario está conectado antes de poder utilizar el visor */
class Loginvisor extends React.Component {
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
    var datos = [];

    return (
      <div>
        {this.state.datos.loggedIn ? (
          <div>
            {this.state.leido ? (
              <div>
                <p> po mu bien </p>
              </div>
            ) : (
              <div>
                <br />
                <h1>
                  No se puede utilizar el visor hasta que subas un archivo.
                </h1>
                <Dropzone
                  multiple={true}
                  onDrop={function(acceptedFiles) {
                    for (var i = 0; i < acceptedFiles.length; i++) {
                      var file = acceptedFiles[i];
                      console.log(file);
                      let reader = new FileReader();
                      reader.onload = e => {
                        const contents = e.target.result;
                        datos.push(contents);
                      };
                      reader.readAsDataURL(file);
                    }
                    console.log(datos);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>
                          Arrastra o haz click aquí para seleccionar uno o
                          varios archivos (deben ser OBJ).
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
            )}
          </div>
        ) : (
          <h1> Necesita estar conectado para utilizar el visor de OBJ. </h1>
        )}
      </div>
    );
  }
}

export default Loginvisor;
