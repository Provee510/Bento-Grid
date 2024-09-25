import React from 'react';
import imageP from '../assets/images/illustration-create-post.webp';
import content from '../assets/images/illustration-ai-content.webp'

const TwoTall = () => {
  return (
    <div className="">
      <div className="">
        <div className=" w-44 h-[290px] mb-5 bg-red-50 border-none rounded-lg p-4 text-xl">
          <div className="p-5">
            <h3 className="text-center font-bold">
              Create and <br />schedule <br />content <br /><span className="text-purple-500">quicker.</span>
            </h3>
          </div>
          <div className="">
            <img src={imageP} alt="" className="w-40 h-auto relative " />
          </div>
        </div>
        <div>
        <div className=" w-44 h-[290px] bg-yellow-500 border-none rounded-lg p-4 text-xl">
          <div className="p-5">
            <h3 className="text-center font-bold">
             Write your content using Ai.
            </h3>
          </div>
          <div className="">
            <img src={content} alt="" className="w-40 h-auto relative " />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TwoTall;
