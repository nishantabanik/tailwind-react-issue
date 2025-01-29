import { useState } from "react";
import LightBulb from "./components/LightBulb";
import './style.css';

const App = () => {
  const [lightOn, serLightOn] = useState(false);
  const togglelight = () => {
    serLightOn((prev) => !prev)
  }
  return (
    <>
      <button onClick={togglelight}>Switch</button>
      <LightBulb lightOn={lightOn} />
    </>
  );
};

export default App;
