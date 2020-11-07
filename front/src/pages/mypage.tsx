import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import React, {  useState } from "react";

const mypage = () => { 
  const personalInfo = {name: "최우영", sort:"직장인", school:"테이브대학교", major:"서핑학과", grade:"3", state:"재학", birth: "2020.11.07", phoneNum: "010-0000-0000", email: "tave@naver.com", address:"서울시 강남구"};
  const personalApplyHistory = [{name: "~내가 지원한 동아리~", introduction:"~동아리의 상세설명~"},{name: "~내가 지원한 동아리2~", introduction:"~동아리의 상세설명2~"}]
  return(
    <div>
        <h1>개인정보 수정   </h1>
        <div className="wrapper">
        <div className="form-wrapper">
        <div>
            {/* 사진추가부분 */}
        </div>
        <form  noValidate>
            <div className="이름">
                <label htmlFor="firstName">이름:</label>
                <input type="text" className="" placeholder="이름" name= "name" 
                />
            </div>
           
            <div className="학교">
                <label htmlFor="학교">학교:</label>
                <input type="text" className="" placeholder="학교" name= "name" 
               />
            </div>
            <div className="전공">
                <label htmlFor="전공">전공:</label>
                <input type="text" className="" placeholder="전공" name= "name" 
                />
            </div>
            <div className="전화번호">
                <label htmlFor="firstName">전화번호:</label>
                <input type="text" className="" placeholder="전화번호" name= "name" 
                />
            </div>
            <div className="이메일">
                <label htmlFor="이메일">이메일:</label>
                <input type="text" className="" placeholder="이메일" name= "name" 
               />
            </div>
            </form>

           
        {/* 학년
        생년월일 */}
        {/* 거주지역 */}
        </div>
        </div>  
      {/* <div id="namecard">
        {personalInfo.name} <br></br>
        학교 및 학과 : {personalInfo.school} {personalInfo.major}<br></br>
        학년 : {personalInfo.grade}학년 {personalInfo.state}중 <br></br>
        생년월일 : {personalInfo.birth} <br></br>
        전화번호 : {personalInfo.phoneNum} <br></br>
        이메일 : {personalInfo.email} <br></br>
        거주지 : {personalInfo.address}<br></br>
        <button>수정하기</button>
      </div>
<<<<<<< HEAD
      <button>자기소개함 관리</button>
=======
      <Link to="./mypage/introduction"><button>자기소개함 관리</button></Link>
      
      <div id="applyCurrent">
        나의 지원 현황
        <ul id="small box">
          <li>
            {personalApplyCurrent[0].name} <br></br>
            {personalApplyCurrent[0].introduction}<br></br>
            <button>최종 결과 확인</button>
          </li>
          <li>
            {personalApplyCurrent[1].name} <br></br>
            {personalApplyCurrent[1].introduction}<br></br>
            <button>지원서 수정하기</button>
          </li>
        </ul>
      </div>
>>>>>>> develop
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
      </div> */}
    </div>
  )
    
}

export default mypage