import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero"; // example
import About from "./components/About"; // example
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



