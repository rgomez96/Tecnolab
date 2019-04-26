import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './../App.css';

import Img from './Assets/artrosis1.png';
import Img2 from './Assets/artrosis2.png';
import Img3 from './Assets/artrosis3.png';
import Img4 from './Assets/artrosis4.png';
import Img5 from './Assets/artrosis5.png';
import Img7 from './Assets/artrosis7.png';
import Img8 from './Assets/artrosis8.png';
import Img9 from './Assets/artrosis6.png';
import Img10 from './Assets/columna_vertebral.png';
import Img11 from './Assets/columna_lumbar.png';
import Img12 from './Assets/vertebra_lumbar.png';
import Img13 from './Assets/torax1.jpg';

class Ilustraciones extends React.Component {
  render() {
    return (
      <Carousel
        interval={null}
        indicators={false}>
        <Carousel.Item>
          <img className="image" src={Img} alt="Artrosis de cadera estadio 1" />
          <Carousel.Caption>
            <h3> Artrosis Cadera estadio 1 </h3>
            <p>Aparición de artritis en la cadera</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img2} alt="Artrosis de cadera estadio 2"/>
          <Carousel.Caption>
            <h3> Artrosis Cadera estadio 2 </h3>
            <p>Aparición de artritis en la cadera</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img3} alt="Artrosis de cadera estadio 3"/>
          <Carousel.Caption>
            <h3> Artrosis Cadera estadio 3 </h3>
            <p>Aparición de artritis en la cadera</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img4} alt="Artrosis de cadera estadio 4"/>
          <Carousel.Caption>
            <h3> Artrosis Cadera estadio 4 </h3>
            <p>Aparición de artritis en la cadera</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img5} alt="Artrosis en la rodilla."/>
          <Carousel.Caption>
            <h3> Artrosis Rodilla </h3>
            <p>Aparición de artritis en la rodilla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img7} alt="Artrosis Rodilla Estadio 1 y 2" />
          <Carousel.Caption>
            <h3> Artrosis Rodilla Estadio 1 y 2 </h3>
            <p>Aparición de artritis en la rodilla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img8} alt="Artrosis en la rodilla estadio 3 y 4"/>
          <Carousel.Caption>
            <h3> Artrosis Rodilla Estadio 3 y 4</h3>
            <p>Aparición de artritis en la rodilla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img9} alt="Artrosis en la rodilla:prótesis"/>
          <Carousel.Caption>
            <h3> Artrosis Rodilla Prótesis</h3>
            <p>Aparición de artritis en la rodilla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img10} alt="Columna Vertebral" />
          <Carousel.Caption>
            <h3> Columna Vertebral </h3>
            <p>Columna</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img11} alt="Columna Lumbar"/>
          <Carousel.Caption>
            <h3> Columna Lumbar </h3>
            <p>Anatomía</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img12} alt="Vértebra Lumbar" />
          <Carousel.Caption>
            <h3> Vértebra Lumbar </h3>
            <p>Anatomía</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={Img13} alt="Tórax"/>
          <Carousel.Caption>
            <h3> Tórax </h3>
            <p>Anatomía</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Ilustraciones;
