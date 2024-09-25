import React from 'react';
import threeF from '../assets/images/illustration-audience-growth.webp';
import follow from '../assets/images/illustration-grow-followers.webp';

const RightSide = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-[170px] h-40 bg-white border-none rounded-lg p-4 text-xl overflow-hidden">
        <div className="w-40 h-auto flex justify-center"></div>
        <h3 className="text-black text-4xl font-bold text-center">>56%</h3>
        <p className="text-xs mb-4 mt-2 text-center">faster audience growth</p>
        <img src={threeF} alt="" className="w-[200px] object-contain" />
      </div>

      <div className="w-full md:w-[360px] h-40 bg-purple-500 border-none rounded-lg p-4 text-white text-3xl  overflow-hidden flex items-center justify-center">
        <img src={follow} alt="" className="w-full h-full object-contain" />
        <h1 className="text-2xl relative left-3">Grow followers with non-stop content.</h1>
      </div>
    </div>
  );
};

export default RightSide;
