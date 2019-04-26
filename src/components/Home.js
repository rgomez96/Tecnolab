import React from 'react';
import imgtecnolab from './Assets/tecnolab.jpg'
import './../App.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={imgtecnolab} width="100%" alt="Se encuentra usted en un entorno de pruebas"/>
        <br/><br/>
        <h1> Se encuentra usted en un entorno de pruebas. </h1>
      </div>
    );
  }
}

export default Home;
