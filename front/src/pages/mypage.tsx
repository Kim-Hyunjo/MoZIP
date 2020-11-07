import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import React, {  useState } from "react";

const mypage = () => { 
  const personalInfo = {name: "최우영", sort:"직장인", school:"테이브대학교", major:"서핑학과", grade:"3", state:"재학", birth: "2020.11.07", phoneNum: "010-0000-0000", email: "tave@naver.com", address:"서울시 강남구"};
  const personalApplyHistory = [{name: "~내가 지원한 동아리~", introduction:"~동아리의 상세설명~"},{name: "~내가 지원한 동아리2~", introduction:"~동아리의 상세설명2~"}]
  return(
    <div>
      <div id="namecard">
        {personalInfo.name} <br></br>
        학교 및 학과 : {personalInfo.school} {personalInfo.major}<br></br>
        학년 : {personalInfo.grade}학년 {personalInfo.state}중 <br></br>
        생년월일 : {personalInfo.birth} <br></br>
        전화번호 : {personalInfo.phoneNum} <br></br>
        이메일 : {personalInfo.email} <br></br>
        거주지 : {personalInfo.address}<br></br>
        <button>수정하기</button>
      </div>
      <button>자기소개함 관리</button>
      <div id="applyHistory">
        <ul id="small box">
          <li>
            {personalApplyHistory[0].name} <br></br>
            {personalApplyHistory[0].introduction}<br></br>
            <button>최종 결과 확인</button>
          </li>
          <li>
            {personalApplyHistory[1].name} <br></br>
            {personalApplyHistory[1].introduction}<br></br>
            <button>지원서 수정하기</button>
          </li>
        </ul>
      </div>
    </div>
  )
    
}

export default mypage