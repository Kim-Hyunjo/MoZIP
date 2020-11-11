import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const CircleOpenReject = () => {
  return (
    <div>
      <div>
        <h2>동아리 승인이 거절되었습니다.</h2>
        <div>동아리 개설을 신청해주셔서 감사합니다.</div>
        <div>동아리 승인 거절에 대한 이유는 다음과 같습니다.</div>
        <div>: 부적절함, 부적합함</div>
      </div>

      <br />

      <div>
        <Link to="/mypage">
          <button>My Page로 가기</button>
        </Link>
      </div>
    </div>
  );
};

export default CircleOpenReject;
