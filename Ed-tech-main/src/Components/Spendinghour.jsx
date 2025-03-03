import React from "react";
import Barchart from "./Barchart";

const Spendinghour = () => {
  return (
    <div className="border-2 border-black md:h-[380px]  md:w-[700px] rounded-xl p-2  ">
      <div className="grid  grid-rows-2 grid-cols-1">
        {" "}
        <div>
          <h1 className="text-black h-10 font-serif font-bold">
            Spending Hour{" "}
          </h1>
        </div>
        <div className="h-72 -mt-28">
          {" "}
          <Barchart />
        </div>
      </div>
    </div>
  );
};

export default Spendinghour;
