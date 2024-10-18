"use client";
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdMenu, MdClose } from 'react-icons/md';
import { navItems } from '@/app/api/navItem'; // Ensure this is a named export

export const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex sm:flex-col md:flex-row justify-between items-left p-3">
        <div className="hidden md:block text-black text-lg font-bold">
          E-Commerce
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          {navItems.map((item, index) => (
            <li key={index} className="my-2 md:my-0">
              <a 
                href={item.href} 
                className="text-black hover:text-pink-600 cursor-pointer flex items-center"
                onClick={() => handleToggle(index)}
              >
                {item.name} {activeIndex === index ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex justify-center items-center'>
          <input 
            type="text" 
            placeholder="Search" 
            className="border border-gray-300 p-1 w-full sm:w-3/4 md:w-2/3 lg:w-3/5"
          />
          <IoSearchOutline 
            className="text-white bg-pink-600 size-8 ml-2 p-1 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;