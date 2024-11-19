import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { TopCategoriesData } from '@/app/api/data/TopCategoriesData';


export const TopCategories = () => {
  const [hoveredDot, setHoveredDot] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
        className={`custom-dot rounded-full w-1 h-1 border border-pink-500 m-5 ${hoveredDot === i ? 'w-2 h-2 bg-pink-500' : ''}`}
        onMouseEnter={() => setHoveredDot(i)}
        onMouseLeave={() => setHoveredDot(null)}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="flex p-24 ">
        <Slider {...settings} className='w-full'>
          {TopCategoriesData.map((category, index) => (
            <div  key={index} className='w-full flex items-center justify-center text-center cursor-pointer font-josefin m-auto'>
            <div
              className={`w-44 h-44 rounded-full flex flex-col justify-center items-center  bg-gray-50  m-auto ${
                selectedProduct === category ? 'border-l-8 border-blue-500' : ''
              }`}
              onClick={() => handleProductClick(category)}
            >
                <Image 
                  src={category.image} 
                  alt={category.title} 
                  width={100} 
                  height={100} 
                  className="object-contain" 
                />
                <button className='w-20 h-7 text-white text-xs bg-green-500 rounded-sm'>view shop</button>
             </div>
             <h5 className="text-sm font-bold text-blue-900 mt-2">{category.title}</h5>
              <p className="text-red-600 font-bold">${category.price}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className=" flex items-center justify-center flex-col font-josefin bg-center bg-no-repeat w-auto h-80 mb-6 bg-[url('/assets/TopCategories/background.jpg')]">
        <h1 className=' text-blue-900 text-2xl font-bold'>
        Get latest update by subscribe on our Newsletter
        </h1>
        <button className=" text-white bg-pink-500 w-40 h-12">Shop now</button>
      </div>
    </div>
  );
};

export default TopCategories;