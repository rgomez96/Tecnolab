import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../App.css';

import Galeria1 from './Assets/galeria1.jpg';
import Galeria2 from './Assets/galeria2.jpg';
import Galeria3 from './Assets/galeria3.jpg';
import Galeria4 from './Assets/galeria4.jpg';


class Galeria extends React.Component {
  render() {
    return (
      <Carousel
        interval={null}
      >
        <Carousel.Item>
          <img className="image" src={Galeria1} alt="imagen 1 de la galería" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Galeria2} alt="imagen 1 de la galería" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Galeria3} alt="imagen 1 de la galería" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Galeria4} alt="imagen 1 de la galería" />
        </Carousel.Item>

      </Carousel>
    );
  }
}

export default Galeria;
