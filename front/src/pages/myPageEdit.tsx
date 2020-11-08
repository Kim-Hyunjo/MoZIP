import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import React, {  useState } from "react";

const myPageEdit = () => { 
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
        </div>
      </div>  
    </div>
  )    
}

export default myPageEdit