import React from 'react';

const Header = () => {
  return (
    <div className="h-16 border-b-2">
      <div className="sml:flex sml:justify-between sml:items-center h-full mx-auto sml:px-5 lgl:px-15">
        <h1 className="text-blue-500 text-center font-extrabold text-2xl">
          Qazi <span className="text-red-500 ">Ahmad</span>
        </h1>
        <ul className="text-black hidden md:flex font-semibold uppercase gap-6 text-[16px] tracking-wide">
          <li className="cursor-pointer hover:bg-gray-400 duration-300 py-2 px-4">
            Home
          </li>
          <li className="cursor-pointer hover:bg-gray-400 duration-300 py-2 px-4">
            About
          </li>
          <li className="cursor-pointer hover:bg-gray-400 duration-300 py-2 px-4">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
