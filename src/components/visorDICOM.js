import React, { Component } from "react";
import "./../App.css";
import * as THREE from "three";
import { stackHelperFactory } from "ami.js";
import * as dat from "dat.gui";

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
    //this.camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000); //Crea la cámara
    this.camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / -2,
      height / 2,
      0.1,
      1000
    );
    //this.camera = new THREE.PerspectiveCamera(width/-2,width/2,height/-2,height/2,0.1,1000)
    this.initializeCamera();

    /* Esta vez NO se crean los controles orbitales */
    //this.controls = new OrbitControls(this.camera, this.renderer.domElement); // Crea los controles de la cámara
    //this.initializeOrbits();

    /* Añade los ejes de coordenadas */
    //var coordenadas = new THREE.AxesHelper(50000);
    //this.scene.add(coordenadas);


    var loader = new AMI.VolumeLoader();
    loader
      .load(this.props.archivo)
      .then(() => {
        const series = loader.data[0].mergeSeries(loader.data);
        const stack = series[0].stack[0];
        loader.free();
        const stackHelper = new StackHelper(stack);
        stackHelper.index = 0;
        stackHelper.bbox.visible = false; // Comentar esta linea (o cambiar a True) para ver la bounding box.
        stackHelper.bbox.color = 0xff0000;
        stackHelper.border.color = 0x000000; // Bordes negros para que no se vean.
        this.scene.add(stackHelper); // Añade el DICOM a la escena.

        /**
         * Mover el fichero al centro provoca problemas, es mejor mover la cámara para ver el fichero.
         * Calcula la distancia a la que necesita estar la cámara en el eje Z para que el DICOM
         * se vea siempre dentro de la pantalla y con un buen tamaño.
         */

        /* Obtiene el centro de la bounding box para posicionar la cámara */
        const centerLPS = stackHelper.stack.worldCenter();

        /* devuelve un vector con las dimensiones del mundo (max x, min x, max y, min y, max z, min z).
         Lo usaré para obtener el nuevo ancho y alto de la cámara ortográfica. */

        const worldbb = stack.worldBoundingBox();

        const Dimensiones = new THREE.Vector3(
          worldbb[1] - worldbb[0],
          worldbb[3] - worldbb[2],
          worldbb[5] - worldbb[4]
        );

        console.log("Ancho del archivo: " + Dimensiones.x);
        console.log("Alto del archivo: " + Dimensiones.y);
        console.log("Largo del archivo: " + Dimensiones.z);

        /* Utiliza el ancho y largo del archivo para determinar los parámetros de la cámara. */

        this.camera.left = (Dimensiones.x * 1.3) / -2;
        this.camera.right = (Dimensiones.x * 1.3) / 2;
        this.camera.top = (Dimensiones.y * 1.2) / -2;
        this.camera.bottom = (Dimensiones.y * 1.2) / 2;

        /* Cuando se actualizan los parámetros de la cámara hay que llamar a esta función. */
        this.camera.updateProjectionMatrix();

        console.log("Left: " + this.camera.left);
        console.log("Right: " + this.camera.right);
        console.log("Top: " + this.camera.top);
        console.log("Bottom: " + this.camera.bottom);

        //console.log(stackHelper.dimensionsIJK());
        //stackHelper.bbox.setSize(width-20,height-20);

        this.camera.position.x = centerLPS.x;
        this.camera.position.y = centerLPS.y;
        this.camera.position.z = Dimensiones.z + 10;

        this.gui(stackHelper);
      })
      .catch(error => {
        window.console.log("oops... something went wrong...");
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
    this.camera.position.z = 0;
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

  gui = stackHelper => {
    const gui = new dat.GUI({ name: "Move" });
    gui.domElement.id = "gui";
    //var stack = gui.addFolder('Stack');
    gui.add(stackHelper, "index", 0, stackHelper.stack.dimensionsIJK.z - 1);
  };

  render() {
    return (
      <div
        id="boardCanvas"
        style={{ width: "80em", height: "45em" }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default Radio;
