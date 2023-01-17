import './App.css';
import { useState } from 'react';

export default function App() {
  const [hex, setHex] = useState('#ffffff');
  const randomHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: hex,
          transition: '2s',
          display: ' flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          boxShadow: '1px 2px 3px #F4AAB9',
        }}
      >
        <h1 style={{ fontSize: '48px', color: 'black' }}>
          Generated Color: {hex}
        </h1>
      </div>
      <div
        style={{
          transition: '2s',
          display: ' flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          onClick={randomHex}
          style={{
            border: '1px solid black',
            margin: '20px',
            padding: '8px 4px',
          }}
        >
          Generate
        </button>
      </div>
    </>
  );
}
