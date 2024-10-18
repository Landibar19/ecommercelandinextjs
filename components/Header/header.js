import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import '../../app/globals.css';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full h-auto md:h-12 bg-violet-600 rounded-lg text-white p-2 md:p-0">
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex-1 flex flex-col md:flex-row items-center justify-evenly mb-2 md:mb-0">
          <h5 className='flex items-center mb-2 md:mb-0 mr-0 md:mr-4'>
            <MdOutlineMail className='mr-3'/>Email@gmail.com
          </h5>
          <h5 className="flex items-center ml-0 md:ml-4">
            <BsTelephoneInbound className='mr-3'/> Phone Number
          </h5>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li className="flex items-center">
              English <MdKeyboardArrowDown />
            </li>
            <li className='flex items-center'>
              USD <MdKeyboardArrowDown/>
            </li>
            <li className='flex items-center'>
              Login <CgProfile className='ml-1'/>
            </li>
            <li className='flex items-center'>
              Wishlist <FaRegHeart className='ml-1'/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;