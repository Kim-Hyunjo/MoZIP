import React,{useState} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
  import './guide.css';

const guideSelfintroduction = () => {
  return(
    <div>
      <h2 className="fonts">Headline</h2>
      <h3 className="fonts">Subtitle 1</h3>
      <h4 className="fonts">Subtitle 2</h4>
      <h5 className="fonts">Body 1</h5>
      <div className="fonts">Body 2</div>
    </div>
  )
}

export default guideSelfintroduction;