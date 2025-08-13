import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx"; // example
import About from "./components/About.jsx"; // example
import './styles/globals.css'; // global styles

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      {/* other sections */}
    </>
  );
}

export default App;



