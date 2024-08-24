// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import image from "../assets/Top-Viewbbcbv-1-1440x921.jpg"
const Eyes = () => {

    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) =>{
            let mouseX = e.clientX
            let mouseY = e.clientY

            
            var eyeX = mouseX - window.innerWidth/2
            var eyeY = mouseY - window.innerHeight/2

            var angle = Math.atan2(eyeY, eyeX) * (180/Math.PI)
            // console.log(angle)
            setRotate(angle-180)
            // console.log(a);
            

        })
    })
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.9" style={{backgroundImage:`url(${image})`}} className='relative w-full h-full bg-center bg-cover'>
        <div className="absolute top-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center gap-10">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-[60%] h-[60%] bg-zinc-900 rounded-full flex items-center justify-center relative">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-7 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-[60%] h-[60%] bg-zinc-900 rounded-full flex items-center justify-center relative">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-7 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
