import React from "react";
import "../index.css";
import ballImage from "../assets/ball.png";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-[90vh] max-md:h-fit bg-[#07020e] flex-wrap max-md:p-8 gap-[20px]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col gap-5 w-1/2 md:w-2/3 lg:w-4/5 xl:w-full max-w-[1445px]:w-2/3 max-w-[1110px]:w-4/5 md:w-full">
          <div className="flex flex-col justify-start opacity-100 flex-shrink-0 transform-none">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight md:leading-snug tracking-tight text-left text-gradient">
              LeapgenGov.ai
            </h1>
          </div>
          <h2 className="text-base description">
            Pioneering Artificial Intelligence Solutions for Tomorrow’s Challenges
          </h2>
        </div>
        <div className="flex-1 flex flex-col items-center min-w-[350px]">
          <img alt="" src={ballImage} className="rounded-xl w-72 md:w-96" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
