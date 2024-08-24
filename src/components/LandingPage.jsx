// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import image from "../assets/content-image01.jpg";
const LandingPage = () => {
  return (
    <div data-scroll data-scroll-speed="-0.8" data-scroll-section className="w-full h-screen bg-zinc-800 pt-1">
      <div className="textstructure mt-52 px-20 capitalize">
        {["We create", "eye-opening", "presentations"].map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: "0" }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
                    className={`mr-[0.8vw] w-[8vw] h-[5.2vw] rounded-md relative -top-[1.1vw] bg-cover`}
                    style={{ backgroundImage: `url(${image})`}}
                  ></motion.div>
                )}
                <h1 className=" pt-[1vw] -mb-[1.2vw] text-[8vw] leading-[0.85]  uppercase font-['Founders_Grotesk_X'] font-[500]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-28 flex justify-between items-center px-20 py-5 text-zinc-200 flex-wrap gap-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item) => (
          // eslint-disable-next-line react/jsx-key
          <p className="text-xl font-light tracking-tight">{item}</p>
        ))}
        <div className="Start flex items-center justify-center gap-1.5 ">
          <div className="text-element px-5 py-2 font-light text-lg border-[1px] border-zinc-500 rounded-full p hover:text-black hover:bg-white">
            START THE PROJECT
          </div>
          <div className="arrow-element w-11 h-11 rounded-full border-[1px] flex justify-center items-center border-zinc-500">
            <HiOutlineArrowUpRight size={19} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
