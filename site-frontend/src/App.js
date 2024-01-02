import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import PostDetail from './components/PostDetail'
import './App.css';
import combine from './combine.png';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
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
    </Router>
  );
};

export default App;