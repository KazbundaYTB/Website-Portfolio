import React from 'react'
import ProfileImage from '../img/profile.png';
import ProfileBanner from '../img/banner.gif';
import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";

export default function AboutMe() {
  return (
      <div className='w-[1200px] h-[750px] rounded-xl bg-gray-900 mt-6 mb-6 translate-y-9' id='about'>
        <div className='w-full h-[300px] bg-white rounded-xl relative'>
          <img src={ProfileBanner} alt="Profile" className="w-[1200px] h-[300px] object-cover absolute rounded-xl"/>
        </div>
        <div className='flex flex-row space-x-6'>
          <div className='w-[220px] h-[220px] rounded-full bg-green-800 -translate-y-28 translate-x-6 flex items-center justify-center overflow-hidden relative'>
            <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover absolute transform scale-100"/>
          </div>
          <div className='flex flex-col -space-y-12'>
            <div className='w-[320px] h-[45px] bg-gray-900 rounded-xl mt-6 mb-4 flex items-center justify-center font-bold text-white text-xl -translate-y-12 translate-x-6 gap-6'>
              <h1>Kazbunda</h1>

              <button> <a href="https://www.instagram.com/pavlik._.r/"><FaInstagram className="hover:text-green-400" style={{ fontSize: '135%' }}/></a></button>
              <button><a href="https://github.com/KazbundaYTB/"><FaGithub className="hover:text-green-400" style={{ fontSize: '135%' }}/></a></button>
              <button><a href="https://discordapp.com/users/714505079163715625"><FaDiscord className="hover:text-green-400" style={{ fontSize: '135%' }}/></a></button>
            </div>
            <div className='w-[320px] h-[30px] bg-gray-800 rounded-xl mt-6 mb-4 flex items-center justify-center text-white text-xl -translate-y-2 translate-x-6'>
              <h1>Floorball goalie - #23</h1>
            </div>
          </div>
        </div>
        <div className='w-[1150px] h-[280px] rounded-xl translate-x-6 -translate-y-20 bg-gray-700'>
          <div className='w-1/2 h-full bg-transparent rounded-xl text-white'>
            <h1 className='translate-y-6 translate-x-6 text-xl'> About me:</h1>
            <div className='w-[90px] h-[2px] bg-white translate-y-6 translate-x-6'></div>

            <h1 className='translate-y-8 translate-x-8 text-xl'> » 👑 - Majitel: InsanePlay.eu</h1>
            <h1 className='translate-y-8 translate-x-8 text-xl'> » 🥅 - Floorball Goalie - #23</h1>
            <h1 className='translate-y-8 translate-x-8 text-xl'> » 👨‍💻 -  React.JS, TailwindCSS</h1>
            
          </div>
        </div>
      </div>
  )
}
