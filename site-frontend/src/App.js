import React from 'react';
import './App.css';
import combine from './combine.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={combine} className="App-logo" alt="logo" />
      <p>Greetings, this is my first React Application!</p>
      <p>May thy walk this new path gracefully, learn a lot, make mistakes, and expouse happiness.</p>
    <a
      className="App-links" 
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >Learn React
      </a>
    </header> 
    </div>
  );
};

export default App;