import React from 'react'

const Button = ({bname}) => {
  return (
    <div>
      <button className="bg-orange-600 text-white rounded-full h-10 w-32">{bname}</button>
    </div>
  )
}

export default Button
