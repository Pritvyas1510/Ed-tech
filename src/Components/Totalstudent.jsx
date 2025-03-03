import React from "react";
import Linechart from "./Linechart";

const Totalstudent = () => {
  return (
    <div>
      <div className="border-2 border-black md:h-52 md:w-[400px] rounded-xl p-2">
        <p className="flex">
          <h1 className="text-black font-bold font-serif ">Total Student</h1>
          <p className="text-black p-1 pl-[200px] text-base">
            112<span> User</span>
          </p>
        </p>{" "}
        <Linechart/>{" "}
      </div>
    </div>
  );
};

export default Totalstudent;
