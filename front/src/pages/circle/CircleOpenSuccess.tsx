import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const CircleOpenSuccess = () => {
  return (
    <div>
      <div>
        <h1>개설 요청 완료</h1>
        <div>Mo:ZIP에 동아리 등록을 요청해주셔서 감사합니다.</div>
        <div>최대한 빠르게 확인한 후, 등록해드리겠습니다.</div>
      </div>
      <Link to="/mypage">
        <button>My Page로 가기</button>
      </Link>
    </div>
  );
};

export default CircleOpenSuccess;
