import { React, useState, useEffect } from "react";
import Memoji from "../img/1.png";
import Background from "../img/background.jpg";
import { FaDiscord } from "react-icons/fa";

export default function AboutMe() {
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
    <div className={`w-full h-full`}>
      <div
        className={`w-full h-[75%] flex ${
          windowWidth <= 980
            ? "flex-col w-full h-full justify-center items-center"
            : "flex-row w-full h-full justify-around items-center"
        }`}
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className={`${
            windowWidth <= 980
              ? "flex justify-center items-center flex-col text-center"
              : "flex justify-center items-start flex-col"
          }`}
        >
          <h1 className="text-violet-400 text-3xl font-bold">WEBSITE PROGRAMATOR</h1>
          <h1 className="text-white text-6xl font-mono font-bold">Richard Pavlík</h1>
          <a href="https://discordapp.com/users/714505079163715625">
            <button className="text-white px-4 py-2 bg-indigo-600 rounded-2xl flex flex-row">
              <FaDiscord className="mt-1 mr-2" /> Kazbunda#9069
            </button>
          </a>
        </div>
        <img src={Memoji} alt="" />
      </div>
    </div>
  );
}
