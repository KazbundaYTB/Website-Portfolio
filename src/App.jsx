import './index.css';
import AboutMe from './components/AboutMe';
export default function App() {
  return (
    <div className='w-screen h-screen bg-slate-900 overflow-x-hidden'>
        <AboutMe />
        <div className='w-screen h-[10%]'></div>
    </div>
  );
}
