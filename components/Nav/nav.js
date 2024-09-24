"use client";
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Pages', href: '/pages' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav>
      <div className="container mx-auto flex justify-evenly items-center pt-3">
        <div className="text-black text-lg font-bold">
          E-Commerce
        </div>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
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
          <input type="text" placeholder="Search" className="border border-gray-300 p-1"/>
          <IoSearchOutline className="text-white bg-pink-600 size-8"/>
        </div>
      </div>
    </nav>
  );
};