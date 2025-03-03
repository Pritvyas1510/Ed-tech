import { Link } from "react-router"

const Hero =()=>{
  return(
    <div className="flex md:flex-row flex-col justify-evenly items-center ">

      <div className="">
        <h1 className="text-black font-serif font-extrabold text-5xl w-full md:pt-0 my-10 md:text-balance  text-center">Welcome to our Online</h1>
        <p className=" max-w-[500px] py-2 text-xl md:text-balance justify-center md:p-0 mb-10">At Ed Teach, we offer a comprehensive online learning experience, providing a wide range of technical and theoretical subject videos </p>
       <div className="flex gap-x-10 my-5"> <Link to="/registration"><button className="bg-orange-600 text-white rounded-full h-10 w-32">Get Started</button></Link> <button className="bg-transparent text-black w-15 h-10">Explore Courses
       </button></div>    
    </div>
      <div>
        <img src="/public/image/Madhvi.png" alt="image" className= "p-5  w-full justify-self-end"/>
      </div>
    </div>
    
  )
}

export default Hero

