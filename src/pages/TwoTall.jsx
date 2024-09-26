import React from 'react';
import imageP from '../assets/images/illustration-create-post.webp';
import content from '../assets/images/illustration-ai-content.webp';

const TwoTall = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-5">
      <div className="flex flex-col items-center w-44 h-[290px] bg-red-50 border-none rounded-lg p-4 text-xl">
        <div className="p-5">
          <h3 className="text-center font-bold">
            Create and <br />schedule <br />content <br /><span className="text-purple-500">quicker.</span>
          </h3>
        </div>
        <div>
          <img src={imageP} alt="Create Post Illustration" className="w-40 h-auto" />
        </div>
      </div>

      <div className="flex flex-col items-center w-44 h-[290px] bg-yellow-500 border-none rounded-lg p-4 text-xl">
        <div className="p-5">
          <h3 className="text-center font-bold">
            Write your content using AI.
          </h3>
        </div>
        <div>
          <img src={content} alt="AI Content Illustration" className="w-40 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default TwoTall;
