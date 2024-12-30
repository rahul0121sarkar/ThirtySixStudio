import "./index.css"
import Canvas from "./canvas"
import data from "./data"
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect,useState,useRef } from 'react';
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);


  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    },[]);



    
  useGSAP(()=>{
    headingRef.current.addEventListener("click",(e)=>{
      setShowCanvas(!showCanvas);
      gsap.set(growingSpan.current,{
       top:e.clientY,
       left:e.clientX,
      });

      gsap.to("body",{
        color:"#000",
        backgroundColor:"#fd2c2a",
        duration:1,
        ease:"power2.inOut",
      });

      gsap.to(growingSpan.current,{
        scale:1000,
        duration:1.2,
        ease:"power4.inOut",
        // onComplete:()=>{
        //   gsap.set("body",{
        //   });
        // }
      });
    })
  },[showCanvas])


  return (
    <>
    <span ref={growingSpan} className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"></span>
    <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
      {showCanvas && data[0].map((canvasdets, index) => (
        <Canvas details={canvasdets}/>
      ))}


   <div className="w-full h-screen relative z-[1] ">
      <nav className=" w-full p-6 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-regular">thirtysixstudios</h1>
          <ul className="flex gap-8">
            {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a 
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-md hover:text-gray-300"
                >{link}</a>
            ))}
          </ul>
        </div>
      </nav>
      <div className="textContainer w-full px-[20%] ">
      <div className="text w-[50%]">
        <h3 className="text-2xl leading-[1.5]  ">At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
        </h3>
        <p className="text-sm w-[87%] mt-4   ">We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.</p>

        <p className="text-sm mt-10 ">Scroll</p>
      </div>
      </div>
      <div className="w-full absolute top-124 left-6 ">
        <h1
        ref={headingRef}
         className="text-[13rem] font-normal tracking-tight">Thirtysixstudio</h1>
      </div>
   </div>


    </div>
    <div className="w-full h-screen relative  mt-28 px-10">
    {showCanvas && data[1].map((canvasdets, index) => (
        <Canvas details={canvasdets}/>
      ))}
      
      
      <h1 className="text-6xl tracking-tighter">About the brand</h1>
      <p className="text-2xl leading-[1.4] w-[80%] mt-10 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugiat quas facilis harum facere animi sunt nobis eius earum, odio officiis unde dolorum quaerat, nemo obcaecati. Fugit dolorem modi quae?
      Temporibus sit reprehenderit suscipit unde tenetur vitae rerum laboriosam tempore libero quia non, natus!
     !</p>

     <img 
     className="w-[80%] mt-10"
     src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400" alt="" />
    </div>
    
   
    </>
  )
}

export default App