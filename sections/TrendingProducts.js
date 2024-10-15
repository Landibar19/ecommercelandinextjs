import React from 'react';
import { TrendingProductData } from '@/data/TrendingProductData';
import Image from 'next/image';
import '/app/globals.css';

export const TrendingProducts = () => {
  return (
    <div style={{ backgroundColor: 'rgb(241, 240, 255)' }}>
      {TrendingProductData.map((product, index) => (
        <div key={index} className='flex justify-center items-center flex-row m-0 p-0'>
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