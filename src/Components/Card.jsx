import React from 'react'

const Card = ({image,title,text}) => {
  return (
    <div className="border-2 bg-rose-100 h-52 w-full hover:transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
                    <img src={image} alt={title} />
                    {text}
                </div>
  )
}

export default Card
