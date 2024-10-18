import React from 'react';
import { ServicesData } from '../app/api/data/ServicesData';
import Image from 'next/image';

export const Services = () => {
  return (
    <div className=" flex  flex-col px-4 py-10 justify-center items-center w-full">
    <div className='flex justify-center items-center py-14'>
        <h1 className='text-blue-950 text-2xl font-extrabold font-serif'> What Shopex offer</h1>
    </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-0">
        {ServicesData.map((service, index) => (
          <div key={index} className="border shadow-lg p-4  h-80 flex flex-col justify-center items-center">
            <Image src={service.image} alt={service.title} className="w-24 h-24 object-fit rounded-t-lg p-4" />
            <h2 className="text-lg font-bold  text-blue-950 mt-2 ">{service.title}</h2>
            <p className="text-gray-600 mt-1 text-center ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;