import React from "react";

function Test() {
  return (
    <div className="container mx-auto px-[5rem] max-w-[1200px]">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 md:col-span-4 lg:col-span-3 border-2 border-black">
          col1
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 border-2 border-black">
          col2
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 border-2 border-black">
          col3
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 border-2 border-black">
          col4
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 border-2 border-black">
          col5
        </div>
      </div>
    </div>
  );
}

export default Test;
