import React from 'react';
import threeF from '../assets/images/illustration-audience-growth.webp';
import follow from '../assets/images/illustration-grow-followers.webp';

const RightSide = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Purple div (second div, but will display first on mobile) */}
      <div className="w-full md:w-[360px] bg-purple-500 border-none rounded-lg p-4 text-white text-3xl flex flex-col lg:flex-row lg:items-center lg:justify-start order-1 lg:order-2">
        <img src={follow} alt="" className="w-full lg:w-[150px] h-auto object-contain lg:mr-4" />
        <h1 className="text-2xl mt-4 lg:mt-0">Grow followers with non-stop content.</h1>
      </div>

      {/* First div (which will display last on mobile and first on lg) */}
      <div className="w-full md:w-[170px] bg-white border-none rounded-lg p-4 text-xl overflow-hidden order-2 lg:order-1">
        <div className="w-40 h-auto flex justify-center"></div>
        <div className="relative right-24 lg:right-0">
          <h3 className="text-black text-4xl font-bold text-center">>56%</h3>
          <p className="text-xs mb-4 mt-2 text-center">faster audience growth</p>
        </div>
        <img src={threeF} alt="" className="w-[200px] object-contain" />
      </div>
    </div>
  );
};

export default RightSide;
