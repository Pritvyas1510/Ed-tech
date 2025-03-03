import React from 'react'
import Userdashboardicon from '../../../Components/Userdashboardicon'
import Progress from '../../../Components/Progress'
import Profile from '../../../Components/Profile'
import Barchart from '../../../Components/Barchart'


const UserDashboard = () => {
  return (
    <div className="flex md:flex-row flex-col ">
    <div className='md:w-1/4 w-full' >
    <Userdashboardicon/>
    </div>
    <div className="h-full w-full ">
        <div className="mx-10 gap-y-5 ">
        <div className="flex md:flex-row flex-col pt-7 gap-y-5 gap-x-3">
           <Progress/>
           <Profile/>
        
        </div>
            <div className="flex md:flex-row flex-col gap-y-5 gap-x-2 my-3">
             <div className="border-2 border-black md:h-[380px]  md:w-[810px] rounded-xl p-2  ">
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

export default UserDashboard
