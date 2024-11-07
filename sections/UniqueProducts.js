import React from 'react';
import { UniqueProductData } from '../app/api/data/UniqueProductData';
import Image from 'next/image';
import '/app/globals.css';
const UniqueProducts = () => {
  return (
    <div className='flex justify-evenly items-center flex-col' 
    style={{backgroundColor: 'rgb(241, 240, 255)'}}>
      {UniqueProductData.map((product, index) => (
        <div key={index} className='w-full flex justify-start  items-center flex-col md:flex-row m-0 p-5 md:pl-36'>
          <div className='blob' style={{ backgroundColor: 'rgb(245, 225, 252)', margin: '0 2px' }}>
            <Image src={product.image} alt="Trending Product" width={300} height={300} />
          </div>
          <div className='py-1 px-1 text-lg'>
          <h1 className="text-4xl font-bold m-4 flex items-center justify-center font-josefin w-2/3" 
            style={{color: 'rgb(26, 11, 91)'}}
            >
            Unique features Of latest & Trending Products 
         </h1>
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
          
            <div className='flex items-center text-center flex-col md:flex-row '>
            <button className='bg-pink-500 text-white font-josefin py-2 px-4 w-1/4 mt-4'>
            Add to Cart
            </button>
            <div className='flex flex-col items-start px-5 pt-5 justify-left font-josefin text-blue-900 font-bold'>
            <p> B&b italian sofa </p>
            <span>$32</span>
            </div> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniqueProducts;