import React from 'react';
import imgtecnolab from './Assets/tecnolab.jpg'
import './../App.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={imgtecnolab} width="100%" alt="Logo tecnolab"/>
        <br/><br/>
      </div>
    );
  }
}

export default Home;
