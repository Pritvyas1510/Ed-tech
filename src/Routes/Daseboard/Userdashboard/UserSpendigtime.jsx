import React from 'react'
import Userdashboardicon from '../../../Components/Userdashboardicon'
import Barchart from '../../../Components/Barchart'

const UserSpendigtime = () => {
  return (
    <div className="flex md:flex-row flex-col ">
    <Userdashboardicon/>
     <div className="h-full w-full  ">
      <div className="justify-self-center mx-5 gap-y-5">
      <div className="flex md:flex-row flex-col pt-7 gap-y-5 gap-x-3">
   
      
          <div className="border-2 border-black md:h-[400px]  md:w-[800px] rounded-xl p-2  ">
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
      </div>
     
          </div>
      
  </div>
 
  </div>
  )
}

export default UserSpendigtime
