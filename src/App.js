import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Barra";
//import BarraIngeniero from './components/BarraIngeniero';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Galeria from "./components/Galeria";
import Ilustraciones from "./components/Ilustraciones";
import Login from "./components/Login";
import Loginvisor from "./components/Loginvisor";
import LoginvisorSTL from "./components/LoginvisorSTL"
import LoginVisorDICOM from "./components/LoginVisorDICOM"
import Profile from './components/profile';

//           <Route path="/logout" component={Logout} />

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/ilustraciones" component={Ilustraciones} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/login" component={Login} />
          <Route path="/visor" component={Loginvisor} />
          <Route path="/visorstl" component={LoginvisorSTL} />
          <Route path="/profile" component={Profile} />
          <Route path="/DICOM" component={LoginVisorDICOM} />
        </div>
    );
  }
}

export default App;
