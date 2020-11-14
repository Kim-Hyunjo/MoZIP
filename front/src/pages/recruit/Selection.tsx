import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Selection = () => {
  return (
    <div>
      <h2>모집 전형 선택하기</h2>
      <div>부원 모집 전형을 선택해주세요.</div>
      <div>
        <button>서류 + 면접 전형</button>
        <div>
          1차로 서류(자기소개서)를 제출받고, 2차로 면접을 진행하는 전형입니다.
        </div>
        <button>서류 전형</button>
        <div>1차로 서류(자기소개서)제출만을 진행하는 전형입니다.</div>
        <button>면접 전형</button>
        <div>1차로 면접만을 진행하는 전형입니다.</div>
      </div>
    </div>
  );
};

export default Selection;
