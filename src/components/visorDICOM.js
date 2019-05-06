import React, { Component } from "react";
import "./../App.css";
import * as THREE from "three";
import { stackHelperFactory } from "ami.js";
import archivo from "./Assets/image.dcm";
import archivodos from "./Assets/bmode.dcm";
import archivotres from "./Assets/pruebatres.dcm";

const StackHelper = stackHelperFactory(THREE);


var AMI = require("ami.js");
//const OrbitControls = require("three-orbit-controls")(THREE);

class Radio extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.initializeCamera = this.initializeCamera.bind(this);
    //this.initializeOrbits = this.initializeOrbits.bind(this);
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
    this.camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000); //Crea la cámara
    //this.camera = new THREE.PerspectiveCamera(width/-2,width/2,height/-2,height/2,0.1,1000)
    this.initializeCamera();

    /* Esta vez NO se crean los controles orbitales */
    //this.controls = new OrbitControls(this.camera, this.renderer.domElement); // Crea los controles de la cámara
    //this.initializeOrbits();

    /* Añade los ejes de coordenadas */
    //var coordenadas = new THREE.AxesHelper(500);
    //this.scene.add(coordenadas);

    var loader = new AMI.VolumeLoader();
    loader.load(archivotres).then(() => {
      const series = loader.data[0].mergeSeries(loader.data);
      const stack = series[0].stack[0];
      loader.free();
      const stackHelper = new StackHelper(stack);

      stackHelper.bbox.visible=false; // Comentar para ver la bounding box.
      stackHelper.bbox.color = 0xFF0000;
      stackHelper.border.visible=false;
      console.log(stackHelper.stack.worldCenter());
      this.scene.add(stackHelper);

      const centerLPS = stackHelper.stack.worldCenter();

        //console.log(centerLPS.y);
        //console.log(Math.tan(45*Math.PI/180));
        //console.log(centerLPS.y/Math.tan(45*Math.PI/180));
        //console.log(centerLPS.y/Math.tan(45*Math.PI/180));

        /*en ocasiones puede parecer que la bounding box está fuera de la cámara, pero esto se debe
          a que la cámara utiliza plano en perspectiva, la imagen siempre se verá bien. */
        var posZ=centerLPS.y/Math.tan(45*Math.PI/180)+centerLPS.z+20;

        console.log(posZ);
        this.camera.position.x= centerLPS.x;
        this.camera.position.y= centerLPS.y;
        this.camera.position.z= posZ;
        this.camera.updateProjectionMatrix();

    })
    .catch(error => {
      window.console.log('oops... something went wrong...');
      window.console.log(error);
    });

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
    this.camera.position.z = 500;
  }
  /*initializeOrbits() {
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = 0.8;
  }*/
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
