import React, { Component } from 'react';
import { Carousel } from '3d-react-carousal';
import image1 from '../image/Carousel/image1.jpg';
import image2 from '../image/Carousel/image2.jpg';
import image3 from '../image/Carousel/image3.jpg';
import image4 from '../image/Carousel/image4.jpg';
import image5 from '../image/Carousel/image5.jpg';
import image6 from '../image/Carousel/image6.jpg';

class CarouselMain extends Component {
  slides = [
    <img src={image1} alt="1" />,
    <img src={image2} alt="2" />,
    <img src={image3} alt="3" />,
    <img src={image4} alt="4" />,
    <img src={image5} alt="5" />,
    <img src={image6} alt="6" />,
  ];
  render() {
    return (
      <div id="realisations">
        <Carousel
          slides={this.slides}
          autoplay={false}
          interval={3000}
        ></Carousel>
      </div>
    );
  }
}
export default CarouselMain;
