import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ProcessBasicInfo = () => {
  return (
    <div>
      <h2>동아리 모집 상세 작성</h2>
      <div>동아리 모집 공고에 대한 세부적인 내용을 작성해주세요.</div>
      <div>
        <div>간단한 모집 정보</div>
        <div>
          <span>모집 인원</span>
          <input type="text"></input>
        </div>
        <div>
          <span>모임 지역</span>
          <input type="text"></input>
        </div>
        <div>
          <span>참여 대상</span>
          <label>
            <input type="checkbox" name="Python" value="대학생" />
            대학생
          </label>
          <label>
            <input type="checkbox" name="Python" value="일반인" />
            일반인
          </label>
          <label>
            <input type="checkbox" name="Python" value="직장인" />
            직장인
          </label>
        </div>
        <div>
          <span>모임 시간</span>
          <input type="text"></input>
        </div>
        <div>
          <span>대표 페이지</span>
          <input type="text"></input>
        </div>
      </div>
      <div>
        <div>상세 내용</div>
        <div>
          <span>제목</span>
          <textarea placeholder="제목을 입력해주세요."></textarea>
        </div>
        <div>
          <span>내용</span>
          <textarea
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
        <div>포스터 추가</div>
      </div>
      <div>
        <div>카드뉴스 추가</div>
      </div>
      <button>저장</button>
      <button>공지 작성하기</button>
    </div>
  );
};

export default ProcessBasicInfo;
