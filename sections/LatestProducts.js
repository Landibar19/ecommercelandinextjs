import React, { useState } from 'react';
import { latestProductsData } from '@/data/LatestProductsData';
import { categories } from '@/data/LatestProductsData';
import Image from 'next/image';

const LatestProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState('new arrivals');

    const filteredProducts = latestProductsData.filter(product => product.category === selectedCategory);

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-around mb-4">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                    <div key={product.name} className="border p-4 rounded">
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