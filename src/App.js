import React from 'react';
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import About from './Components/About/About'
import Music from './Components/Music/Music'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <About/>
      <Music/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
