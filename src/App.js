import React, {useContext} from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import DarkContext from "./context/DarkContext";

const App = () => {
  const dark = useContext(DarkContext);
  const handleClick = () => {
    dark.switchTheme();
    console.log("The theme has changed.");
  };
  return (
    <>
      <Navbar click={handleClick} obj={dark} />
      <Home click={handleClick} obj={dark} />
    </>
  );
};

export default App;
