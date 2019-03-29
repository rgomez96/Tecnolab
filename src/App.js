import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Barra'
import BarraIngeniero from './components/BarraIngeniero';
import NuevaSol from './components/NuevaSol';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Galeria from './components/Galeria'
import Ilustraciones from './components/Ilustraciones'
import Login from './components/Login'
import ListaPendientes from './components/ListaPendientes'
import Encurso from './components/Encurso'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <BarraIngeniero />
        <Route exact path="/" component={Home}/>
        <Route path="/ilustraciones" component={Ilustraciones}/>
        <Route path="/galeria" component={Galeria}/>
        <Route path="/login" component={Login} />
        <Route path="/nuevasol" component={NuevaSol} />
        <Route path="/listapendientes" component={ListaPendientes} />
        <Route path="/encurso" component={Encurso} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
