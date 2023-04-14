import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen  ">
      <img
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        className="top-0 left-0 w-full h-screen object-cover "
      />
      <div className="absolute bg-black/33 top-0 left-0 w-full h-screen " />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-[#fcfcfc] ">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 mb-[190px]    ">
          <p>ALl Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] dorp-shadow-2xl  py-2 text-xl font-serif">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam{" "}
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
