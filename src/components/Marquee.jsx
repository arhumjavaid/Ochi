// eslint-disable-next-line no-unused-vars
import React from "react";
import Marquee from "react-fast-marquee";
// import { motion } from "framer-motion";

const marquee = () => {
  return (
    <div data-scroll data-scroll-speed="-0.001" className="w-full bg-[#004D43] pt-28 pb-8 rounded-tl-3xl rounded-tr-3xl">
      <Marquee speed={160}>
        <div className="text uppercase flex gap-10 whitespace-nowrap border-b-[2px] border-t-[2px] border-[#1F625A] tracking-tighter overflow-hidden">
          <h1 className="text-[24vw] leading-none font-semibold font-['Founders_Grotesk_X'] -mb-[7vw] pt-5 ">
            We are ochi
          </h1>
        </div>
      </Marquee>
    </div>
  );
};

export default marquee;
