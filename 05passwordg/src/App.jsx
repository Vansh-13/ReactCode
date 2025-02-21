import { useState, useCallback, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //ref hook
  const passwordInputRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*{}[]";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);


  const copyToClipboard = () => {
    passwordInputRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  return (
    <>
      <h1 className="text-center text-xl my-4">Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-sm px-4 py-6 text-orange-500 bg-gray-700'>
        <div className="mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full text-center py-2 px-3 rounded'
            placeholder='Generated Password'
            readOnly
            ref={passwordInputRef}
          />
        </div>

        <button
          onClick={copyToClipboard}
          className="w-full py-2 mb-4 bg-blue-500 text-white rounded"
        >
          Copy Password
        </button>

        <div className="flex justify-between items-center mb-4">
          <label>Length: {length}</label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
          />
          <label className="ml-2">Include Numbers</label>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)}
          />
          <label className="ml-2">Include Special Characters</label>
        </div>

        <div className="flex justify-center">
          <button
            onClick={passwordGenerator}
            className="bg-green-500 text-white py-2 px-6 rounded"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
