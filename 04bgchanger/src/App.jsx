import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ background: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-sm px-3 rounded-sm bg-white">
            <button
              className="outline-none px-4"
              style={{ background: color }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4"
              style={{ background: color }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4"
              style={{ background: color }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4"
              style={{ background: color }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
