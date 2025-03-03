import React from 'react'
import Userdashboardicon from '../../../Components/Userdashboardicon'

const UserProfile = () => {
  return (
  
    <div className="flex md:flex-row flex-col ">
      <Userdashboardicon/>
    <div className="h-full w-full pt-7 ">
        <div className="justify-self-center mx-5 gap-y-5">
        <div className="border-2 border-black h-[400px] md:w-[900px] rounded-xl p-2">
      <div className="grid grid-cols-2 grid-rows-2">
        {" "}
        <div>
          <h1 className="text-black  font-serif font-bold">Profile</h1>{" "}
          <div className=" mt-10">
            <p className="font-bold text-black font-serif mt-16 my-10"> Name</p>{" "}
            <p className="font-bold text-black font-serif my-5">User Id</p>
          </div>
        </div>
        <div className="h-52">
          {" "}
          <img
            className="w-24 justify-self-end rounded-full"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt=""
          />{" "}
    </div>
           
            </div>
        
    </div>
    </div>
      </div>
    </div>
  )
}

export default UserProfile
