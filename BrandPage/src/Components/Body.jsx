import React from 'react';
import { amazon, flipkart, shoe_image } from '../Assets';

const Body = () => {
  return (
    <div className=" flex flex-col sml:flex-row mx-6 xl:mx-[157px] h-auto mt-6 mdl:mt-[50px]">
      <div className="sml:w-1/2 w-full ">
        <h1 className="leading-none text-[50px] xl:text-[108px] font-extrabold uppercase">
          Your feet deserve the best
        </h1>
        <p className=" text-[16px] font-bold leading-6 mt-8 uppercase">
          You feet deserve te best and we're here to help you with our shoes.
          Your feet deserve the best and we're here to help you with our shoes.
        </p>
        <div className="flex gap-10 mt-7">
          <button className="py-2 px-4 bg-red-500 text-white text-2xl font-bold">
            Shop Now
          </button>
          <button className="py-2 px-4 border-2 border-gray-600 text-gray-600 font-bold text-2xl">
            Category
          </button>
        </div>
        <div className="flex flex-col text-gray-700 mt-7 gap-3">
          <p className="text-[16px] font-semibold">Also Available On</p>
          <div className="flex gap-8">
            <img src={flipkart} alt="" />
            <img src={amazon} alt="amazon" />
          </div>
        </div>
      </div>
      <div className="sml:w-1/2 w-full flex items-center overflow-hidden">
        <img
          className="w-full hover:rotate-[30deg] duration-300 "
          src={shoe_image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Body;
