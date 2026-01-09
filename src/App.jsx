import React from "react";
import { useRef } from "react";



import "./App.css";
import ImageSlider from "./Imageslider";

function App() {
  const contactRef = useRef(null);
  const homeref = useRef(null);
  const Drawer_sleve = [
    "public/page_3.png",
    "public/page_4.png",
    "public/page_5.png",
    "public/page_17.png",
    
  ];
  const end_table = [
    "public/page_7.png",
    "public/page_8.png",
   
  ];
  const side_table = [
    "public/page_10.png",
    "public/page_11.png", 
    "public/page_16.png", 

  ];
  const nested_table = [
    "public/page_12.png",
    "public/page_13.png", 
    "public/page_14.png"
  ];
  const folding_table = [
    "public/page_15.png",
  ];
  const beside_table=[
    "public/page_9.png",
  ]

  return (
    <div className="relative w-full h-screen ">
      <div className="h-full w-full border-2 ">
        <img
          className="w-full h-full md:object-center object-contain"
          src="public/page_1.png"
          alt="Mehakart Logo"
        />
      </div>

      <nav className="w-full ">
        <div className="fixed w-full z-10 top-5 ">
          <ul className="flex justify-center gap-30 ">
            <li  onClick={() =>
              homeref.current.scrollIntoView({ behavior: "smooth" })
            } className="text-lg md:text-xl font-sans  font-semibold hover:cursor-pointer hover:text-amber-700">
              Home
            </li>
            
            <li 
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            } className="text-xl font-sans font-semibold hover:cursor-pointer hover:text-amber-700">
              Contact
            </li>
          </ul>
        </div>
      </nav>
      <div ref={homeref} className="h-full w-full border-2 mt-2 ">
        <img
          className="w-full h-[98%] md:object-cover object-center"
          src="public/page_2.png"
          alt="Mehakart Logo"
        />
      </div>
      <div className="relative md:mt-2 w-full h-full">
        <ImageSlider images={Drawer_sleve} height="h-full" />
      </div>
      <div className="relative mt-2 w-full h-full">
        <ImageSlider images={end_table} height="h-full" />
      </div>
      <div className="relative mt-2 w-full h-full">
        <ImageSlider images={side_table} height="h-full" />
      </div>
      <div className="relative mt-2 w-full h-full">
        <ImageSlider images={nested_table} height="h-full" />
      </div>
      <div className="relative mt-2 w-full h-full">
        <ImageSlider images={folding_table} height="h-full" />
      </div>
      <div className="relative mt-2 w-full h-full">
        <ImageSlider images={beside_table} height="h-full" />
      </div>
      <div ref={contactRef} className="h-[80%] md:h-full  w-full border-2">
        <img
          className="w-full h-full md:h-[99%] md:object-center object-contain"
          src="public/page_18.png"
          alt="Mehakart Logo"
        />
      </div>


      

    </div>
  );
}

export default App;
