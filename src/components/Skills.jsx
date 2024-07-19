import { React } from "react";

export default function Skills() {

  return (
    <div className="w-full h-[65%]">
      <div className="w-full h-[15%] flex justify-center items-center flex-col text-center">
        <h1 className="text-white text-3xl font-bold">Moje dovednosti</h1>
        <div className="w-[40px] h-[2px] bg-white"></div>
      </div>
      <div className="w-full h-[60%] flex justify-center items-center flex-col text-center mt-12">
        {/* HTML */}
        <h1 className="mt-2 mb-2 text-white font-bold">HTML</h1>
        <div className="w-[90%] h-[55px] bg-sky-950 rounded-full mt-3">
          
          <div className="w-[50%] h-full bg-cyan-800 rounded-full flex justify-start items-center text-white p-6">
            50%
          </div>
        </div>
        {/* CSS */}
        <h1 className="mt-2 mb-2 text-white font-bold">CSS</h1>
        <div className="w-[90%] h-[55px] bg-sky-950 rounded-full mt-3">
          <div className="w-[69%] h-full bg-cyan-800 rounded-full flex justify-start items-center text-white p-6">
            69%
          </div>
        </div>
        {/* JS */}
        <h1 className="mt-2 mb-2 text-white font-bold">JS</h1>
        <div className="w-[90%] h-[55px] bg-sky-950 rounded-full mt-3">
          <div className="w-[42%] h-full bg-cyan-800 rounded-full flex justify-start items-center text-white p-6">
            42%
          </div>
        </div>
      </div>
    </div>
  );
}
