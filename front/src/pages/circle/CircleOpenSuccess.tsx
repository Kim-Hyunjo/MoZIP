import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./circle.css";

const CircleOpenSuccess = () => {
  return (
    <div>
      <div className="big_namecard">
        <div className="head_info">개설 요청 완료</div>
        <div className="body_info">
          Mo:ZIP에 동아리 등록을 요청해주셔서 감사합니다.<br></br>
          최대한 빠르게 확인한 후, 등록해드리겠습니다.<br></br><br/>
          <span>-MoZIP-</span></div>
      </div>
      <div className="mypageStorageButton">
        <Link to="/mypage">
          <button id= "button10">My Page로 가기</button>
        </Link>
      </div>
    </div>
  );
};

export default CircleOpenSuccess;
