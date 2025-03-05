import React from 'react'
import Adminnavbar from './Adminnavbar'
import { Upload, Trash2, Save, CirclePlus } from "lucide-react";

const Adminhome = () => {
  return (
    <div>
        <Adminnavbar/>
    
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Welcome to EdTech </h1>
      
      <div className="mb-4 justify-self-end flex gap-7">
       
        <div>
        <select className='bg-white md:w-52 w-[100px] rounded-lg h-10 mx-10'>
            <option value="videos">Videos</option>
            <option value="articles">Articles</option>
            <option value="documents">Documents</option>
            <option value="polls">Polls</option>
            <option value="tests">Tests</option>
            <option value="quizzes">Quizzes</option>
            <option value="assignments">Assignments</option>
            <option value="lectures">Lectures</option>
            <option value="resources">Resources</option>
            <option value="events">Events</option>
            <option value="projects">Projects</option>
          </select>
          </div>
        <div>
        <button className="cursor-pointer text-center  inline-block bg-blue-500 text-white md:px-4  px-2  py-2 rounded-lg shadow-md hover:bg-blue-600" onClick={()=>document.getElementById('my_modal_5').showModal()}><div className='flex gap-2'><div><CirclePlus /></div><div>Add Course</div></div></button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box mb-2 bg-slate-50 h-[430px]">

       <form action="">
        <div className='text-black'>
            <h1 className='text-4xl'>Add Course</h1>
        <div className='mt-5'> 
         <label>Main menu</label>
        <input type="text" placeholder="Course Name" className="w-full p-2 rounded-lg border bg-slate-100 border-gray-300" />
        </div>
        <div className='mt-5'>
        <label>Sub menu</label>
        <input type="text" placeholder="Submenu Name" className="w-full p-2 rounded-lg border bg-slate-100 border-gray-300" />
        </div>
        <div className='mt-5'> 
        <label>Add video Url</label>
        <input type="text" placeholder="Video Url" className="w-full p-2 rounded-lg border bg-slate-100 border-gray-300" />
        </div>
        </div>
        </form>
        <div  className='justify-self-end  mt-7 flex gap-x-[200px]'>
        <div className=''>
        <button className="cursor-pointer text-center  inline-block bg-blue-500 text-white px-4  py-2 rounded-lg shadow-md hover:bg-blue-600">
          <span className="flex items-center text-center gap-2">
          <Save /> Save the Changes
          </span>
        </button>
        </div>
     
        <div>
        <form method="dialog">
      <button className="cursor-pointer text-center  inline-block bg-gray-200 text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-100">
          <span className="flex items-center text-center gap-2">Close
          </span>
        </button>
      </form>
        </div>
    </div>
  </div>
</dialog>
      </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Sample Content 1", "Sample Content 2", "Sample Content 3"].map((content, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center border border-gray-200">
            <span>{content}</span>
            <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className='justify-self-end mx-10'>
        <button htmlFor="file-upload" className="cursor-pointer text-center  inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
        
          <span className="flex items-center text-center gap-2">
          <Save /> Save the Changes
          </span>
        </button>
      </div>
    </div>
  )
}

export default Adminhome