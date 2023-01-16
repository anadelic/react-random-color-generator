import './App.css';
import { useState } from 'react';

export default function App() {
  const [hex, setHex] = useState('#ffffff');
  const randomHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: `${hex}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        transition: '2s',
      }}
    >
      <h1 style={{ fontSize: '48px', color: 'black' }}>
        Generated Color {hex}
      </h1>
      <button
        onClick={randomHex}
        style={{
          margin: '18px 13px',
          padding: '6px',
          fontSize: '20px',
          border: '1px solid black',
        }}
      >
        Generate
      </button>{' '}
    </div>
  );
}
