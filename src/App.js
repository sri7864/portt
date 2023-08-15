import React from "react";
import "./index.js"
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import About from "./routes/About.jsx";
import Project from "./routes/Project.jsx";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
     <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/project"  element={<Project />}/>
      <Route path="/about"  element={<About />}/>
      <Route path="/contact"  element={<Contact />}/>

     </Routes>
    
    </>
   
  );
}

export default App;
