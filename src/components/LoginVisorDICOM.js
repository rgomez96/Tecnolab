import React from "react";
import Dropzone from "react-dropzone";
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

  actualizarState(acceptedFiles) {
    this.setState({ Files: acceptedFiles });
    this.setState({ leido: true });
    console.log(this.state.Files);
    console.log(this.state.leido);
    /*this.state.Files.map(file => (
      console.log(file.path)
    ))*/
  }

  render() {
    return (
      <div>
        {this.state.datos.loggedIn ? (
          <div>
            {this.state.leido ? (
              <div>
                <Radio archivo={this.state.Files} />
              </div>
            ) : (
              <div>
                <h1>
                  No se puede utilizar el visor hasta que subas un archivo.
                </h1>
                <Dropzone
                  multiple={false}
                  onDrop={async ([file]) => {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                      const contents = e.target.result;
                      this.setState({ Files: contents });
                      this.setState({ leido: true });
                    };
                    reader.readAsDataURL(file);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
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
