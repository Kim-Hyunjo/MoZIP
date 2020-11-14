import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ProcessNoticeInfo = () => {
  return (
    <div>
      <h2>지원자를 위한 공지사항 작성</h2>
      <div>지원서 작성을 통해 부원 모집을 시작해보세요.</div>

      <div>
        <div>지원서는 공지와 자기소개서로 이루어져 있습니다.</div>
        <div>먼저 공지를 작성해주십시오.</div>
        <div>공지사항이 없을 시 공란으로 남겨주십시오.</div>
      </div>

      <div>
        <span>공지사항</span>
        <textarea
          placeholder="내용을 입력해주세요.

ex. 
- ㅇㅇㅇ의 활동 기간은 2020년11월부터 2021년 2월까지입니다. 만약, 이 기간내에 졸업을 예정하고 계신다면 아쉽지만 활동이 불가능합니다.

- 코로나 19 사태로 인하여 정부의 사회적 거리두기 정책에 따라  면접은 전체 온라인으로 진행됩니다. 면접 시간에 대한 자세한 사항은 서류 합격자 대상으로 재공지 드리겠습니다.

- 활동 회비는 최종 합격자 대상으로 첫 모임때에 공지됩니다.

※ 프론티어란? ㅇㅇㅇ 7기를 이끌어가는 리더를 양성하는 과정으로 소정 기간의 교육을 통해 7기의 전체 운영을 담당하게 됩니다.

※ 기타 문의 사항 : 플러스 친구 추가 후 문의( http://pf.kakao.com/_abcdef )"
        ></textarea>
      </div>

      <button>저장</button>
      <button>자기소개서 작성</button>
    </div>
  );
};

export default ProcessNoticeInfo;
