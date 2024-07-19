import { React, useState, useEffect } from "react";
import Project1 from "../img/background.jpg"

export default function Projects() {
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
    <div
      className={`w-full ${
        windowWidth <= 890
          ? "h-[500%]"
          : windowWidth <= 1680
          ? "h-[150%]"
          : "h-[150%]"
      } bg-neutral-900 flex justify-center items-start overflow-y overflow-x-hidden`}
    >
      <div className="flex flex-col justify-center items-center mt-24">


        <div
          className={`grid gap-4 ${
            windowWidth <= 890
              ? "grid-cols-1"
              : windowWidth <= 1680
              ? "grid-cols-2"
              : "grid-cols-3"
          } justify-center items-center mt-4`}
        >
          <div className="bg-neutral-800 w-[400px] h-[485px] rounded-xl overflow-hidden flex flex-col justify-start items-center">
            <div className=" w-[90%] h-[35%] rounded-xl bg-black mt-4" style={{
          backgroundImage: `url(${Project1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
                
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-row mt-3">
                <h1 className="text-2xl text-white font-bold">ReactChat</h1>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 w-[400px] h-[485px] rounded-xl overflow-hidden flex flex-col justify-start items-center">
            <div className=" w-[90%] h-[35%] rounded-xl bg-black mt-4" style={{
          backgroundImage: `url(${Project1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
                
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-row mt-3">
                <h1 className="text-2xl text-white font-bold">ReactToDo</h1>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 w-[400px] h-[485px] rounded-xl overflow-hidden flex flex-col justify-start items-center">
            <div className=" w-[90%] h-[35%] rounded-xl bg-black mt-4" style={{
          backgroundImage: `url(${Project1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
                
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-row mt-3">
                <h1 className="text-2xl text-white font-bold">ReactWiki</h1>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 w-[400px] h-[485px] rounded-xl overflow-hidden flex flex-col justify-start items-center">
            <div className=" w-[90%] h-[35%] rounded-xl bg-black mt-4" style={{
          backgroundImage: `url(${Project1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
                
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-row mt-3">
                <h1 className="text-2xl text-white font-bold">MasterSurvival Web</h1>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800 w-[400px] h-[485px] rounded-xl overflow-hidden flex flex-col justify-start items-center">
            <div className=" w-[90%] h-[35%] rounded-xl bg-black mt-4" style={{
          backgroundImage: `url(${Project1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
                
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-row mt-3">
                <h1 className="text-2xl text-white font-bold">UniverseNode.eu Web</h1>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800 w-[400px] h-[485px] rounded-xl overflow-hidden flex flex-col justify-start items-center">
            <div className=" w-[90%] h-[35%] rounded-xl bg-black mt-4" style={{
          backgroundImage: `url(${Project1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
                
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-row mt-3">
                <h1 className="text-2xl text-white font-bold">KnightCraft.eu Web</h1>
              </div>
            </div>
          </div>

     

          {/* Additional cards can be added here */}

        </div>
      </div>
    </div>
  );
}
