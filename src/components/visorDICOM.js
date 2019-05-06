import React, { Component } from "react";
import "./../App.css";

var THREE = require("three");
//var AMI = require("ami.js");

class Radio extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.initializeCamera = this.initializeCamera.bind(this);
  }

  componentDidMount() {
    /* Ancho y alto */
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    /* Crea la escena */
    this.scene = new THREE.Scene();

    /* Renderer */
    this.renderer = new THREE.WebGLRenderer({ antialias: true }); // El renderer muestra la escena por pantalla
    this.renderer.setSize(width, height); //necesario para que la escena tenga el tamaño que se le pasa al crearla en el return
    this.mount.appendChild(this.renderer.domElement);

    /* Cámara. Su posición inicial se determina en el método initializeCamera() */
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); //Crea la cámara
    this.initializeCamera();

    /* Esta vez NO se crean los controles orbitales */

    /* Añade los ejes de coordenadas */
    var coordenadas = new THREE.AxesHelper( 500 );
    this.scene.add( coordenadas );

    //var loader = new AMI.VolumeLoader();




    /* Pone en marcha la escena*/
    this.animate();
  }

  /* componentWillUnmount es importante por que si no se eliminan los datos
   se quedan ahí y se desperdicia memoria */
  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    this.mount.removeChild(this.renderer.domElement);
  }

  /* Inicializa los controles de la cámara */
  initializeCamera() {
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 250;
  }
  animate() {
    this.frameId = window.requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      /*<div>
          <div id="viewer">
          <div id="orientation">
          <div id="top" class="direction"></div>
          <div id="bottom" class="direction"></div>
          <div id="left" class="direction"></div>
          <div id="right" class="direction"></div>
          </div>
          <div id="r3d"></div>
          </div>
      </div>*/
      <div>
      <div
        id="boardCanvas"
        style={{ width: "100%", height: "45em" }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    </div>
    );
  }
}
export default Radio;
