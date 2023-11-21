import React from "react";
import Header from "./components/Header";
import Howitwork from "./components/Howitwork";
import About from "./components/About";
import Agent from "./components/Agent";
import Properties from "./components/Properties";
function App() {
  return (
    <div className="App">
      <Header/>
      <Howitwork/>
      <About/>
      <Agent/>
      <Properties/>
    </div>
  );
}

export default App;
