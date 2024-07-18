import React from 'react'
import ReactChatImage from '../img/ReactChat-Showcase.png';
import ReactToDoImage from '../img/ReactToDo-Showcase.png';
import MSWebImage from '../img/MSWeb-Showcase.png';
export default function Portfolio() {
  return (
    <div className='flex flex-col items-center justify-start' id='projects'>
      <div className='w-[200px] h-[45px] bg-gray-600 rounded-2xl mt-6 mb-4 flex items-center justify-center font-bold text-white text-xl'>
        <h1>Projects</h1>
      </div>

      <div className='flex flex-row gap-2 mt-18 mb-24'>
        
      <div className='w-[480px] h-[550px] rounded-xl bg-gray-900 mt-6 mb-6'>
          <div className='w-[450px] h-[520px] mt-4 mb-4 ml-4 mr-4 rounded-xl bg-gray-100'>
            <div className='w-full h-[220px] rounded-xl bg-black'>
              <img src={ReactChatImage} alt="Profile" className="w-[450px] h-[220px] object-cover absolute rounded-xl"/>
            </div>
            <div className='flex items-center justify-center mt-3 flex-col'>
              <h1 className='text-2xl font-bold'>ReactChat</h1>
              <div className='w-[85%] h-[1px] bg-black'></div>
              <h1 className='text-xl text-pretty text-center translate-y-3 '>Aplikace napsaná v React.js, <br />která umožňuje komunikaci mezi uživateli, jako například discord.</h1>
            </div>
          </div>
        </div>

        <div className='w-[480px] h-[550px] rounded-xl bg-gray-900 mt-6 mb-6'>
          <div className='w-[450px] h-[520px] mt-4 mb-4 ml-4 mr-4 rounded-xl bg-gray-100'>
            <div className='w-full h-[220px] rounded-xl bg-black'>
              <img src={ReactToDoImage} alt="Profile" className="w-[450px] h-[220px] object-cover absolute rounded-xl"/>
            </div>
            <div className='flex items-center justify-center mt-3 flex-col'>
              <h1 className='text-2xl font-bold'>ReactToDo</h1>
              <div className='w-[85%] h-[1px] bg-black'></div>
              <h1 className='text-xl text-pretty text-center translate-y-3 '>Aplikace napsaná v React.js, <br />která funguje jako seznam nadcházejících událostí, které si uživatel přidá.</h1>
            </div>
          </div>
        </div>

         <div className='w-[480px] h-[550px] rounded-xl bg-gray-900 mt-6 mb-6'>
          <div className='w-[450px] h-[520px] mt-4 mb-4 ml-4 mr-4 rounded-xl bg-gray-100'>
            <div className='w-full h-[220px] rounded-xl bg-gray-100'>
            <img src={MSWebImage} alt="Profile" className="w-[450px] h-[220px] object-cover absolute rounded-xl"/>
            </div>
            <div className='flex items-center justify-center mt-3 flex-col'>
              <h1 className='text-2xl font-bold'>MasterSurvival Web</h1>
              <div className='w-[85%] h-[1px] bg-black'></div>
              <h1 className='text-xl text-pretty text-center translate-y-3 '>Webová stránka napsaná v React.js pro server MasterSurvival.eu</h1>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}
