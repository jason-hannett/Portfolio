import React from 'react';
import Header from './Components/Header'
import Landing from './Components/Landing'
import About from './Components/About'
import Music from './Components/Music'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
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
