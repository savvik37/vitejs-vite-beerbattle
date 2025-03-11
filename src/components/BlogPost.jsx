import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const BlogPost = ({ title, content, photos, r1, r2, r1name, r2name }) => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="blog-post">
      <div className="postcontainer">
        <div className="photos">
          <Slider {...settings} className="sliderthing">
            {photos.map((img, index) => (
              <div className="imagebox" key={index}>
                <img src={img} alt={`Photo ${index + 1}`} width="300" />
              </div>
            ))}
          </Slider>
        </div>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="ratingBox">
          <div className='button two'>
            <p>{r1name}</p>
            <p className='bolder'>{r1}</p>
          </div>
          <div className='button two'>
            <p>{r2name}</p>
            <p className='bolder'>{r2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
