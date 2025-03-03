const Container = ({ image, tile, para }) => {
  return (
    <div className="  mt-20 border-2 bg-rose-100 h-96 w-full hover:transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl rounded-lg">
      <img
        className="w-32 justify-self-center mt-10"
        src={image}
        alt="Our Mission"
      />
      <h1 className="text-xl text-black font-bold text-center my-5">
        {tile}
      </h1>
      <p className="w-4/5 justify-self-center text-center text-base ">
       {para}
       </p>
    </div>
  );
};

export default Container;