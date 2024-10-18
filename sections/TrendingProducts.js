import React from 'react';
import { TrendingProductData } from '../app/api/data/TrendingProductData';
import Image from 'next/image';
import '/app/globals.css';
const TrendingProducts = () => {
  return (
    <div className='flex justify-evenly items-center flex-col' style={{backgroundColor: 'rgb(241, 240, 255)'}}>
      <h1 className="text-4xl font-bold m-4 flex items-center justify-center font-serif" style={{color: 'rgb(26, 11, 91)'}}>Trending Products</h1>
      {TrendingProductData.map((product, index) => (
        <div key={index} className='w-full flex justify-start  items-center flex-col md:flex-row m-0 p-5 md:pl-36'>
          <div className='blob' style={{ backgroundColor: 'rgb(245, 225, 252)', margin: '0 2px' }}>
            <Image src={product.image} alt="Trending Product" width={300} height={300} />
          </div>
          <div className='py-1 px-1 text-lg'>
            <ul className="list-disc list-inside">
              <li className='text-xs font-inter py-0.5'>
                <span className='text-red-500 pr-1 text-2xl'>• </span>{product.description}
              </li>
              <li className='text-xs font-inter py-0.5'>
                <span className='text-blue-500 pr-1 text-2xl'>• </span>{product.description2}
              </li>
              <li className='text-xs font-inter py-0.5'>
                <span className='text-green-500 pr-1 text-2xl'>• </span>{product.description3}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingProducts;