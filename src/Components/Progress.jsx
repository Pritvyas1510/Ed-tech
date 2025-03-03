import React from 'react'
import Piechart from './PieChart'

const Progress = () => {
  return (
    <div className="border-2 border-black md:h-52 md:w-[400px] rounded-xl p-2"><div className="grid grid-cols-2 grid-rows-1"> <div><h1 className="text-black  font-serif font-bold">Progress</h1>
               
               <p className="mt-20 flex gap-1"><span> <div className='border-2 h-4 w-4 bg-[#0088FE] rounded-lg'></div></span><span className="capitalize font-serif text-gray-900 text-sm">web development</span></p>
               <p  className="flex gap-1"><span> <div className='border-2 h-4 w-4 bg-[#00C49F] rounded-lg'></div></span><span className="capitalize font-serif text-black text-sm">Mobile App Development</span></p>
               <p  className="flex gap-1"><span> <div className='border-2 h-4 w-4 bg-[#FFBB28] rounded-lg'></div></span><span className="capitalize font-serif text-black text-sm">Game Development</span></p>
               <p  className="flex gap-1"><span> <div className='border-2 h-4 w-4 bg-[#FF8042] rounded-lg'></div></span><span className="capitalize font-serif text-black text-sm">Devops Developer</span></p>
           
     </div><div className="h-48">  <Piechart/></div></div></div>
              
  )
}

export default Progress
