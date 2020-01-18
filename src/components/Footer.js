import React, { useState } from 'react';
import youtube from '../youtube.png';
import linkedin from '../linkedin.png';
import github from '../github.png';
import documenticon from '../document.png';
import './Footer.css';
import Dock from "react-dock";

//Links:
//animated stripe: https://codepen.io/DriftDesign/pen/GYpXNX
//icons here: https://icons8.com/icons/set/github

function Footer() {

  const [count, setCount] = useState(0);

  const linkArr = [
    'https://www.youtube.com/channel/UCeq2YQxG2ODF3k14BSrWbDA?view_as=subscriber',
    'https://www.linkedin.com/in/isaacng97/',
    'https://github.com/byrrice',
    'https://github.com/byrrice',
  ];

  const logoArr = [
    youtube,
    linkedin,
    github,
    documenticon
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
    <Dock dockStyle={{ background: 'rgba(0, 0, 0, 0)' }} size=".07" position='bottom' isVisible={true}>
      <div class="topContainer">
        {logoArr.map((item, index) => (
          <a target="_blank" href={linkArr[index]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}><img src={item} /></a>
        ))}
        <div id="stripe" style={{ left: count, width: '100%' }} />
      </div>
    </Dock>
  );
}

export default Footer;
