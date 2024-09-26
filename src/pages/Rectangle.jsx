import React from 'react';
import star from '../assets/images/illustration-five-stars.webp';
import pre from '../assets/images/illustration-multiple-platforms.webp';
import consist from '../assets/images/illustration-consistent-schedule.webp';

const Rectangle = () => {
  return (
    <div className="space-y-4"> {/* Vertical spacing between sections */}
      
      {/* Main Box */}
      <div className="w-full md:w-[360px] h-auto bg-purple-500 border-none rounded-lg p-4 text-3xl mb-4 flex flex-col items-center">
        <div className="p-5 text-center">
          <h3 className="text-white font-bold">
            Social Media <span className="text-yellow-500">10x</span> Faster with Ai
          </h3>
        </div>
        <div className="flex justify-center">
          <img src={star} alt="5-star" className="w-40 h-auto mb-1" />
        </div>
        <div className="text-center">
          <p className="text-xs text-white">Over 4,000 5-star reviews</p>
        </div>
      </div>

      {/* Boxes Section */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        
        {/* First Box (White) */}
        <div className="w-full md:w-[170px] h-auto bg-white border-none rounded-lg p-4 text-xl flex flex-col items-center">
          <div className="w-[200px] h-auto flex justify-center">
            <img src={pre} alt="Multiple platforms" className="object-contain" />
          </div>
          <h3 className="text-black font-bold text-center mt-2 md:mt-0"> {/* Heading below image on mobile */}
            Manage multiple accounts and platforms.
          </h3>
        </div>

        {/* Second Box (Yellow) */}
        <div className="w-full md:w-[175px] h-auto bg-yellow-500 border-none rounded-lg p-4 text-xl flex flex-col items-start md:items-center"> {/* Align left on mobile */}
          <h1 className="text-black font-bold text-lg md:text-xl mb-2 md:mb-4 md:text-center  md:line-clamp-2"> {/* Line clamp and bigger font */}
            Maintain a consistent <br /> posting schedule.
          </h1>
          <img 
            src={consist} 
            alt="Consistent Schedule" 
            className="w-[200px] h-auto object-cover md:w-full" 
          /> {/* Wider image on mobile, full width on desktop */}
        </div>

      </div>
    </div>
  );
};

export default Rectangle;
