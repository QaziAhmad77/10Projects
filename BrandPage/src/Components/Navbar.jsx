import React from 'react';
import { brand_logo } from '../Assets';

const Navbar = () => {
  return (
    <nav className="w-full h-[72px]">
      <div className="h-full flex items-center justify-between px-8 lg:px-[85px]">
        <img src={brand_logo} alt="" />
        <ul className="md:flex hidden gap-6 text-[16px] font-semibold text-black uppercase">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="flex bg-red-500 text-white font-semibold text-[16px] py-2 px-4">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
