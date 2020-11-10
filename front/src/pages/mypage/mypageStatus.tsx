import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

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
      <div id="namecard">동아리 모집 현황</div>
      <div>동아리별 부원 모집 과정 현황을 확인해보세요.</div>
      <hr />
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
      <hr />
      <div>
        <div>
          <div>4차 산업 혁명 동아리 Tave 6기 모집</div>
          모집 인원 : 0명 <br></br>
          모집 지역 : 서울, 경기 <br></br>
          참여 대상 : 대학생, 직장인, <br></br>
          일반인 모임 시간 : 미정 <br></br>
        </div>
        <div>
          <button>지원 현황 확인</button>
        </div>
      </div>
      <div>
        <div>
          <div>4차 산업 혁명 동아리 Tave 6기 모집</div>
          모집 인원 : 0명 <br></br>
          모집 지역 : 서울, 경기 <br></br>
          참여 대상 : 대학생, 직장인, <br></br>
          일반인 모임 시간 : 미정 <br></br>
        </div>
        <div>
          <button>지원 현황 확인</button>
        </div>
      </div>
      <div>
        <div>
          <div>4차 산업 혁명 동아리 Tave 6기 모집</div>
          모집 인원 : 0명 <br></br>
          모집 지역 : 서울, 경기 <br></br>
          참여 대상 : 대학생, 직장인, <br></br>
          일반인 모임 시간 : 미정 <br></br>
        </div>
        <div>
          <button>지원 현황 확인</button>
        </div>
      </div>
    </div>
  );
};

export default mypageStatus;
