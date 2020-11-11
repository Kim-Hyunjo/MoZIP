import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const ListApplySuccess = () => {
  const clubRecruitInfo = [
    {
      name: 'TAVE',
      until_month : '12',
      until_day: '25',
    },
  ];

  return (
    <div>
      <div className="big_namecard">
        <div className="head_info">{clubRecruitInfo[0].name} 지원 완료! </div>
        <div className="body_info">{
          clubRecruitInfo[0].name}에 지원해주셔서 감사합니다.<br></br>
          서류 결과 발표일은 {clubRecruitInfo[0].until_month}월 {clubRecruitInfo[0].until_day}일입니다.<br></br>
          결과는 My page의 '지원현황'에서 확인 가능합니다.
        </div>
      </div>

      <div className="mypageStorageButton">
        <Link to="/mypage">
          <button id="button10">My page로 돌아가기</button>
        </Link>
      </div>
    </div>
  );
};

export default ListApplySuccess;