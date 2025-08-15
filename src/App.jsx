import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx"; // Importing About component
import './styles/globals.css'
 // Importing Title component
// import About from "./components/About"; // Uncomment when needed

function App() {
  return (
    <>
      
      <Header />
      <Hero />
      <About />
      {/* Other sections go here */}
    </>
  );
}

export default App;



