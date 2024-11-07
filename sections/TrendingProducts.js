import React from 'react';
import Image from 'next/image';
import { TrendingProductsData, discountData, trendingDiscountData } from '@/app/api/data/TrendingProductsData';


export const TrendingProducts = () => {
  return (
    <div>
        <div className="flex  flex-col items-center justify-center">
        <h1 className='font-bold font-serif text-2xl text-blue-900'>Trending Products</h1>
        <div className="flex justify-center flex-col md:flex-row items-center py-14">
            {TrendingProductsData.map((product, index) => (
            <div key={index} className="w-full flex justify-start items-center flex-col m-0 p-2 md:pl-8">
            <Image src={product.image} alt={product.title} className="w-48 h-48 object-contain mb-4 md:mb-0 md:mr-4" />
            <div className="flex flex-col items-start">
                <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                <div className="flex items-center space-x-2">
                <p className="text-red-600 font-bold">{product.discountedPrice}</p>
                <p className="text-gray-400 line-through">{product.price}</p>
                </div>
            </div>
            </div>
        ))}
        </div>
        </div>
        <div className=" py-15 flex items-center justify-center flex-col md:flex-row">
        <div className="flex relative flex-col items-start justify-center md:p-5 md:flex-row ">
            {discountData.map((discount, index) => (
          <div key={index} className="py-15 flex items-center justify-center md:m-4">
            <div className="flex relative flex-col bg-pink-100 w-80 h-56 border-black border items-start justify-center p-5 my-5">
              <h1 className='font-extrabold -mt-24 text-blue-900 font-josefin'>{discount.discount}</h1>
              <button className='bg-none text-red-800'>Shop Now</button>
              <div className="absolute top-10 right-0 p-3 w-42 h-48 rounded-full flex items-center justify-center">
                <Image src={discount.image} alt="Discount Image" width={180} height={120} />
              </div>
            </div>
          </div>
        ))}
        </div>
            <div className="flex flex-wrap justify-center items-center flex-col my-4">
            {trendingDiscountData.map((product, index) => (
            <div key={index} className="py-15 flex items-center justify-center md:m-4">
                <div className="flex relative flex-ro items-start justify-center">
                <Image src={product.image} alt={product.title} className="w-14 h-14 bg-slate-100 object-contain mb-4 md:mb-0 md:mr-4" />
                <div className="flex flex-col items-start pl-4">
                    <h4 className=" font-bold mb-2">{product.title}</h4>
                    <p className="text-red-600 font-bold">{product.discountedPrice}</p>
                </div>
                </div>
            </div>
            ))}

            </div>
        </div>
    </div>
  )
}
