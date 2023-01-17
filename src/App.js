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
          width: '300px',
          height: '300px',
          border: '2px solid black',
        }}
      >
        {' '}
      </div>
      <div>
        <h1 style={{ fontSize: '48px', color: 'black', textAlign: 'center' }}>
          Generated Color: {hex}
        </h1>{' '}
        <button
          onClick={randomHex}
          style={{
            border: '1px solid black',
            boxShadow: 'black',
            margin: 'auto',
          }}
        >
          Generate
        </button>
      </div>
    </>
  );
}
