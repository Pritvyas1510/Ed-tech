const Edeffect = ({image,title}) =>
{
    return(
        <div className="border-2 bg-rose-100 h-52 w-full hover:transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl ">
          <img
            src={image}
            alt=" image"
            className="w-48 justify-self-center"
          />
          <h1 className="-m-10 text-black text-center text-xl">
            {title}
          </h1>
        </div>
    )
}

export default Edeffect;