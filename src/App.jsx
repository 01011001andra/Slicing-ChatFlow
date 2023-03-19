import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Pages/Experience";
import Features from "./components/Pages/Features";
import Footer from "./components/Pages/Footer";
import Hero from "./components/Pages/Hero";
import Plans from "./components/Pages/Plans";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Experience />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
