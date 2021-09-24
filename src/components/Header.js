import React, { useState } from 'react';
import './Header.css';
import Dock from "react-dock";

//Links:
//animated stripe: https://codepen.io/DriftDesign/pen/GYpXNX
//icons here: https://icons8.com/icons/set/github

function Header() {

  const [headerCount, setHeaderCount] = useState(0);

  const styleArr = [
    {color:"#6ADC0B", margin: "20px"},
    {color:"#0175BE", margin: "20px"},
    {color:"#F4303C", margin: "20px"},
    {color:"#F5EF17", margin: "20px"}
  ];

  const textArr = [
    'home',
    'about',
    'work',
    'more_work'
  ];

  const handleMouseEnter = (e, color) => {
    setHeaderCount(e.target.getBoundingClientRect().x-10);
    const headerwidth = e.target.getBoundingClientRect().width + 10 + 10;
    document.getElementById("headerstripe").style.width = headerwidth + "px";
    document.getElementById("headerstripe").style.background = color;
  };

  return (
    <Dock dockStyle={{ background: 'rgba(0, 0, 0, 0)' }} size=".07" position='top' isVisible={true}>
      <div class="topContainer">
        {textArr.map((item, index) => (
          <div ><p style={styleArr[index]} onMouseEnter={(e) => handleMouseEnter(e, styleArr[index].color)}>{item}</p></div>
        ))}
        <div id="headerstripe" style={{ left: headerCount, width: '100%', background: "rgb(196, 188, 190)" }} />
      </div>
    </Dock>
  );
}

export default Header;
