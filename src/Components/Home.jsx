import React from 'react';
import logo from '../logo.svg';

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" 
         style={{ height: "100vh", backgroundColor: "white", position: "fixed", width: "100%" }}>
      <header className="text-center">
        <img src={logo} className="App-logo" alt="logo" style={{ width: '400px', height: '400px' }} />
       
      </header>
    </div>
  );
}
