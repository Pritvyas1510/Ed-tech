import React from 'react'
import Progress from '../../Components/Progress'
import Dashboardicon from '../../Components/Dashboardicon';
import Piechart from '../../Components/PieChart';
import Adminnavbar from '../Adminpanal/Adminnavbar';

const Progressicon = () => {
  return (

    <div>
      <Adminnavbar/>
   
    <div className="flex md:flex-row flex-col ">
    <Dashboardicon/>
  <div className="h-full w-full  ">
      <div className="justify-self-center mx-5 gap-y-5">
      <div className="flex md:flex-row flex-col pt-7 gap-y-5 gap-x-3">
        
            <div className="border-2 border-black md:h-[400px] md:w-[800px] rounded-xl p-2"><div className="grid grid-cols-2 grid-rows-1"> <div><h1 className="text-black  font-serif font-bold">Progress</h1>
                       
                       <p className="mt-52 flex gap-1"><span> <div className='border-2 h-4 w-4 bg-[#0088FE] rounded-lg'></div></span><span className="capitalize font-serif  text-gray-900 text-xl">web development</span></p>
                       <p  className="flex gap-1"><span> <div className='border-2 h-4 w-4 bg-[#00C49F] rounded-lg'></div></span><span className="capitalize font-serif  text-black text-xl">Mobile App Development</span></p>
                       <p  className="flex gap-1"><span> <div className='border-2 h-4 w-4 bg-[#FFBB28] rounded-lg'></div></span><span className="capitalize font-serif  text-black text-xl">Game Development</span></p>
                       <p  className="flex gap-1"><span> <div className='border-2 h-4 w-4 bg-[#FF8042] rounded-lg'></div></span><span className="capitalize font-serif  text-black text-xl">Devops Developer</span></p>
                   
             </div><div className="h-48  mt-20">  <Piechart/></div></div></div>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Progressicon;
