import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ProcessForm = () => {
  return (
    <div>
      <h2>자기소개서 양식 작성</h2>
      <div>지원서 내 자기소개서 질문과 양식을 작성해주세요.</div>

      <div>
        <div>단답형 글자 수 제한 : 50자</div>
        <div>서술형 글자 수 제한 : 500자</div>

        <div> 질문 형식은 객관식, 단답형, 서술형 3가지가 있습니다.</div>
        <div>서술형 질문은 최대 10개까지 생성할 수 있습니다.</div>
        <div>객관식 문제는 단일 선택형, 복수 선택형 중 선택할 수 있습니다.</div>
      </div>

      <div>
        <button>
          <div>객관식</div>
          <div>질문 추가</div>
        </button>
        <button>
          <div>단답형</div>
          <div>질문 추가</div>
        </button>
        <button>
          <div>서술형</div>
          <div>질문 추가</div>
        </button>
      </div>

      <div>
        <span>공지사항</span>
      </div>

      <button>저장</button>
      <button>자기소개서 작성</button>
    </div>
  );
};

export default ProcessForm;
