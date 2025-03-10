import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import beerone from '/beerone.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const img =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Budweiser_beer.jpg/640px-Budweiser_beer.jpg';

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="maincon">
        <div className="navibar">
          <h1>beer battle</h1>
          <div className="navibaroptions">
            <p>2025</p>
          </div>
        </div>
        <div className="content">
          <div className="postcontainer">
            <div className="photos">
              <Slider {...settings} className="sliderthing">
                <div className="imagebox">
                  <img src={img} alt="" width="300" />
                </div>
                <div className="imagebox">
                  <img src={img} alt="" width="300" />
                </div>
                <div className="imagebox">
                  <img src={img} alt="" width="300" />
                </div>
              </Slider>
            </div>
            <div class="badges">
              <div>badge1</div>
              <div>badge2</div>
            </div>
            <p>
              lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum
              lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum
              lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum
              lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum
              lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum
              lorem impsum lorem impsum lorem impsum lorem impsum{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
