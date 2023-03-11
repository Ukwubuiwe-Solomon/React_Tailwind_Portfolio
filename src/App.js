import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      
      <About />
      
      <Portfolio />
      <Experience />
      <Contact />
      
      
    
    </div>
  ); 
}

export default App;
