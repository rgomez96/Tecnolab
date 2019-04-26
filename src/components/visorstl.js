import React, { Component } from "react";
import "./../App.css";
import prueba from "./Assets/prueba.stl"

var THREE = require("three");
var STLLoader = require("three-stl-loader")(THREE);

const OrbitControls = require("three-orbit-controls")(THREE);
class STL extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    //this.addCube = this.addCube.bind(this);
    this.initializeCamera = this.initializeCamera.bind(this);
    this.initializeOrbits = this.initializeOrbits.bind(this);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    this.initializeOrbits();
    this.initializeCamera();

    /* Añade los ejes de coordenadas */
    //var axesHelper = new THREE.AxesHelper(500);
    //this.scene.add(axesHelper);

    /* Cambia el color de fondo */
    this.scene.background = new THREE.Color(0x1d1d1d);
    //this.scene.fog = new THREE.Fog(0xcce0ff, 500, 10000);

    /* Genera la iluminación de la escena */
    /* Luz blanca de ambiente */
    var ambientLight = new THREE.AmbientLight(0x696969);
    this.scene.add(ambientLight);
    //this.scene.add(light);

    //var light = new THREE.HemisphereLight( 0xcccccc, 0x777777, 1 );
    var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    this.scene.add(light);


    //Método para cargar el archivo STL
    var loader = new STLLoader();

    loader.load(prueba, object => {
      this.object = object;
      var material = new THREE.MeshNormalMaterial();
      var mesh = new THREE.Mesh(object, material);
      var bbox = new THREE.Box3().setFromObject( mesh );
  
      mesh.position.set(-bbox.getCenter().x,-bbox.getCenter().y,-bbox.getCenter().z);
      this.scene.add(bbox);
      this.scene.add(mesh);
    });

    this.animate();
  }

  /* componentWillUnmount es importante por que si no se eliminan los datos
   se quedan ahí y se desperdicia memoria */
  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    this.mount.removeChild(this.renderer.domElement);
  }

  /* Inicializa los controles de la cámara */
  initializeOrbits() {
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = 0.8;
  }
  initializeCamera() {
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 250;
  }
  animate() {
    this.frameId = window.requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }
  addCube(cube) {
    this.scene.add(cube);
  }
  render() {
    return (
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
export default STL;
