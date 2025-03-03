import React from 'react'
import Dashboardicon from '../../Components/Dashboardicon'
import Linechart from '../../Components/Linechart'

const Totalstudenticon = () => {
  return (
    <div className="flex md:flex-row flex-col ">
    <Dashboardicon/>
  <div className="h-full w-full  ">
      <div className="justify-self-center mx-5 gap-y-5">
      <div className="flex md:flex-row flex-col pt-7 gap-y-5 gap-x-3">
        <div>
              <div className="border-2 border-black md:h-[400px] md:w-[900px] rounded-xl p-2">
                <p className="flex">
                  <h1 className="text-black font-bold font-serif ">Total Student</h1>
                  <p className="text-black p-1 pl-[700px] text-base">
                    112<span> User</span>
                  </p>
                </p>{" "}
                <Linechart/>{" "}
              </div>
            </div>
</div>
  
      
  </div>
  </div>
  </div>
  )
}

export default Totalstudenticon

