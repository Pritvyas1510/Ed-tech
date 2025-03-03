import React from "react";

const Profile = () => {
  return (
    <div className="border-2 border-black h-52 md:w-[400px] rounded-xl p-2">
      <div className="grid grid-cols-2 grid-rows-2">
        {" "}
        <div>
          <h1 className="text-black  font-serif font-bold">Profile</h1>{" "}
          <div className=" mt-10">
            <p className="font-bold text-black font-serif my-5"> Name</p>{" "}
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
  );
};

export default Profile;
