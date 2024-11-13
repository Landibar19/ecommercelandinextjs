import React, { useState, useEffect } from 'react';
import { discountItemData } from '@/app/api/data/DiscountItemData';
import Image from 'next/image';
import '/app/globals.css';

export const DiscountItem = () => {
  const [selectedProduct, setSelectedProduct] = useState(discountItemData[0]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Discount Items</h1>
      <div className="flex flex-col justify-center items-center">
        <div className=" flex flex-col">
          <ul className="flex">
            {discountItemData.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 text-sm font-josefin hover:text-pink-700 ${selectedProduct === item ? 'underline' : ''}`}
                onClick={() => handleProductClick(item)}
              >
                {item.product}
              </li>
            ))}
          </ul>
        </div>
        {selectedProduct && (
          <div className="w-3/4 flex flex-col md:flex-row">
            <div className=" md:w-2/3">
              <h1 className="font-bold font-josefin text-blue-900 text-xl py-3">20% Discount of All Products</h1>
              <h4 className="text-pink-700 font-josefin">{selectedProduct.type}</h4>
              <p className="mt-2 text-sm text-gray-500">{selectedProduct.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {selectedProduct.properties.map((prop, index) => (
                  <div key={index} className="flex items-center p-2 text-sm text-gray-500">
                    <span className="mr-1">✓</span>
                    {prop.material}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
              <Image 
              src={selectedProduct.image} 
              alt={selectedProduct.product} 
              width={500} 
              height={500} 
              className="rounded-full" 
              style={{ backgroundColor: 'rgba(252, 236, 241, 1)', }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscountItem;