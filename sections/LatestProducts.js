import React, { useState } from 'react';
import { latestProductsData } from '@/app/api/data/LatestProductsData';
import { categories } from '@/app/api/data/LatestProductsData';
import Image from 'next/image';

const LatestProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState('new arrivals');

    const filteredProducts = latestProductsData.filter(product => product.category === selectedCategory);

    return (
        <div className=" w-auto mx-auto p-4 items-center justify-center">
            <h1 className="text-4xl font-bold mb-4 p-4 flex items-center justify-center text-black font-serif" style={{color: 'rgb(26, 11, 91)'}}>Latest Products</h1>
            <div className="flex justify-around items-center mb-4 w-1/2 m-auto flex-col md:flex-row">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`px-1 py-2 rounded ${selectedCategory === category ? 'text-pink-600 underline' : 'hover:text-pink-600 hover:underline'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product, index) => (
                <div key={product.id || index} className="border p-4 rounded flex flex-col justify-center items-center ">
                <Image src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
                <h2 className="text-lg font-bold mb-2 text-blue-900">{product.name}</h2>
                <div className="flex items-center space-x-4">
                    <p className="text-red-600 font-bold">${product.discountedPrice.toFixed(2)}</p>
                    <p className="text-gray-400 line-through">${product.price.toFixed(2)}</p>
                </div>
                </div>
                ))}
             </div>
        </div>
        
    );
};

export default LatestProducts;