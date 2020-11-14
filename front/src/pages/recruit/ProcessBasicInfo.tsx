import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ProcessBasicInfo = () => {
  return (
    <div className="recruit_wrapper">
      <h2>동아리 모집 상세 작성</h2>
      <h3>동아리 모집 공고에 대한 세부적인 내용을 작성해주세요.</h3>
      <div>
        <div className="semititle">간단한 모집 정보</div>
        <div className="simple_recruit_info">
        <div className="recruit_fillin">
          <div className="recruit_fillin_category">모집 인원</div>
          <input className="recruit_write recruit_write1" type="text"></input>
        </div>
        <div className="recruit_fillin">
          <div className="recruit_fillin_category">모임 지역</div>
          <input className="recruit_write recruit_write2" type="text"></input>
        </div>
        <div className="recruit_fillin">
          <div className="recruit_fillin_category">참여 대상</div>
          <label className="recruit_choice">
            <input className="recruit_box" type="checkbox" name="Python" value="대학생" />
            대학생
          </label>
          <label className="recruit_choice">
            <input type="checkbox" name="Python" value="일반인" />
            일반인
          </label>
          <label className="recruit_choice">
            <input type="checkbox" name="Python" value="직장인" />
            직장인
          </label>
        </div>
        <div className="recruit_fillin">
          <div className="recruit_fillin_category">모임 시간</div>
          <input className="recruit_write" type="text"></input>
        </div>
        <div className="recruit_fillin">
          <div className="recruit_fillin_category">대표 페이지</div>
          <input className="recruit_write recruit_write3" type="text"></input>
        </div>
      </div>
      </div>
      <div >
        <div className="semititle semititle2">상세 내용</div>
        <div className="recruit_fillin">
          <div className="recruit_fillin_category">제목</div>
          <textarea className="recruit_essay recruit_essay1" placeholder="제목을 입력해주세요."></textarea>
        </div>
        <div className="recruit_fillin">
          <div className="recruit_fillin_category">내용</div>
          <textarea className="recruit_essay recruit_essay2"
            placeholder="내용을 입력해주세요.

ex. 
안녕하세요! 제 4차 산업혁명 연구 동아리 TAVE에서 6기 회원을 모집합니다.커리큘럼은 4차산업혁명 관련 세션과 스터디 그리고 프로젝트로, 4차 산업혁명에 관한 시야를 넓힐 수 있고 자신의 실력을 향상시킬 수 있도록 
구성했습니다.또한 다양한 분야의 사람들과 교류하며 네트워크를 형성할 수 있습니다!전체 오프라인 모임은 한강 Ice Breaking, OT, 컨퍼런스 총3번 
진행되며 스터디 및 프로젝트 활동은 팀별로 소규모로 진행됩니다.
자세한 내용은 TAVE 카카오톡 플러스 친구를 통해 문의 바랍니다.

▼ 컨퍼런스 동영상https://www.youtube.com/channel/UCLEXVED0YBiMCl7tFCSD7cQ
▼ 컨퍼런스 자료
https://blog.naver.com/t-ave/221994568807
"
          ></textarea>
        </div>
      </div>
      <div>
        <div className="semititle">포스터 추가</div>
      </div>
      <div>
        <div className="semititle">카드뉴스 추가</div>
      </div>
      <div className="recruit_buttons1">
        <button id="button6B" className="recruit_button1">저장</button>
       <Link to="/recruit/process/noticeinfo">
        <button id="button6W" className="recruit_button1">공지 작성하기</button>
       </Link>
        {/* <button>공지 작성하기</button> */}
      </div>
    </div>
  );
};

export default ProcessBasicInfo;
