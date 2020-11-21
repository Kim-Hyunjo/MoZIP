import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import guide1 from '../images2/guide_registration_1@2x.png';
import guide2_1 from '../images2/guide_registration_2_1@2x.png';
import guide2_2 from '../images2/guide_registration_2_2@2x.png';
import guide2_3 from '../images2/guide_registration_2_3@2x.png';

const guideRegistration = () => {
  return (
    <div className="guide_wrapper">
      <h2>동아리 개설 및 등록</h2>
      <img
        src={guide1}
        alt='guide image' />
      <img
        src={guide2_1}
        alt='guide image' />
      <img
        src={guide2_2}
        alt='guide image' />
      <img
        src={guide2_3}
        alt='guide image' />
      <div>*부원 모집 시작은 My Page -{'>'} 내 동아리 -{'>'} 내 동아리 정보 -{'>'} 모집 시작하기 버튼을 통해 가능합니다.</div>
      <div>*내 동아리 모집 현황은 My Page -{'>'} My 동아리 -{'>'} <Link to="/mypage/status">
        <span>Mozip 현황</span>
      </Link> 에서 확인 가능합니다.</div>

      <Link to='/guide/operation'>
        <button id="button6W">부원 모집 더 알아보기</button>
      </Link>
    </div>
  )
}

export default guideRegistration;