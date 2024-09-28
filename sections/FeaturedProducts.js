import React, { useState } from 'react';
import { FeaturedProductsData } from '../data/FeaturedProductsData';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: dots => (
      <ul className="custom-dots"> {dots.slice(0, 4)} </ul>
    ),
    customPaging: (i) => (
      <div className="custom-dot w-5 m-3 h-1 mx-1 bg-pink-600"></div>
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
    <div className="container mx-auto px-4">
      <div className='flex justify-center items-center'>
        <p className='font-serif font-bold text-2xl p-4' style={{color: 'rgb(26, 11, 91)'}}>Featured Products</p>
      </div>
      {FeaturedProductsData && FeaturedProductsData.length > 0 ? (
        <Slider {...settings}>
          {FeaturedProductsData.map((product, index) => (
            <div key={index} className="p-4">
              <div
                className={`border rounded-2xl shadow-lg max-w-xs mx-auto flex flex-col items-center transition-transform duration-300 ${
                  activeIndex === index ? 'border-4 border-blue-900 transform scale-105' : 'border'
                }`}
                style={{ backgroundColor: 'rgb(242, 240, 248)' }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <Image src={product.image} alt={product.title} className="w-full h-48 object-contain" />
                <div className='flex flex-col justify-center items-center text-justify'>
                  <h2 className="text-xl font-bold mt-2 text-pink-600 p-1 transition-transform duration-300 hover:scale-105">{product.title}</h2>
                  <p className="text-gray-600 p-1 transition-transform duration-300 hover:scale-105">Code: {product.code}</p>
                  <p className="text-gray-800 font-semibold p-1 transition-transform duration-300 hover:scale-105">Price: ${product.price}</p>
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