import React, { useRef, useState } from "react";


import "./App.css";
import ImageSlider from "./Imageslider";

function App() {
  const homeref = useRef();
  const contactRef = useRef();
  const [activeimage,setactiveimage] = useState(null);
  const Drawer_sleve = [
    "/page_3.png",
    "/page_4.png",
    "/page_5.png",
    "/page_17.png",
  ];
  const end_table = ["/page_7.png", "/page_8.png"];
  const side_table = ["/page_10.png", "/page_11.png", "/side_table_withsleve.png"];
  const nested_table = ["/page_12.png", "/page_13.png", "/page_14.png"];
  const folding_table = ["/page_15.png"];
  const beside_table = ["/page_9.png"];
  

  // const view =({data}) =>{
  //   return (
  //     <div className="h-full w-full">
  //       <ImageSlider images={data} height="h-full" />
        
  //     </div>
  //   )
  // }

  return (
    
    <div className="relative mt-0 w-full h-screen ">
       <div className="fixed w-full z-10 md:mt-5   ">
          <ul className="flex gap-10 md:justify-end md:mr-10 md:gap-15 ml-3 ">
            <li  onClick={() =>
              homeref.current.scrollIntoView({ behavior: "smooth" })
            } className="text-md md:text-xl font-sans  font-semibold hover:cursor-pointer hover:text-amber-700">
              Home
            </li> 

             <li 
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            } className="text-md md:text-xl font-sans font-semibold hover:cursor-pointer hover:text-amber-700">
              Contact
            </li>
          </ul>
        </div>
      {/* first page */}
      <div ref={homeref} className="relative  md:h-full w-full bg-gray-100 ">
        <img
          className=" md:left-20 w-full md:h-[30%] mt-3 h-[15%] md:object-contain md:-rotate-8 object-cover"
          src="/page_1.png"
          alt="Mehakart Logo"
        />
       
        <div className=" flex p-3 gap-3 item-start">
          <img src="/image1.png" alt="Mehakart Logo" className=" md:absolute md:w-72 top-2 w-40 h-40 object-cover flex shrink-0" />
          <p className=" z-10 md:pl-53 md:text-lg text-sm font-sans font-semibold leading-relaxed">
            A modern type of furniture can radically transform the whole look of
            the home, offices etc. Modern furniture look very hospitable &
            comfortable and to give a cozy look. Nothing complements a beautiful
            area the way modern luxury furniture does.
          </p>
        </div>

        
        <div  className="grid grid-cols-2 gap-3 px-3  md:grid-cols-3 md:px-5">
    {/* CARD */}
    <div className="bg-gray-300 border rounded-md overflow-hidden md:h-[280px] flex flex-col">
      <img
        src="/side_table.png"
        className="w-full aspect-square md:h-52 md:object-cover object-center"
        alt="Side Table"
      />
      <div className="p-2 flex-1 flex flex-col justify-between  ">
        <p className="text-sm font-semibold text-center">Side Table</p>
        <button
          onClick={() => setactiveimage(side_table)}
          className="mt-2 bg-amber-700 w-full text-white py-1 rounded-md"
        >
          View More
        </button>
      </div>
    </div>

    <div className="bg-gray-300 border rounded-md overflow-hidden  md:h-[280px] flex flex-col">
      <img
        src="/nesting_table.png"
        className="w-full aspect-square md:h-52 md:object-center object-center"
        alt="Nesting Table"
      />
      <div className="p-2">
        <p className="text-sm font-semibold text-center">Nesting Table</p>
        <button
          onClick={() => setactiveimage(nested_table)}
          className="mt-2 bg-amber-700 w-full text-white py-1 rounded-md"
        >
          View More
        </button>
      </div>
    </div>

    <div className="bg-gray-300 border rounded-md overflow-hidden md:h-[280px] flex flex-col">
      <img
        src="/folding_table.png"
        className="w-full aspect-square md:h-52 md:object-cover object-center"
        alt="Folding Table"
      />
      <div className="p-2">
        <p className="text-sm font-semibold text-center">Folding Table</p>
        <button
          onClick={() => setactiveimage(folding_table)}
          className="mt-2 bg-amber-700 w-full text-white py-1 rounded-md"
        >
          View More
        </button>
      </div>
    </div>

    <div className="bg-gray-300 border rounded-md overflow-hidden md:h-[280px] flex flex-col">
      <img
        src="/cut_page_9.png"
        className="w-full aspect-square md:h-52 md:object-center object-center"
        alt="Bedside Table"
      />
      <div className="p-2">
        <p className="text-sm font-semibold text-center">
          Bedside table with glass
        </p>
        <button
          onClick={() => setactiveimage(beside_table)}
          className="mt-2 bg-amber-700 w-full text-white py-1 rounded-md"
        >
          View More
        </button>
      </div>
    </div>

    <div className="bg-gray-300 border rounded-md overflow-hidden md:h-[280px] flex flex-col">
      <img
        src="/drawer.png"
        className="w-full aspect-square md:h-52 md:object-center object-center"
        alt="Drawer"
      />
      <div className="p-2">
        <p className="text-sm font-semibold text-center">Drawer</p>
        <button
          onClick={() => setactiveimage(Drawer_sleve)}
          className="mt-2 bg-amber-700 w-full text-white py-1 rounded-md"
        >
          View More
        </button>
      </div>
    </div>

    <div className="bg-gray-300 border rounded-md overflow-hidden md:h-[280px] flex flex-col">
      <img
        src="/endtable_sleve.png"
        className="w-full aspect-square md:h-52 md:object-center object-center"
        alt="End Table"
      />
      <div className="p-2">
        <p className="text-sm font-semibold text-center">
          End table with Sleeve
        </p>
        <button
          onClick={() => setactiveimage(end_table)}
          className="mt-2 bg-amber-700 w-full text-white py-1 rounded-md"
        >
          View More
        </button>
      </div>
    </div>
    </div>
    <div ref={contactRef} className="mt-2 px-2">
            <img src="/page_18.png" alt="end" className="w-full object-center md:object-center md:w-[1500px] md:h-[400px]"/> 
    </div>
            {activeimage && (
        <div className="fixed inset-0 md:z-40 md:w-full bg-black/60 flex items-center justify-center">
          <div className="bg-white p-1 rounded-md md:w-full ">
            
            <button
              className="text-right text-red-600 font-bold"
              onClick={() => setactiveimage(null)}
            >
              ✕ Close
            </button>

            <ImageSlider images={activeimage} height="h-[400px] md:h-[85vh] " />
          </div>
        </div>
      )}        
    </div>
    </div>
        
         
    
    

      
    
  );
}

export default App;
