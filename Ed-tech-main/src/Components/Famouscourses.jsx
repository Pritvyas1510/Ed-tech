import React from "react";
import Famouse from "./Famouse";

const Famouscourses = () => {
  return (
    <div className="border-2 border-black md:h-[380px] md:w-[520px] rounded-xl p-2">
      <div className="grid grid-cols-1 grid-rows-2">
        {" "}
        <div>
          <h1 className="text-black  font-serif font-bold capitalize">
            famous courses
          </h1>
        </div>
        <div className="h-52 -mt-[80px] -ml-40 ">
          {" "}
          <Famouse />
        </div>
      </div>
    </div>
  );
};

export default Famouscourses;
