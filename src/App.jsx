import './index.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
export default function App() {
  return (
    <div className='w-screen h-screen bg-neutral-900 overflow-x-hidden'>
        <AboutMe />
        <Contacts />
        <Skills />
        <Projects />
        
    </div>
  );
}
