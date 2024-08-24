// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import image from "../assets/Homepage-Photo-663x469.jpg"
const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-speed="-0.06"
      className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl"
    >
      <h1 className='text-[3.5vw] font-["Neue_Montreal"] font-[500] leading-none text-[#1f211a] w-[80vw]'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[2px] flex gap-5 border-[#99AD53] pt-5 mt-20">
        <div className="w-1/2">
          <h1 className="text-[#1f211a] text-[4vw] tracking-tighter">
            Our approach:
          </h1>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`uppercase px-7 py-4 rounded-full bg-[#1f211a] flex items-center justify-between gap-5 mt-3 text-lg ${
              isHovered && "bg-[#030303] transition-opacity duration-300"
            }`}
          >
            <span>read more</span>
            <div className="relative w-10 h-8 flex justify-center items-center">
              <div
                className={`flex justify-center items-center bg-zinc-100 rounded-full transition-all duration-300 ease-out ${
                  isHovered ? "w-10 h-10" : "w-2 h-2"
                }`}
              >
                {isHovered && (
                  <HiOutlineArrowUpRight
                    size={19}
                    color="black"
                    className="transition-opacity duration-300"
                  />
                )}
              </div>
            </div>
          </button>
        </div>
        <div style={{ backgroundImage: `url(${image})`}}
          className={`w-1/2 h-[70vh] rounded-3xl bg-cover ${
            isHovered &&
            "transform transition-transform scale-[0.94] duration-[1s] ease-linear"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default About;
