import React, { Component } from "react";
import "./../App.css";
import lego from "./Assets/lego.obj";
import legomtl from "./Assets/lego.mtl";
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

    var centro = new THREE.Vector3( 0, 0, 0 );

    /* Añade los ejes de coordenadas */
    var axesHelper = new THREE.AxesHelper( 500 );
    this.scene.add( axesHelper );

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

    /* Conjunto de luces direccionales que iluminan la escena
       NO SE USAN                                           

    var lights = [];
    lights[0] = new THREE.DirectionalLight( 0xffffff, 0.5 );
    lights[0].position.set( 5, 0, 0 );
    lights[1] = new THREE.DirectionalLight( 0xffffff, 0.5 );
    lights[1].position.set( 0, 5, 0 );
    lights[2] = new THREE.DirectionalLight( 0xffffff, 0.5 );
    lights[2].position.set( 0, 0, 5 );
    this.scene.add( lights[0] );
    this.scene.add( lights[1] );
    this.scene.add( lights[2] );                          */

    /* Estas dos lineas se utilizaban para generar un cubo de prueba*/
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });

    const mtlLoader = new MTLLoader();
    let onProgress = function(e) {
      console.log("rendering:" + e);
    };
    let onError = function(e) {
      console.log("error:" + e);
    };

    /* Lee el material y lo aplica al archivo OBJ que lee posteriormente */

    /*mtlLoader.load(legomtl, materials => {
        materials.preload();
        // OBJ Loader
        const objLoader = new THREE.OBJLoader();
        this.materials = materials;
        objLoader.setMaterials(materials);
        objLoader.load(lego, object => {
              this.object = object;
            this.scene.add(object);
        }, onProgress, onError);
    }, onProgress,onError);*/

    /* Lee el fichero y material y los inserta en la escena */


    /*mtlLoader.load(legomtl, materials => {
      materials.preload();
      const objLoader = new THREE.OBJLoader();
      this.materials = materials;
      objLoader.setMaterials(materials);
      objLoader.load(pelvis, object => {
        this.object = object;
        // Creo una bounding box y obtengo las coordenadas de su centro para mover el objeto al origen
        var bbox = new THREE.Box3().setFromObject( object );
        centro= bbox.getCenter();
        console.log(centro);

        //console.log(bbox.getCenter() );
        object.position.set(-bbox.getCenter().x,-bbox.getCenter().y,-bbox.getCenter().z);
        this.scene.add(object);
        this.scene.add(bbox);
      }, onProgress, onError);
  }, onProgress,onError);*/

    mtlLoader.load(legomtl, materials => {
        materials.preload();
        const objLoader = new THREE.OBJLoader();
        this.materials = materials;
        objLoader.setMaterials(materials);
        objLoader.load(pelvis, object => {
          this.object = object;
          // Creo una bounding box y obtengo las coordenadas de su centro para mover el objeto al origen
          var bbox = new THREE.Box3().setFromObject( object );
          centro= bbox.getCenter();
          console.log(centro);
  
          //console.log(bbox.getCenter() );
          object.position.set(-bbox.getCenter().x,-bbox.getCenter().y,-bbox.getCenter().z);
          this.scene.add(object);
          this.scene.add(bbox);
          objLoader.load(protesis, object => {
            this.object = object;
            var bboxprot = new THREE.Box3().setFromObject( object );
            //console.log(bbox.getCenter() );
            object.position.set(-bbox.getCenter().x,-bbox.getCenter().y,-bbox.getCenter().z);
            this.scene.add(object);
            this.scene.add(bboxprot);
          }, onProgress, onError);
        }, onProgress, onError);


    }, onProgress,onError);





    /*
    * Este método sólamente lee el archivo OBJ */


    /*var loader = new THREE.OBJLoader();
    loader.load(
      pelvis,
      object => {
        this.scene.add(object);
        console.log("intentando aniadir");
      },
      xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      error => {
        console.log("Error! ", error);
      }
    );*/


     //Crea un cubo en el origen
    var cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
    

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
export default Shape;
