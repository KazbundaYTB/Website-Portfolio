import React from 'react';
import { IoHome } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
export default function NavBar() {
  return (
    <div className='flex justify-center items-center h-full'>
      <button className='bg-transparent text-white rounded-full px-4 py-2 font-bold '> <a href="#"  className=' flex items-center gap-2'><IoHome /> Domov </a> </button>
      <button className='bg-transparent text-white rounded-full px-4 py-2 font-bold flex items-center gap-2'> <a href="#about" className=' flex items-center gap-2'><FaInfoCircle /> AboutMe</a> </button>
      <button className='bg-transparent text-white rounded-full px-4 py-2 font-bold flex items-center gap-2'> <a href="#projects"className=' flex items-center gap-2'><FaThList /> Projets </a> </button>
    </div>
  );
}
