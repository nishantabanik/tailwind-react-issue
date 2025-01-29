import { useState } from "react";
import Counter from "./components/counter";
import './index.css'

// You can work here or download the template
// Your components go here

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  // return <div className='text-7xl'>Hello there</div>;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Each Counter has its own state</h2>
      < Counter counter={counter1} setCounter={setCounter1} />
      < Counter counter={counter2} setCounter={setCounter2} />
      < Counter counter={counter3} setCounter={setCounter3} />

      <div style={{ display: 'flex' }}>
        <button onClick={() => {
          setCounter1((prev) => prev - 1)
          setCounter2((prev) => prev - 1)
          setCounter3((prev) => prev - 1)
        }}>Decrease All</button>

        <button onClick={() => {
          setCounter1((prev) => prev + 1)
          setCounter2((prev) => prev + 1)
          setCounter3((prev) => prev + 1)
        }}>Increase All</button>
      </div>
    </div>);
};

export default App;


// Build a React application that includes a Counter component. Render three instances of this Counter component, each with its own state. Pass the state and the function to update it as props to each Counter component. Style the app as you see fit.