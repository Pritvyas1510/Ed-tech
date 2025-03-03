import React from 'react'
import { Coursediv } from '../../constant'
import { Link } from 'react-router'



function Coursepage() {
  return (
    <div className=' border-gray-300 bg-rose-100  mx-5 mt-16  rounded-xl grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 justify-self-center cursor-pointer '>
      {Coursediv.map((item)=>(
        <Link to={item.link}>
        <div className=' mx-5 my-5  bg-blue-400  rounded-xl hover:transition p-1 flex-1 delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl'>
            <img src={item.image} alt="Image is Not Supported"  className='w-80 h-80 rounded-xl justify-self-center' />
            <h1 className='text-black font-serif font-extrabold p-2 text-2xl text-center my-5 ' > {item.title} </h1>
        </div>
        </Link>
      ))}  
      
    </div>
  )
}

export default Coursepage
