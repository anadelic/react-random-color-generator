import './App.css';

import { useState } from 'react';

export default function App() {
  const [hex, setHex] = useState('#ffffff');
  const randomHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };

  return (
     <div style = {{
      backgroundColor: '#F7F5F2',
     display: ' flex',
     flexDirecton: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     height: '100vh'}} >
      <div
        style={{
          backgroundColor: hex,
          transition: '2s',
          width: '400px',
          height: '400px',
          boxShadow: '1px 2px 3px #F4AAB9',
          fontSize: '48px',
          color: 'black',
          textAlign: 'center',
          margin: '1em'
        }}
      >
        Generated Color: {hex}
      </div>
      <button
          onClick={randomHex}
          style={{
              backgroundColor: '#36A9AE',
              backgroundImage: 'linear-gradient(#37ADB2, #329CA0)',
              border: '1px solid #2A8387',
              borderRadius: '4px',
              boxShadow:' rgba(0, 0, 0, 0.12) 0 1px 1px',
              color:' #FFFFFF',
              display: 'block',
              fontSize: '17px',
              lineHeight: '100%',
              margin: '0',
              outline: '0',
              padding: '11px 15px 12px',
              textAlign: 'center',
}} > Generate </button>
        </div>
        );}
