import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Staycation from "./components/Staycation";
import Selection from "./components/Selection";
import Carousel from "./components/Carousel";


function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Destination/>
       <Staycation/>
       <Selection/>
       <Carousel/>
    </div>
  );
}

export default App;
