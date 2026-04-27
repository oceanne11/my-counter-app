import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <div className="top">
        <button onClick={() => setCount(count - 1)}>−</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div className="bottom">
        <button className="reset" onClick={() => setCount(1)}>Reset</button>
      </div>
    </div>
  );
}

export default App;