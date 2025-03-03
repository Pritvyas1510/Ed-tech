import React from 'react'

function Coursediv({image,title,link}) {
  return (
    <Link to={link}>
    <div className='w-96 h-96 mx-5 my-5  bg-blue-400  rounded-xl hover:transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl'>
            <img src={image} alt="Image is Not Supported"  className='w-80 h-80rounded-xl justify-self-center' />
            <h1 className='text-black font-serif font-extrabold text-2xl text-center my-5'> {title} </h1>
        </div>
        </Link>
  )
}

export default Coursediv
