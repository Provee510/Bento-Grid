import React from 'react';
import star from '../assets/images/illustration-five-stars.webp';
import pre from '../assets/images/illustration-multiple-platforms.webp';
import consist from '../assets/images/illustration-consistent-schedule.webp';

const Rectangle = () => {
  return (
    <div>
      <div className="w-full md:w-[360px] h-52 bg-purple-500 border-none rounded-lg p-4 text-3xl mb-4">
        <div className="p-5">
          <h3 className="text-center text-white font-bold">
            Social Media <span className="text-yellow-500">10x</span> Faster with Ai
          </h3>
        </div>
        <div className="items-center justify-center">
          <img src={star} alt="" className="w-40 h-auto lg:left-20 mb-1 relative " />
        </div>
        <div >
        <p className="text-xs text-white lg:left-20 w-40 relative">over 4,000 5-star reviews</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-[170px] h-44 bg-white border-none rounded-lg p-4 text-xl overflow-hidden">
          <div className="w-40 h-auto flex justify-center">
            <img src={pre} alt="" className="w-[200px] object-contain transform relative scale-125 left-6" />
          </div>
          <h3 className="text-black font-bold ">Manage multiple accounts and platforms.</h3>
        </div>

        <div className="w-[175px] h-44 bg-yellow-500 border-none rounded-lg p-4 text-xl overflow-hidden">
          <div className="h-full">
            <h1 className="text-black font-bold text-sm mb-4 relative left-5 transform scale-125">
              Maintain a <br /> consistent <br /> posting <br /> schedule.
            </h1>
            <img src={consist} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
