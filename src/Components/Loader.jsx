import React from 'react';

function Loader(){
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-25 z-50">
      <div className="w-6 h-6 border-4 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
