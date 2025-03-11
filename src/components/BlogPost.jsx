import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const BlogPost = ({ title, content, photos }) => {
  const settings = {
    dots: true,
    infinite: true,
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
      </div>
    </div>
  );
};

export default BlogPost;
