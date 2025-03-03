import React, { useState } from "react";
import { Upload } from "lucide-react";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="flex items-center justify-center mx-5 p-2 mt-5">
      <div className=" rounded-lg w-full flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="bg-pink-50 w-full md:w-[300px] p-6 flex flex-col items-center text-center">
          <label htmlFor="profileImage" className="cursor-pointer relative">
            {selectedImage ? (
              <img
                className="w-36 h-36 rounded-full border-4 border-white object-cover"
                src={selectedImage}
                alt="Profile"
              />
            ) : (
              <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-white bg-gray-200">
                <Upload size={40} className="text-gray-500" />
              </div>
            )}
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Edogaru</h2>
          <p className="text-gray-500">edogaru@mail.com.my</p>
        </div>
        {/* Profile Settings */}
        <div className="w-full md:w-[1000px] p-6 gap-5 ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile</h2>
          <form className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700">Name</label>
                <input type="text" className="w-full p-2 border bg-slate-50 text-black border-gray-900 rounded mt-1" placeholder="First Name" />
              </div>
              <div>
                <label className="text-gray-700">Surname</label>
                <input type="text" className="w-full p-2 border  bg-slate-50 text-black border-gray-900 rounded mt-1" placeholder="Surname" />
              </div>
              <div>
                <label className="text-gray-700">Mobile Number</label>
                <input type="tel" className="w-full p-2 border  bg-slate-50 text-black border-gray-900 rounded mt-1" placeholder="Enter phone number" />
              </div>
              <div>
                <label className="text-gray-700">Email ID</label>
                <input type="email" className="w-full p-2 border  bg-slate-50 text-black border-gray-900 rounded mt-1" placeholder="Enter email id" />
              </div>
              <div>
                <label className="text-gray-700">Address Line 1</label>
                <input type="text" className="w-full p-2 border  bg-slate-50 text-black border-gray-900 rounded mt-1" placeholder="Enter address line 1" />
              </div>
              <div>
                <label className="text-gray-700">Address Line 2</label>
                <input type="text" className="w-full p-2 border  bg-slate-50 text-black border-gray-900 rounded mt-1" placeholder="Enter address line 2" />
              </div>
              <div>
                <label className="text-gray-700">Country</label>
                <input type="text" className="w-full p-2 border  bg-slate-50 text-black border-gray-900 rounded mt-1" placeholder="Country" />
              </div>
              <div>
                <label className="text-gray-700">State</label>
                <input type="text" className="w-full p-2 border  bg-slate-50 text-black border-gray-900 rounded mt-1" placeholder="Enter state" />
              </div>
              <div>
                <label className="text-gray-700">Postcode</label>
                <input type="text" className="w-full p-2 border  bg-slate-50 text-black border-gray-900 rounded mt-1" placeholder="Enter postcode" />
              </div>
              <div>
                <label className="text-gray-700">Education</label>
                <input type="text" className="w-full p-2 border  bg-slate-50 text-black border-gray-900 rounded mt-1" placeholder="Education" />
              </div>
            </div>
            <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
