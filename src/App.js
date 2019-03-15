import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Galeria from './components/Galeria'
import Ilustraciones from './components/Ilustraciones'
import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/ilustraciones" component={Ilustraciones}/>
        <Route path="/galeria" component={Galeria}/>
        <Route path="/login" component={Login} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
