import './index.css';
import AboutMe from "./components/AboutMe"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <div className='w-full h-[85px] bg-gray-800 align-middle justify-center'>
        <NavBar />
      </div>

      <div className='w-full h-[800px] bg-gray-700 flex align-middle justify-center'>
        <AboutMe />
      </div>
      <div className='w-full h-[800px] bg-gray-700 flex align-middle justify-center'>
        <Portfolio />
      </div>
      
      <div className='w-full h-[85px] bg-gray-600'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
