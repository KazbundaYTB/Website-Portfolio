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
      className={`w-full ${windowWidth <= 890
        ? "h-[180%]"
        : windowWidth <= 1680
          ? "h-[150%]"
          : "h-[150%]"
        } bg-neutral-900 flex justify-center items-start overflow-y overflow-x-hidden`}
    >
      <div className="flex flex-col justify-center items-center mt-24">



        <div
          className={`grid gap-4 ${windowWidth <= 890
            ? "grid-cols-1"
            : windowWidth <= 1680
              ? "grid-cols-2"
              : "grid-cols-3"
            } justify-center items-center mt-4`}
        >
          {/* <div className="bg-neutral-800 w-[400px] h-[400px] rounded-xl overflow-hidden flex flex-col justify-start items-center gap-2">
            <div className=" w-[90%] h-[55%] rounded-xl bg-black mt-4" style={{
              backgroundImage: `url(${Project1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-col ">
                <h1 className="text-2xl text-white font-bold">---</h1>

                
              </div>

            </div>
            <div className="w-[85%] h-[35px] flex justify-start items-center gap-1">
              <div className="w-[25%] h-[85%] bg-sky-400 rounded-lg bg-opacity-100 flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">REACT</h1>
              </div>
              <div className="w-[45%] h-[85%] bg-sky-700 rounded-lg bg-opacity-100 flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">TAILWIND CSS</h1>
              </div>
            </div>
            <div className=" w-full h-[15%] mt-16 flex justify-start items-center gap-2 ">
              <div className=" w-[5px] h-[95%] ml-4 mb-4 bg-white rounded-xl "></div>
              <div className="flex flex-col justify-center items-start mb-4">
              <a href="https://chat.richardpavlik.eu"><p className="text-xl text-blue-600 hover:text-blue-500 font-semibold">https://chat.richardpavlik.eu/</p></a> 
                <h1 className=" text-white ">Release date: XX.XX. XXXX</h1>
              </div>
            </div>

          </div>  */}


          <div className="bg-neutral-800 w-[400px] h-[400px] rounded-xl overflow-hidden flex flex-col justify-start items-center gap-2"> {/*  CARD #4 START */}
            <div className=" w-[90%] h-[55%] rounded-xl bg-black mt-4" style={{
              backgroundImage: `url(${Project1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-col ">
                <h1 className="text-2xl text-white font-bold">MasterSurvival.eu Web</h1>

                
              </div>

            </div>
            <div className="w-[85%] h-[35px] flex justify-start items-center gap-1">
              <div className="w-[25%] h-[85%] bg-sky-400 rounded-lg bg-opacity-100 flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">REACT</h1>
              </div>
              <div className="w-[45%] h-[85%] bg-sky-700 rounded-lg bg-opacity-100 flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">TAILWIND CSS</h1>
              </div>
            </div>
            <div className=" w-full h-[15%] mt-16 flex justify-start items-center gap-2 ">
              <div className=" w-[5px] h-[95%] ml-4 mb-4 bg-white rounded-xl "></div>
              <div className="flex flex-col justify-center items-start mb-4">
              <a href="https://ms.richardpavlik.eu"><p className="text-xl text-blue-600 hover:text-blue-500 font-semibold">https://ms.richardpavlik.eu/</p></a> 
                <h1 className=" text-white ">Release date: 16.6. 2024</h1>
              </div>
            </div>

          </div> {/*  CARD #4 END */}

          <div className="bg-neutral-800 w-[400px] h-[400px] rounded-xl overflow-hidden flex flex-col justify-start items-center gap-2"> {/*  CARD #5 START */}
            <div className=" w-[90%] h-[55%] rounded-xl bg-black mt-4" style={{
              backgroundImage: `url(${Project1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-col ">
                <h1 className="text-2xl text-white font-bold">UniverseNode.eu Web</h1>

                
              </div>

            </div>
            <div className="w-[85%] h-[35px] flex justify-start items-center gap-1">
              <div className="w-[25%] h-[85%] bg-sky-400 rounded-lg bg-opacity-100 flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">REACT</h1>
              </div>
              <div className="w-[45%] h-[85%] bg-sky-700 rounded-lg bg-opacity-100 flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">TAILWIND CSS</h1>
              </div>
            </div>
            <div className=" w-full h-[15%] mt-16 flex justify-start items-center gap-2 ">
              <div className=" w-[5px] h-[95%] ml-4 mb-4 bg-white rounded-xl "></div>
              <div className="flex flex-col justify-center items-start mb-4">
              <a href="https://un.richardpavlik.eu"><p className="text-xl text-blue-600 hover:text-blue-500 font-semibold">https://un.richardpavlik.eu/</p></a> 
                <h1 className=" text-white ">Release date: 13.6. 2024</h1>
              </div>
            </div>

          </div> {/*  CARD #5 END */}
          

          <div className="bg-neutral-800 w-[400px] h-[400px] rounded-xl overflow-hidden flex flex-col justify-start items-center gap-2"> {/*  CARD #1 START */}
            <div className=" w-[90%] h-[55%] rounded-xl bg-black mt-4" style={{
              backgroundImage: `url(${Project1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-col ">
                <h1 className="text-2xl text-white font-bold">ReactToDO</h1>

                
              </div>

            </div>
            <div className="w-[85%] h-[35px] flex justify-start items-center gap-1">
              <div className="w-[25%] h-[85%] bg-sky-400 rounded-lg bg-opacity-100 flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">REACT</h1>
              </div>
              <div className="w-[45%] h-[85%] bg-sky-700 rounded-lg bg-opacity-100 flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">TAILWIND CSS</h1>
              </div>
            </div>
            <div className=" w-full h-[15%] mt-16 flex justify-start items-center gap-2 ">
              <div className=" w-[5px] h-[95%] ml-4 mb-4 bg-white rounded-xl "></div>
              <div className="flex flex-col justify-center items-start mb-4">
              <a href="https://todo.richardpavlik.eu"><p className="text-xl text-blue-600 hover:text-blue-500 font-semibold">https://todo.richardpavlik.eu/</p></a> 
                <h1 className=" text-white ">Release date: 31.5. 2024</h1>
              </div>
            </div>

          </div> {/*  CARD #2 END */}

          <div className="bg-neutral-800 w-[400px] h-[400px] rounded-xl overflow-hidden flex flex-col justify-start items-center gap-2"> {/*  CARD #1 START */}
            <div className=" w-[90%] h-[55%] rounded-xl bg-black mt-4" style={{
              backgroundImage: `url(${Project1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-col ">
                <h1 className="text-2xl text-white font-bold">ReactChat</h1>

                
              </div>

            </div>
            <div className="w-[85%] h-[35px] flex justify-start items-center gap-1">
              <div className="w-[25%] h-[85%] bg-sky-400 rounded-lg bg-opacity-100 flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">REACT</h1>
              </div>
              <div className="w-[45%] h-[85%] bg-sky-700 rounded-lg bg-opacity-100 flex justify-center items-center">
                <h1 className="text-white text-xl font-bold">TAILWIND CSS</h1>
              </div>
            </div>
            <div className=" w-full h-[15%] mt-16 flex justify-start items-center gap-2 ">
              <div className=" w-[5px] h-[95%] ml-4 mb-4 bg-white rounded-xl "></div>
              <div className="flex flex-col justify-center items-start mb-4">
              <a href="https://chat.richardpavlik.eu"><p className="text-xl text-blue-600 hover:text-blue-500 font-semibold">https://chat.richardpavlik.eu/</p></a> 
                <h1 className=" text-white ">Release date: 4.4. 2024</h1>
              </div>
            </div>

          </div> {/*  CARD #2 END */}









          {/* Additional cards can be added here */}

        </div>
      </div>
    </div>
  );
}
