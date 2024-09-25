import React from 'react';
import schedule from '../assets/images/illustration-schedule-posts.webp';

const Single = () => {
  return (
    <div className="w-full lg:w-44 h-[400px] bg-purple-100 border-none rounded-lg p-4 text-xl overflow-hidden">
      <div className="">
        <h3 className="text-center font-bold">Schedule to social media</h3>
      </div>
      <div className="relative">
        <img src={schedule} alt="" className="w-64 h-32 transform scale-150 rounded-lg absolute lg:left-12 lg:top-12" />
      </div>
      <div>
        <p className="text-xs relative lg:top-56 lg:left-3 font-semibold">
          Optimize post timings to publish contents at the perfect time for your audience.
        </p>
      </div>
    </div>
  );
};

export default Single;
