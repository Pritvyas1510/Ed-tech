const Videocard = ({video,title,iteam,paraleft,pararight})=>
{
 return(
             <div className=" mt-5 rounded-lg border-2 bg-white h-96 w-2/6 text-wrap hover:transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl ">
    <video className="justify-self-center" width="450" height="360" autoPlay loop muted>
         <source src={video} type="video/mp4" />
                 Your browser does not support the video tag.
            </video>
            <h1 className="mt-5 text-black">{title}</h1>
            <p className="mt-2 text-gray-500">{iteam}</p>
            <div className="flex mt-2">
                <div className="w-1/2 text-gray-500 text-start">{paraleft}</div>
                <div className="w-1/2 -ml-10 text-end">{pararight}</div>
            </div>
            </div>

 )
}

export default Videocard