import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './recruit.css';

const Selection = () => {
  return (
    <div>
      <h2>모집 전형 선택하기</h2>
      <h3>부원 모집 전형을 선택해주세요.</h3>
      <div className="centeralign">
        <button id="button10">서류 + 면접 전형</button>
        <div className="explanation">
          1차로 서류(자기소개서)를 제출받고, 2차로 면접을 진행하는 전형입니다.
        </div>
        <button id="button10">서류 전형</button>
        <div className="explanation">1차로 서류(자기소개서)제출만을 진행하는 전형입니다.</div>
        <button id="button10">면접 전형</button>
        <div className="explanation">1차로 면접만을 진행하는 전형입니다.</div>
      </div>
    </div>
  );
};

export default Selection;
