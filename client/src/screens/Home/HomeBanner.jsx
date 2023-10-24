import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../../assets/Banner/banner1.png';
import Banner2 from '../../assets/Banner/banner2.mp4'

const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  return (
    <div className="image-slider container  mt-3 p-3 bg-secondary rounded-3" style={{width: '50%', height: 'auto'}}>
      <Slider {...settings}>
        <div>
          <img src={Banner1} style={{width: '100%'}}  className='className="mx-auto d-flex justify-content-center' alt="Image 1" />
        </div>
        <div>
          <video src={Banner2} loop='true' onPlay={true} style={{width: '100%'}}  className='className="mx-auto d-flex justify-content-center'  alt="Image 2" />
        </div>
        <div>
          <img src={Banner1} style={{width: '100%'}}  className='className="mx-auto d-flex justify-content-center'  alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
