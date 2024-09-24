import Image from 'next/image';
import React from 'react';
import image from '../assets/Promotional/image 32.png';
import chairImage from '../assets/Promotional/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png';

export const Promotional = () => {
  return (
    <div className='flex justify-center items-center bg-bgColor w-full h-[60vh] p-24'>
    <div className='relative flex justify-center items-center'>
      <Image 
        src={image} 
        alt='Promotional' 
        width={180} 
        height={280}
        className='absolute top-0' 
      />
    </div>
    <div className='justify-center items-center'>
      <p className='text-3xl text-pink-600'>
        Best furniture for your castle...
      </p>
      <p>
        <span>New furniture collection </span>
        <span> Trends in 2024</span>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
        in phasellus non in justo.
      </p>
      <button className='mt-4 px-4 py-2 bg-pink-600 text-white rounded'>
        Shop now
      </button>
    </div>
    <div className='flex justify-center items-center'>
      <Image 
        src={chairImage} 
        alt='Chair' 
        width={180} 
        height={250} 
      />
    </div>
  </div>
);
};