import { React, useState, useEffect } from "react";
// import Memoji1 from "../img/1.png";
import { FaDiscord, FaInstagram, FaGithub  } from "react-icons/fa";
export default function Contacts() {
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
          ? "h-[145%]"
          : windowWidth <= 1680
          ? "h-[60%]"
          : "h-[50%]"
      } bg-neutral-900 flex justify-center items-start overflow-y overflow-x-hidden`}
    >
      <div className="flex flex-col justify-center items-center mt-24">
        <div
          className={`grid gap-6 ${
            windowWidth <= 890
              ? "grid-cols-1"
              : windowWidth <= 1680
              ? "grid-cols-3"
              : "grid-cols-3"
          } justify-center items-center mt-4`}
        >
          <div className="bg-neutral-800 w-[260px] h-[235px] rounded-xl overflow-hidden flex flex-col justify-center items-center hover:-translate-y-5 hover:transition">
          <a href="https://discordapp.com/users/714505079163715625">
          <div className=" w-[150px] h-[150px] rounded-full flex justify-center items-center bg-neutral-700">
              <FaDiscord className=" w-[120px] h-[120px] text-white" />
            </div>
          </a>   
            

            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-row mt-3">
                <h1 className="text-2xl text-white font-bold">Discord</h1>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800 w-[260px] h-[235px] rounded-xl overflow-hidden flex flex-col justify-center items-center hover:-translate-y-5 hover:transition">
          <a href="https://discordapp.com/users/714505079163715625">
          <div className=" w-[150px] h-[150px] rounded-full flex justify-center items-center bg-neutral-700">
              <FaInstagram className=" w-[120px] h-[120px] text-white" />
            </div>
          </a>  

            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-row mt-3">
                <h1 className="text-2xl text-white font-bold">Instagram</h1>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800 w-[260px] h-[235px] rounded-xl overflow-hidden flex flex-col justify-center items-center hover:-translate-y-5 hover:transition">
          <a href="https://discordapp.com/users/714505079163715625">
          <div className=" w-[150px] h-[150px] rounded-full flex justify-center items-center bg-neutral-700">
              <FaGithub className=" w-[120px] h-[120px] text-white" />
            </div>
          </a>  

            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-row mt-3">
                <h1 className="text-2xl text-white font-bold">GitHub</h1>
              </div>
            </div>
          </div>
          {/* Put more cards here */}
        </div>
      </div>
    </div>
  );
}
