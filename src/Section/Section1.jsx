import Button from "../Components/Button";

const Section1 = () => {
  return (
    <div className="bg-[url(/public/image/SectionBackground.png)] bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-center justify-center text-white px-5 md:px-20">
      
      {/* Title */}
      <h1 className="py-3 text-3xl sm:text-4xl md:text-6xl text-center font-serif font-extrabold max-w-[600px]">
        Elevate Your Learning with Ed
      </h1>

      {/* Description */}
      <p className="text-center text-sm sm:text-base md:text-lg md:w-2/4 pt-4">
        Ed Teach is your gateway to a world of knowledge. Our online learning 
        platform offers a diverse selection of technical and theoretical subject 
        videos, along with detailed notes, empowering you to expand your expertise 
        and reach new heights in your academic or professional pursuits. Explore our 
        comprehensive course offerings, learn from industry-leading experts, and unlock 
        a future of endless possibilities.
      </p>

      {/* Button */}
      <div className="mt-6 md:mt-10">
        <Button bname={"Enroll Now"} />
      </div>
      
    </div>
  );
};

export default Section1;
