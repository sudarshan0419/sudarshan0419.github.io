import React from 'react';
import { FaBeer } from 'react-icons/fa';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import isaac from './isaac.JPG'
import rainy from './rainy.gif';

function App() {

  return (
    <div className="App">
      <Header/>
      <div id="container">
        <p>
          <span id="name">Isaac Ng</span>
        </p>
      </div>
       {/* <Footer /> */}
    </div>
  );
}

export default App;
