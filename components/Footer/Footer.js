import React from 'react';
import  {footerData} from '@/app/api/data/FooterData';
import { FaFacebook } from 'react-icons/fa6';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

export const Footer = () => {
  return (
    <div className='flex flex-row md:flex-col'>
        <div className=" flex flex-col md:flex-row items-center justify-center p-4 gap-x-16 text-sm font-josefin"
            style={{backgroundColor: "rgb(231,228,248)", color: 'rgb(138 143 185)'}}
            >
        <div className="mb-4 px-4">
            <h1 className="text-xl font-bold">Hekto</h1>
            <div className='py-4'>
            <input type="email" className="email p-2 rounded bg-gray-200 text-gray-800 focus:outline-none" placeholder="Enter email address" />
            <button className='text-white bg-pink-500 rounded-sm w-24 h-8'>Sign up</button>
            </div>
            <h2>Contact Info</h2>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>  
        </div>
        <div className="mb-4 px-4">
            <h2 className="text-lg font-bold">Categories</h2>
            <ul>
            {footerData.categories.map((category) => (
                <li key={category.id}>{category.links}</li>
            ))}
            </ul>
        </div>
        <div className="mb-4 px-4">
            <h2 className="text-lg font-bold">Pages</h2>
            <ul>
            {footerData.pages.map((page) => (
                <li key={page.id}>{page.links}</li>
            ))}
            </ul>
        </div>
        <div className="mb-4 px-4">
            <h2 className="text-lg font-bold">Customer Care</h2>
            <ul>
            {footerData.customerCare.map((care) => (
                <li key={care.id}>{care.links}</li>
            ))}
            </ul>
        </div>
        </div> 
        <div 
      style={{backgroundColor: 'rgb(231 228 248)', color: 'rgb(138 143 185)'}}
      className='w-auto h-12 flex flex-row justify-evenly items-center font-josefin text-sm'>
        <p className='text-center'>© 2024 Lizandër codes. All Rights Reserved</p>
        <div className='flex flex-row gap-2 p-2'>
            <FaFacebook />
            <BsInstagram />
            <BsTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;