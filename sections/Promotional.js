import Image from 'next/image';
import React from 'react';
import '../app/globals.css';
import image from '../assets/Promotional/image 32.png';
import chairImage from '../assets/Promotional/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png';

 const Promotional = () => {
  return (
    <div className='flex relative flex-col md:flex-row justify-center items-center w-full h-full md:h-full p-2 md:py-20' style={{ backgroundColor: 'rgb(242, 240, 248)' }}>
      <div className=' flex-2 sm:relative md:absolute flex justify-center items-center top-0 md:left-0 lg:left-5'>
        <Image src={image} alt='Promotional' width={238} height={340} className='pr-1' />
      </div>
      <div className=' flex flex-col justify-center items-center md:w-2/4 md:items-start pt-10 md:pt-0 pl-4 md:pl-16'>
        <p className='text-xs md:text-sm lg:text-base text-pink-600'>
          Best furniture for your castle...
        </p>
        <div className='text-center md:text-left'>
          <p className='text-2xl md:text-3xl lg:text-4xl text-black font-bold font-serif'>New furniture collection</p>
          <p className='text-2xl md:text-3xl lg:text-4xl text-black font-bold font-serif'>Trends in 2024</p>
        </div>
        <p className='max-w-screen-md text-center md:text-left text-sm md:text-base lg:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
        <button className='mt-4 px-4 py-2 bg-pink-600 text-white rounded'>
          Shop now
        </button>
      </div>
      <div className=' flex justify-center items-center relative rounded-full w-48 h-48 md:w-72 md:h-42  mt-10 md:mt-0' style={{ backgroundColor: 'rgb(236, 210, 250)' }}>
        <div className=' blob absolute top-0 -right-5 md:-right-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500 flex justify-center items-center'>
          <p className='text-xs md:text-base text-white font-bold font-sans'>50% off</p>
        </div>
        <Image src={chairImage} alt='Chair' width={380} height={450} className='w-40 h-60 md:w-72 md:h-96' />
      </div>
    </div>
  );
};

export default Promotional;