import React, { useState } from 'react';
import './Footer.css';
import Dock from "react-dock";

//Links:
//animated stripe: https://codepen.io/DriftDesign/pen/GYpXNX
//icons here: https://icons8.com/icons/set/github

function Header() {

  const [count, setCount] = useState(0);

  const styleArr = [
    {color:"#6ADC0B", margin: "20px"},
    {color:"#0175BE", margin: "20px"},
    {color:"#F4303C", margin: "20px"},
    {color:"#F5EF17", margin: "20px"}
  ];

  const textArr = [
    'home',
    'about',
    'stuff',
    'more_stuff'
  ];

  const handleMouseEnter = (e) => {
    setCount(e.target.getBoundingClientRect().x);
    document.getElementById("stripe").style.width = "64px";
  };

  const handleMouseExit = (e) => {
    setCount(0);
    document.getElementById("stripe").style.width = "100%";
  };

  return (
    <Dock dockStyle={{ background: 'rgba(0, 0, 0, 0)' }} size=".07" position='top' isVisible={true}>
      <div class="topContainer">
        {textArr.map((item, index) => (
          <p style={styleArr[index]}>{item}</p>
        ))}
        {/* <div id="stripe" style={{ left: count, width: '100%' }} /> */}
      </div>
    </Dock>
  );
}

export default Header;
