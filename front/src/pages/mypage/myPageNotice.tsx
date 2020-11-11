import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './wrappingbox.css';
import './button.css';

const myPageNotice = () => {
  return (
    <div>
    <div className="box">
      <div className="writing"> 
        <div>안녕하세요. TAVE입니다.</div>
        <br />
        <div>TAVE 6기에 최종 합격하게 되신 것을 진심으로 축하드립니다!</div>
        <br />
        <div>회비 및 MT비 입금 관련 안내드리겠습니다.</div>
        <br />
        <div>&lt;회비 입금 안내&gt;</div>
        <div>입금 금액: 3000000민원</div>
        <div>입금 계좌: 카카오뱅크 111-1123123-111(홍길동)</div>
        <br />
        <div>*9월 21일(월) 23:59까지 입금 마감입니다.</div>
        <div>입금 확인 후 회원자격을 부여 받습니다.</div>
        <br />
        <div>기타 문의사항은 카카오톡 플러스 친구를 통해 문의주세요.</div>
        <br />
        <div>&lt;ICE BREAKING 안내&gt;</div>
        <div>
          세부적인 ICE BREAKING 안내는 29일에 단체 체팅방을 통해서 알려드릴 예정입니다.
        </div>
      </div>
    </div>
    <button className="button_medium3 btn_inmiddle">확인</button>
    </div>
  );
};

export default myPageNotice;
