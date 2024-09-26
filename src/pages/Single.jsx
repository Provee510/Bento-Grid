import React from 'react';
import schedule from '../assets/images/illustration-schedule-posts.webp';

const Single = () => {
  return (
    <div className="w-full lg:w-44 bg-purple-100 border-none rounded-lg p-4 text-xl overflow-hidden">
      {/* Title */}
      <div className="mb-4">
        <h3 className="text-center font-bold">Schedule to social media</h3>
      </div>
      
      {/* Image */}
      <div className="flex justify-center">
        <img src={schedule} alt="Schedule posts" className="w-40 h-auto lg:w-64 lg:h-32 rounded-lg" />
      </div>
      
      {/* Description */}
      <div className="mt-4 lg:mt-12">
        <p className="text-xs text-center lg:text-left font-semibold ">
          Optimize post timings to publish content at the perfect time <br /> for your audience.
        </p>
      </div>
    </div>
  );
};

export default Single;
``
