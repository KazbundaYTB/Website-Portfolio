import './index.css';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
export default function App() {
  return (
    <div className='w-screen h-screen bg-slate-900 overflow-x-hidden'>
        <AboutMe />
        <Skills />
        
    </div>
  );
}
