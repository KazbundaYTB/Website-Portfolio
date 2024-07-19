import { React, useState, useEffect } from "react";

export default function Skills() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`w-full  flex flex-col justify-start items-center  ${
      windowWidth <= 980
        ? "h-[100%]"
        : "h-[70%]"
    }`}>





      <div className="w-full h-[15%] flex justify-center items-center flex-col text-center">
        <h1 className="text-white text-3xl font-bold">Mé dovednosti</h1>
        <div className="w-[40px] h-[2px] bg-white"></div>
      </div>
      <div className={`w-[75%] h-[60%] flex flex-col justify-center items-start text-start ${
          windowWidth <= 980
            ? "mt-24"
            : "mt-2"
        }`}>
      
        {/* HTML */}
        <div className="w-full mb-4">
          <h1 className="mt-2 mb-2 ml-6 text-white font-bold text-xl">HTML</h1>
          <div className="w-[90%] h-[55px] bg-indigo-900 rounded-full mt-3">
            <div className="w-[75%] h-full bg-indigo-600 rounded-full flex justify-start items-center text-white p-6">
              75%
            </div>
          </div>
        </div>
        {/* CSS */}
        <div className="w-full mb-4">
          <h1 className="mt-2 mb-2 ml-6 text-white font-bold text-xl">CSS</h1>
          <div className="w-[90%] h-[55px] bg-indigo-900 rounded-full mt-3">
            <div className="w-[50%] h-full bg-indigo-600 rounded-full flex justify-start items-center text-white p-6">
              50%
            </div>
          </div>
        </div>
        {/* JS */}
        <div className="w-full mb-4">
          <h1 className="mt-2 mb-2 ml-6 text-white font-bold text-xl">JS/NodeJS</h1>
          <div className="w-[90%] h-[55px] bg-indigo-900 rounded-full mt-3">
            <div className="w-[45%] h-full bg-indigo-600 rounded-full flex justify-start items-center text-white p-6">
              45%
            </div>
          </div>
        </div>
        {/* C# */}
        <div className="w-full mb-4">
          <h1 className="mt-2 mb-2 ml-6 text-white font-bold text-xl">C#</h1>
          <div className="w-[90%] h-[55px] bg-indigo-900 rounded-full mt-3">
            <div className="w-[20%] h-full bg-indigo-600 rounded-full flex justify-start items-center text-white p-6">
              20%
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
