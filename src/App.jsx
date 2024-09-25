import React from 'react';
import TwoTall from './pages/TwoTall';
import Rectangle from './pages/Rectangle';
import RightSide from './pages/RightSide';
import Single from './pages/Single';

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* Left side - 17% */}
      <div className="w-[15%] bg-gray-100 p-4 h-full flex items-stretch">
        <div className="flex-grow flex items-center justify-center">
          <TwoTall />
        </div>
      </div>

      {/* Right side - 83% */}
      <div className="w-[50%] bg-gray-100 p-4 h-full flex flex-col gap-3 relative right-5 items-stretch bottom-4">
        <div className="flex gap-3 relative top-3 mb-4">
          <Rectangle/>
          <Single />
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default App;