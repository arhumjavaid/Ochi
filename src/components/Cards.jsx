// eslint-disable-next-line no-unused-vars
import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 flex gap-10 justify-center items-center px-20 border-t-2 border-zinc-700">
      <div className="cardContainer w-1/2 -mt-20">
        <div className="card w-full h-[60vh] bg-[#004D43] rounded-2xl flex justify-center items-center relative">
          <img
            className="w-[11vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-4 py-1 rounded-full border-[2.2px] border-[#CDEA68]">
            <span className="text-[#CDEA68] font-[500] text-lg font-['Neue_Montreal']">
              &copy;2019-2022
            </span>
          </button>
        </div>
      </div>
      <div className="cardContainer w-1/2 flex gap-5 -mt-20">
        <div className="card w-1/2 h-[60vh] bg-[#1f1f1f] rounded-2xl flex justify-center items-center relative">
          <img className="w-[11vw]" src="src/assets/logo002.svg" alt="" />
          <button className="absolute left-9 bottom-10 px-4 py-1 rounded-full border-[1px] border-zinc-300 ">
            <span className="font-['Neue_Montreal'] text-zinc-300 font-[500] text-lg uppercase tracking-tight">
              rating 5.0 on clutch
            </span>
          </button>
        </div>
        <div className="card w-1/2 h-[60vh] bg-[#1f1f1f] rounded-2xl flex justify-center items-center relative ">
          <img className="w-[8vw]" src="src/assets/logo003.png" alt="" />
          <button className="absolute left-8 bottom-10 px-4 py-1 rounded-full border-[1px] border-zinc-300 ">
            <span className="font-['Neue_Montreal'] text-zinc-300 font-[500] text-lg uppercase tracking-tight">
              business bootcamp 
            </span>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Cards;
