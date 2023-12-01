import React from 'react';

const Spiner = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex justify-center items-center">
      <div className="h-10 w-10 rounded-full border-sky-400 border-dashed border-4 animate-spin "></div>
    </div>
  );
};

export default Spiner;
