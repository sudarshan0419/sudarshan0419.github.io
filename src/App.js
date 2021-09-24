import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Routes from "./Routes";

function App() {

  return (
    <div className="App">
      <div id="container">
        <Router>
          <div class="nav">
            <nav>
              <ul>
                <li><NavLink exact activeStyle={{ color: "#6ADC0B", borderBottom: "1px solid #6ADC0B" }} to="/" className="home">home</NavLink></li>
                <li><NavLink activeStyle={{ color: "#0175BE", borderBottom: "1px solid #0175BE" }} to="/about" className="about">about</NavLink></li>
                <li><NavLink activeStyle={{ color: "#F4303C", borderBottom: "1px solid #F4303C" }} to="/stuff" className="stuff">stuff</NavLink></li>
                <li><NavLink activeStyle={{ color: "#F5EF17", borderBottom: "1px solid #F5EF17" }} to="/morestuff" className="morestuff">more stuff</NavLink></li>
              </ul>
            </nav>
            <Routes />
          </div>
        </Router>
      </div>
      <footer id="footer">
        <div class="content">
          <nav class="menu">
            <ul>
              <li class="leaf"><a href="https://www.linkedin.com/in/sudarshan-pillai-00a586119/" target="_blank"><i class="icon fa fa-linkedin"></i></a></li>
              <li class="leaf"><a href="https://github.com/sudarshan0419" target="_blank"><i class="icon fa fa-github"></i></a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
