import React from "react";
import Home from './components/Home';
import ParticlesReact from "./components/Particles";
import { Register } from "./components/Register";

function App() {
  return (
    <div className="App">
      <ParticlesReact/>
      <Home/>
      {/* <Register/> */}
    </div>
  );
}

export default App;
