import './index.css';
import AboutMe from "./components/AboutMe"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <div className='w-full h-[85px] bg-blue-800'>
        <NavBar />
      </div>

      <div className='w-full h-[800px] bg-blue-600'>
        <AboutMe />
      </div>
      <div className='w-full h-[800px] bg-blue-400'>
        <Portfolio />
      </div>
      
      <div className='w-full h-[85px] bg-gray-600'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
