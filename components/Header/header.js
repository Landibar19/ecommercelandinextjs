import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import '../../app/globals.css';


const Header = () => {
  return (
    <div className="flex justify-center items w-full h-12 bg-violet-600 rounded-lg text-white">
      <div className="flex w-full">
        <div className="flex-1 flex items-center justify-evenly ">
          <h5 className='items-center flex mr-4' ><MdOutlineMail className='mr-3'/>Email@gmail.com</h5>
          <h5 className="ml-4 flex items-center"><BsTelephoneInbound className='mr-3'/> Phone Number</h5>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <ul className="flex space-x-4">
            <li className="flex items-center">
              English <MdKeyboardArrowDown />
            </li>
            <li className='flex items-center'>USD <MdKeyboardArrowDown/></li>
            <li className='flex items-center'>Login <CgProfile className='ml-1'/></li>
            <li className='flex items-center'>Wishlist <FaRegHeart className='ml-1'/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;