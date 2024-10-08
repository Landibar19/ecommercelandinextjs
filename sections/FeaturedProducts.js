import React, { useState } from 'react';
import { FeaturedProductsData } from '../app/api/data/FeaturedProductsData';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredDot, setHoveredDot] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: dots => (
      <ul className="custom-dots"> {dots.slice(0, 4)} </ul>
    ),
    customPaging: (i) => (
      <div
        className={`custom-dot w-5 h-1 bg-pink-600 m-5 ${hoveredDot === i ? 'w-7 h-2' : ''}`}
        onMouseEnter={() => setHoveredDot(i)}
        onMouseLeave={() => setHoveredDot(null)}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-2">
      <div className='flex justify-center items-center'>
        <p className='font-serif font-bold text-2xl py-2' style={{color: 'rgb(26, 11, 91)'}}>Featured Products</p>
      </div>
      {FeaturedProductsData && FeaturedProductsData.length > 0 ? (
        <Slider {...settings}>
          {FeaturedProductsData.map((product, index) => (
            <div key={index} className="px-2 py-5">
              <div
                className={`border rounded-2xl shadow-lg max-w-xs mx-auto flex flex-col items-center transition-transform duration-300 ${
                  activeIndex === index ? 'border-4 border-blue-900 transform scale-105' : 'border'
                }`}
                style={{ backgroundColor: 'rgb(242, 240, 248)' }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <Image src={product.image} alt={product.title} className="w-full h-48 object-contain p-3" />
                <div className='flex flex-col justify-center items-left text-justify p-4'>
                  <h2 className="text-xl font-bold mt-2 text-pink-600 transition-transform duration-300 hover:scale-105">{product.title}</h2>
                  <p className="text-gray-600 transition-transform duration-300 hover:scale-105">Code: {product.code}</p>
                  <p className="text-gray-800 font-semibold transition-transform duration-300 hover:scale-105">Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>No featured products available.</p>
      )}
    </div>
  );
};

export default FeaturedProducts;