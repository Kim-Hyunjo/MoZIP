import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './button.css';
import './h3lines.css';
import './namecard.css';

const mypageStatus = () => {
  const personalClublist = [
    {
      name: '~나의 동아리~',
      introduction: '~동아리의 상세설명~',
      position: '운영진',
    },
    {
      name: '~나의동아리2~',
      introduction: '~동아리의 상세설명2~',
      position: '회원',
    },
  ];

  return (
    <div>
      <div id="namecard"><h2>동아리 모집 현황</h2></div>
      <h3>
        <div>동아리별 부원 모집 과정 현황을 확인해보세요.</div>
        <br />
      <div>
        동아리 모집 단계는 총 <span>4단계</span>입니다.
      </div>
      <div>
        <span>1. 모집중</span>: 아직 지원을 받고 있는 단계입니다.
      </div>
      <div>
        <span>2. 서류 진행 중</span>: 서류+면접 혹은 서류 전형으로 모집을 하는
        경우에만 해당되며, 서류를 검토하고 있는 단계로 서류 합격을 발표하기 전
        단계입니다.
      </div>
      <div>
        <span>3. 면접 진행 중</span>: 서류+면접 혹은 면접 전형으로 모집하는
        경우에만 해당되며, 죄종 합격을 발표하기 전 단계입니다.
      </div>
      <div>
        <span>4. 회비 입금 대기</span>: 최종 합격을 발표한 후 Mo:ZIP에 아직 합격
        회원들을 등록하지 않은 단계입니다.
      </div>
      </h3>
      <div>
        <div className="gray_namecard">
        <div className="stage_gray_namecard">모집 중</div>
          <div className="title_gray_namecard">4차 산업 혁명 동아리 Tave 6기 모집</div>
          
          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">모집 인원</div>
             0명
          </div> <br></br>
          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">모집 지역</div> 
            서울, 경기
          </div> <br></br>
          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">참여 대상원</div> 
            대학생, 직장인, 일반인
          </div>  <br></br>
          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">모임 시간</div> 
            미정 
          </div> <br></br>
          <Link to ="/recruit/applicants">
            <button className="button_medium3 btn_ingray_namecard">지원 현황 확인</button>
          </Link>
        </div>
        
      </div>
      <div className="gray_namecard">
      <div className="stage_gray_namecard">서류 진행 중</div>
          <div className="title_gray_namecard">다른 동아리 4기 모집</div>

          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">모집 인원</div>
             20명
          </div> <br></br>
          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">모집 지역</div> 
            부산
          </div> <br></br>
          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">참여 대상원</div> 
            대학생, 직장인, 일반인
          </div>  <br></br>
          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">모임 시간</div> 
            미정 
          </div> <br></br>
          <Link to ="/recruit/resume">
            <button className="button_medium3 btn_ingray_namecard">지원자 정보</button>
          </Link>
        </div>
        <div className="gray_namecard">
        <div className="stage_gray_namecard">면접 진행 중</div>
          <div className="title_gray_namecard">또 다른 동아리 20기 모집</div>

          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">모집 인원</div>
             0명
          </div> <br></br>
          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">모집 지역</div> 
            서울
          </div> <br></br>
          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">참여 대상원</div> 
            대학생, 직장인, 일반인
          </div>  <br></br>
          <div className="info_gray_namecard">
            <div className="subject_gray_namecard">모임 시간</div> 
            미정 
          </div> <br></br>
          <Link to ="/recruit/interview">
          <button className="button_medium3 btn_ingray_namecard">면접 상세</button></Link>
        
        </div>
      
    </div>
  );
};

export default mypageStatus;
