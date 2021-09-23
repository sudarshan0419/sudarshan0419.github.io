import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/Header"

function App() {
  const [color, changeColor] = useState("#333333");
  const [stored, storeColor] = useState("#333333");

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
      {/* <Footer /> */}
    </div>
    // return (
    //   <div className="App">
    //     <div className="container" style={{ backgroundColor: color }}>
    //       <h1>USEFUL SCIENCE</h1>
    //     </div>
    // <Router>
    //   <div class="nav">
    //     <nav>
    //       <ul>
    //         <li><Link onMouseEnter={() => { storeColor(color); changeColor("#333333") }} onMouseLeave={() => changeColor(stored)} to="/" onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="home">home</Link></li>
    //         <li><Link onMouseEnter={() => { storeColor(color); changeColor("#999999") }} onMouseLeave={() => changeColor(stored)} to="/about" onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="about">about</Link></li>
    //         <li><Link onMouseEnter={() => { storeColor(color); changeColor("#e54b4b") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="stuff">stuff</Link></li>
    //       </ul>
    //     </nav>
    //     <Routes />
    //   </div>
    // </Router>
    //   </div>
  );
}

export default App;


// import React from 'react';
// import { FaBeer } from 'react-icons/fa';
// import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import isaac from './isaac.JPG'
// import rainy from './rainy.gif';

// function App() {

//   return (
//     <div className="App">
//       <Header/>
//       <div id="container">
//         <p>
//           <span id="name">Isaac Ng</span>
//         </p>
//       </div>
//        {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;
