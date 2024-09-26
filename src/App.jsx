import React from 'react';
import TwoTall from './pages/TwoTall';
import Rectangle from './pages/Rectangle';
import RightSide from './pages/RightSide';
import Single from './pages/Single';

const App = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row items-stretch">
      {/* Left side - 17% */}
      <div className="w-full md:w-[15%] bg-gray-100 p-4 flex items-center justify-center">
        <TwoTall />
      </div>

      {/* Right side - 83% */}
      <div className="w-full md:w-[50%] bg-gray-100 p-4 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <Rectangle /> 
          {/* //mobile first */}
          <Single />
          {/* second */}
        </div>
        <RightSide />
        {/* third */}
      </div>
    </div>
  );
};

export default App;


// export default App;


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//        {/* <TwoTall /> */}
//        {/* <Rectangle/> */}
//        {/* <RightSide /> */}
//        <Single />
//     </div>
//   )
// }

// export default App