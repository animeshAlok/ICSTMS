import React from 'react';
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Carosel = () => {
    return (
      <div>
        <Carousel className='main-slide' autoPlay='true' infiniteLoop='true'>
          <div>
              <img src={image1} height="620px" width="400px" alt=""/>
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src={image2} height="620px" width="400px" alt=""/>
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src={image2} height="620px" width="400px" alt=""/>
              <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    )
}

export default Carosel;