import React,{useState} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
  import './guide.css';
  import guide1 from '../images2/guide_selfintro_1@2x.png';
  import guide2 from '../images2/guide_selfintro_2@2x.png';
const guideSelfintroduction = () => {
  return(
    <div className="guide_wrapper">
      <h2>자기소개서함 활용법</h2>
      <img 
        src={ guide1 }
        alt='guide image' />
      <img
        src={ guide2 }
        alt='guide image' />
      <Link to='/mypage/introduction'>
      <button id="button6B">자기소개서 작성하러 가기</button>
      </Link>
    </div>
  )
}

export default guideSelfintroduction;