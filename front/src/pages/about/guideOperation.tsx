import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
// import './trying_animation.css';
// import banner1_words from '../images2/banner1_words@2x.png';
// import imgA from '../images2/card_owner.png';
// import imgB from '../images2/card_user.png';
// import imgC from '../images2/whatis@2x.png';
// import scroller from './animation.js'; 
import imgA from '../images2/operation1@2x.png';
import imgB from '../images2/operation2@2x.png';
const guideOperation = () => {
  return (
    <div className="guide_wrapper">
      <h2>동아리 운영하기</h2>
      <img
        className=""
        src={imgA}
        alt='guide image' />
      <img
        className=""
        src={imgB}
        alt='guide image' />
    </div>
  )
}

export default guideOperation;