import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (


    <BrowserRouter>
      <Header />
      <div className="App">

        <Route path='/' exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />

      </div>
    </BrowserRouter>


  );
}

export default App;
