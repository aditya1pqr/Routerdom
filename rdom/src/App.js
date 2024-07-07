import Navbar from "./components/Navbar";
import { Routes , Route } from "react-router-dom";
import Home from "./components/Home";
import Skill from "./components/Skills";
import Error from "./components/error";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
   <>
     <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Skills" element={<Skills/>}/>
    <Route path="*" element={<Error/>}/>
  
    </Routes>
  
   </>
  );
}

export default App;
