import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import DarkState from "./context/DarkState";

const App = () => {
  return (
    <DarkState>
      <Navbar />
      <Home />
    </DarkState>
  );
};

export default App;
