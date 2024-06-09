import './index.css';
import AboutMe from "./components/AboutMe"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
