import React from 'react';
import { TrendingProductData } from '@/data/TrendingProductData';
import Image from 'next/image';
import '/app/globals.css';

export const TrendingProducts = () => {
  return (
    <div style={{backgroundColor: 'rgb(241, 240, 255)' }}>
      {TrendingProductData.map((product, index) => (
        <div key={index} className='flex justify-center items-center flex-row'>
          <div  className='blob' style={{backgroundColor:'rgb(245, 225, 252)'}}>
            <Image src={product.image} alt="Trending Product" width={300} height={300} />
          </div>
          <div className='py-3 px-4 text-lg'>
            <ul className="list-disc list-inside">
              <ul className='text-xs font-inter py-2'>
                <span className='text-red-500 p-4 text-2xl'>• </span>{product.description}
              </ul>
              <ul className='text-xs font-inter py-2'>
                <span className='text-blue-500 p-4 text-2xl'>• </span>{product.description2}
              </ul>
              <ul className='text-xs font-inter py-2'>
                <span className='text-green-500 p-4 text-2xl'>• </span>{product.description3}
              </ul>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingProducts;