import React from 'react';

import './App.css';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
     <Home/>
     
      </header>
    </div>
  );
}

export default App;
