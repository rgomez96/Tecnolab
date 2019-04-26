import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Barra";
//import BarraIngeniero from './components/BarraIngeniero';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Galeria from "./components/Galeria";
import Ilustraciones from "./components/Ilustraciones";
import Login from "./components/Login";
import Shape from "./components/visor";
import STL from "./components/visorstl";




class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/ilustraciones" component={Ilustraciones} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/login" component={Login} />
          <Route path="/visor" component={Shape} />
          <Route path="/visorstl" component={STL} />
        </div>
    );
  }
}

export default App;
