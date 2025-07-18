import { useState } from "react";
import HERO from "./sections/hero";
import NAVBAR from "./components/navbar";
import ABOUT from "./sections/about";
import MESSAGE from "./sections/message";
import PROJECTS from "./sections/projects";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NAVBAR name="Test" />
      <HERO />
      <ABOUT />
      <MESSAGE />
      <PROJECTS />
    </>
  );
}

export default App;
