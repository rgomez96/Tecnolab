import React from 'react';
import imgtecnolab from './Assets/tecnolab.jpg'
import './Home.css'

class Home extends React.Component {
  render() {

    return (
      <div>
        <img src={imgtecnolab} width="100%"/>
        <br/><br/>
        <h1> Se encuentra usted en un entorno de pruebas. </h1>
      </div>
    );
  }
}

export default Home;