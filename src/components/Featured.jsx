// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion, useAnimation } from "framer-motion";
import image1 from "../assets/Fyde_Illustration_Crypto_2-663x551.png";
import image2 from "../assets/Vise_front2-663x551.jpg";
import image3 from "../assets/Frame-481692-1-663x551.png";
import image4 from "../assets/Frame-3875-663x551.jpg";
import image5 from "../assets/PB-Front-4-663x551.png";
const Featured = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className='font-["Neue_Montreal"] text-[4vw] text-zinc-200'>
          Featured projects
        </h1>
      </div>
      <div className="px-20 py-10 grid grid-cols-2 gap-10">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardContainer relative cursor-pointer"
        >
          <h1 className="absolute flex overflow-hidden text-[8.5vw] font-[900] tracking-tight font-['Founders_Grotesk_X'] text-[#CDEA68] z-[9] left-full top-1/2 -translate-x-[50%] -translate-y-[50%]">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.01,
                  duration: 0.5,
                }}
                key={index}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card overflow-hidden rounded-2xl transform transition-transform duration-[0.8s] hover:scale-[0.94]">
            <img
              className="w-full h-full object-cover transform transition-transform duration-[1.2s] hover:scale-[1.1]"
              src={`${image1}`}
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardContainer relative cursor-pointer"
        >
          <h1 className="absolute flex overflow-hidden text-[8.5vw] font-[900] tracking-tight font-['Founders_Grotesk_X'] text-[#CDEA68] z-[9] right-full top-1/2 translate-x-[40%] -translate-y-[50%]">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.01,
                  duration: 0.5,
                }}
                key={index}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card overflow-hidden rounded-2xl transform transition-transform duration-[0.8s] hover:scale-[0.94]">
            <img
              className="w-full h-full object-cover transform transition-transform duration-[1.2s] hover:scale-[1.1]"
              src={`${image2}`}
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
          className="cardContainer relative cursor-pointer"
        >
          <h1 className="absolute flex overflow-hidden text-[8.5vw] font-[900] font-['Founders_Grotesk_X'] text-[#CDEA68] z-[9] left-full top-1/2 -translate-x-[50%] -translate-y-[50%]">
            {"AH2 & MATT HORN".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[2]}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.01,
                  duration: 0.5,
                }}
                key={index}
                className="inline-block"
              >
                {item === " " ? "\u00A0" : item}
              </motion.span>
            ))}
          </h1>
          <div className="card overflow-hidden rounded-2xl transform transition-transform duration-[0.8s] hover:scale-[0.94]">
            <img
              className="w-full h-full object-cover transform transition-transform duration-[1.2s] hover:scale-[1.1]"
              src={`${image3}`}
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(3)}
          onHoverEnd={() => handleHoverEnd(3)}
          className="cardContainer relative cursor-pointer"
        >
          <div className="card w-full h-full overflow-hidden rounded-3xl">
            <h1 className="absolute flex overflow-hidden text-[8.5vw] font-[900] tracking-tight font-['Founders_Grotesk_X'] text-[#CDEA68] z-[9] right-full top-1/2 translate-x-[40%] -translate-y-[50%]">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.01,
                    duration: 0.5,
                  }}
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card overflow-hidden rounded-2xl transform transition-transform duration-[0.8s] hover:scale-[0.94]">
              <img
                className="w-full h-full object-cover transform transition-transform duration-[1.2s] hover:scale-[1.1]"
                src={`${image4}`}
                alt=""
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(4)}
          onHoverEnd={() => handleHoverEnd(4)}
          className="cardContainer relative cursor-pointer"
        >
          <h1 className="absolute flex overflow-hidden text-[8.5vw] font-[900] tracking-tight font-['Founders_Grotesk_X'] text-[#CDEA68] z-[9] left-[50%] top-1/2 -translate-x-[50%] -translate-y-[50%]">
            {"PREMIUM BLEND".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[4]}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.01,
                  duration: 0.5,
                }}
                key={index}
                className="inline-block"
              >
                {item === " " ? "\u00A0" : item}
              </motion.span>
            ))}
          </h1>
          <div className="card overflow-hidden rounded-2xl transform transition-transform duration-[0.8s] hover:scale-[0.94]">
            <img
              className="w-full h-full object-cover transform transition-transform duration-[1.2s] hover:scale-[1.1]"
              src={`${image5}`}
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
