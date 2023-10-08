
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    
    <div className="App">
    <header className="App-header">
      <Navbar />
      <Banner />
    </header>
  </div>
  );
}


export default App;
