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
      leido: false,
      error: false
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
                <Radio archivo={this.state.Files} />
              </div>
            ) : (
              <div>
                <br />
                <h1>
                  No se puede utilizar el visor hasta que subas un archivo.
                </h1>
                <Dropzone
                  multiple={false}
                  onDrop={async ([file]) => {
                    let extension=file.name.split('.').pop().toLowerCase();
                    console.log("formato: " + extension);
                    if (extension=="dcm") {
                      let reader = new FileReader();
                      reader.onload = (e) => {
                        const contents = e.target.result;
                        this.setState({ Files: contents });
                        this.setState({ leido: true });
                      };
                      reader.readAsDataURL(file);
                    } else {
                      this.setState({error:true});
                    }
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>
                          Arrastra o haz click aquí para seleccionar un archivo
                          (debe ser DICOM).
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
            )}
            {this.state.error ? (
              <div className="error">
                 Se ha producido el error, el fichero debe ser formato DICOM.
              </div>
            ) : (
              ''
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
