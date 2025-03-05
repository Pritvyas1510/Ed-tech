import React from "react";
import Famouse from "../../Components/Famouse";
import Dashboardicon from "../../Components/Dashboardicon";
import Adminnavbar from "../Adminpanal/Adminnavbar";

const Famousecourseicon = () => {
  return (
    <div>   
      <Adminnavbar/>  
     <div className="flex md:flex-row flex-col ">
      <Dashboardicon />
      <div className="h-full w-full  ">
        <div className="justify-self-center mx-5 gap-y-5">
          <div className="flex md:flex-row flex-col pt-7 gap-y-5 gap-x-3">
            <div className="border-2 border-black md:h-[400px] md:w-[800px] h-96 rounded-xl p-2">
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
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Famousecourseicon;
