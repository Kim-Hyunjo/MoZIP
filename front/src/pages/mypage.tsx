import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import React, {  useState } from "react";
import "./namecard.css";
import "./button.css";

const mypage = () => { 
  const personalInfo = {name: "최우영", sort:"직장인", school:"테이브대학교", major:"서핑학과", grade:"3", state:"재학", birth: "2020.11.07", phoneNum: "010-0000-0000", email: "tave@naver.com", address:"서울시 강남구"};
  const personalApplyCurrent = [{name: "~내가 지원한 동아리~", introduction:"~동아리의 상세설명~"},{name: "~내가 지원한 동아리2~", introduction:"~동아리의 상세설명2~"}]
  const personalClublist = [{name: "~나의 동아리~", introduction:"~동아리의 상세설명~", position:"운영진"},{name: "~나의동아리2~", introduction:"~동아리의 상세설명2~", position:"회원"}]
  const personalOpenRequest = [{name: "~개설 요청 동아리~", introduction:"~동아리의 상세설명~", status:"진행중"},{name: "~개설 요청 동아리2~", introduction:"~동아리의 상세설명2~", status:"승인"}]
  const personalApplyHistory = [{name: "~내가 지원한 동아리~", introduction:"~동아리의 상세설명~", status:"합격"},{name: "~내가 지원한 동아리2~", introduction:"~동아리의 상세설명2~", status:"불합격"}]
  
  return(
    <div>
      <h2>My page</h2>
      <div className = "warning">*본인 확인을 위해 사진 포함 모든 정보를 등록해주셔야 동아리 지원이 가능합니다.</div>
      <div className ="big_namecard">
        <div className ="right_side">
          <div className = "name">{personalInfo.name}</div>
          분류 : {personalInfo.sort} <br></br>
          학교 및 학과 : {personalInfo.school} {personalInfo.major}<br></br>
          학년 : {personalInfo.grade}학년 {personalInfo.state}중 <br></br>
          생년월일 : {personalInfo.birth} <br></br>
          전화번호 : {personalInfo.phoneNum} <br></br>
          이메일 : {personalInfo.email} <br></br>
          거주지 : {personalInfo.address}<br></br>
        </div>
        <div className = "button">
          <Link to="./mypage/edit"><button id ='button1'>수정하기</button></Link>
        </div>
      </div>
      <div className = "button_center">
        <button id = 'button10'>자기소개함 관리</button>
      </div>
      <div id="applyCurrent">
        <div className ="middle_title">나의 지원 현황</div>
        <div className = "horizontal_scroll">
          <ul className="my_first_namecard">
            <li>
              <div className = "club_name">{personalApplyCurrent[0].name}</div>
              <div className = "club_intro">{personalApplyCurrent[0].introduction}</div>
              <button id = "button2">최종 결과 확인</button>
            </li>
            <li>
              <div className = "club_name">{personalApplyCurrent[0].name}</div>
              <div className = "club_intro">{personalApplyCurrent[0].introduction}</div>
              <button id = "button2">최종 결과 확인</button>
            </li>
            <li>
              <div className = "club_name">{personalApplyCurrent[0].name}</div>
              <div className = "club_intro">{personalApplyCurrent[0].introduction}</div>
              <button id = "button2">최종 결과 확인</button>
            </li>
            <li>
              <div className = "club_name">{personalApplyCurrent[0].name}</div>
              <div className = "club_intro">{personalApplyCurrent[0].introduction}</div>
              <button id = "button2">최종 결과 확인</button>
            </li>
            <li>
              <div className = "club_name">{personalApplyCurrent[0].name}</div>
              <div className = "club_intro">{personalApplyCurrent[0].introduction}</div>
              <button id = "button2">최종 결과 확인</button>
            </li>
            <li>
              <div className = "club_name">{personalApplyCurrent[0].name}</div>
              <div className = "club_intro">{personalApplyCurrent[0].introduction}</div>
              <button id = "button2">최종 결과 확인</button>
            </li>
          </ul>
        </div>
      </div>
      <div id="applyHistory">
      <div className ="middle_title">My 동아리</div>
        <div className="word_button">
          <Link to="./mypage/status">자세히 보기</Link>
        </div>
        <ul id="small box">
          <li>
            {personalClublist[0].name} <br></br>
            {personalClublist[0].position}<br></br>
            {personalClublist[0].introduction}<br></br>
          </li>
          <li>
            {personalClublist[1].name} <br></br>
            {personalClublist[1].position}<br></br>
            {personalClublist[1].introduction}<br></br>
          </li>
        </ul>
      </div>
      <div id="openRequest">
        동아리 개설 요청
        <ul id="small box">
          <li>
            {personalOpenRequest[0].name} <br></br>
            {personalOpenRequest[0].introduction}<br></br>
            {personalOpenRequest[0].status}<br></br>
          </li>
          <li>
            {personalOpenRequest[1].name} <br></br>
            {personalOpenRequest[1].introduction}<br></br>
            {personalOpenRequest[1].status}<br></br>
          </li>
        </ul>
        <button>개설 요청하기</button>
      </div>
      <div id="applyHistory">
        나의 지원 이력
        <ul id="small box">
          <li>
            {personalApplyHistory[0].name} <br></br>
            {personalApplyHistory[0].status} <br></br>
            {personalApplyHistory[0].introduction}<br></br>
          </li>
          <li>
            {personalApplyHistory[1].name} <br></br>
            {personalApplyHistory[1].status} <br></br>
            {personalApplyHistory[1].introduction}<br></br>
            <button>지원서 수정하기</button>
          </li>
        </ul>
      </div>
    </div>
  )
    
}

export default mypage