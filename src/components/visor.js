import React, { Component } from "react";
import "./../App.css";
import mtl from "./Assets/material.mtl";
import pelvis from "./Assets/pelvis.obj";
import protesis from "./Assets/protesis.obj";

var THREE = require("three");
var OBJLoader = require("three-obj-loader");
OBJLoader(THREE);
const MTLLoader = require("three-mtl-loader");
MTLLoader(THREE);

const OrbitControls = require("three-orbit-controls")(THREE);
class Shape extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.initializeCamera = this.initializeCamera.bind(this);
    this.initializeOrbits = this.initializeOrbits.bind(this);
  }

  componentDidMount() {
    /* Atributos necesarios para generar la escena*/
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene(); // Crea la escena
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); //Crea la cámara
    this.renderer = new THREE.WebGLRenderer({ antialias: true }); // El renderer muestra la escena por pantalla
    this.controls = new OrbitControls(this.camera, this.renderer.domElement); // Crea los controles de la cámara
    this.renderer.setSize(width, height); //necesario para que la escena tenga el tamaño que se le pasa al crearla en el return
    this.mount.appendChild(this.renderer.domElement);
    this.initializeOrbits();
    this.initializeCamera();

    /* Añade los ejes de coordenadas */
    //var coordenadas = new THREE.AxesHelper( 500 );
    //this.scene.add( coordenadas );

    /* Cambia el color de fondo */
    this.scene.background = new THREE.Color(0x1d1d1d);

    /* Cambia el color de fondo */
    this.scene.background = new THREE.Color(0x1d1d1d);

    /* Genera la iluminación de la escena , luz blanca de ambiente*/
    var ambientLight = new THREE.AmbientLight(0x696969);
    this.scene.add(ambientLight);

    /* Añade mas iluminacion a la escena, una luz con degradado que llega desde arriba y no produce sombras*/
    var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    this.scene.add(light);

    /* Lee el material y lo aplica los dos archivos OBJ que lee posteriormente */
    const mtlLoader = new MTLLoader();

    mtlLoader.load(mtl, materials => {
      materials.preload();
      const objLoader = new THREE.OBJLoader();
      this.materials = materials;
      objLoader.setMaterials(materials);
      objLoader.load(pelvis, object => {
        this.object = object;
        // Creo una bounding box y obtengo las coordenadas de su centro para mover el objeto al origen
        var bbox = new THREE.Box3().setFromObject(object);

        object.position.set(
          -bbox.getCenter().x,
          -bbox.getCenter().y,
          -bbox.getCenter().z
        );
        this.scene.add(object);
        objLoader.load(protesis, object => {
          //este objloader está dentro del anterior para poder usar el bbox anterior
          this.object = object;
          //desplazo el segundo objeto las mismas coordenadas que el principal para mantener la posicion relativa
          object.position.set(
            -bbox.getCenter().x,
            -bbox.getCenter().y,
            -bbox.getCenter().z
          );
          this.scene.add(object);
        });
      });
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
export default Shape;
