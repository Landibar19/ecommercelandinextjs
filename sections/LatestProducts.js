import React, { useState } from 'react';
import { latestProductsData } from '@/app/api/data/LatestProductsData';
import { categories } from '@/app/api/data/LatestProductsData';
import Image from 'next/image';

const LatestProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState('new arrivals');

    const filteredProducts = latestProductsData.filter(product => product.category === selectedCategory);

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-around items-center mb-4 w-1/2 m-auto">
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
                    <div key={product.id || index} className="border p-4 rounded">
                        <Image src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                        <p className="text-gray-700">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestProducts;