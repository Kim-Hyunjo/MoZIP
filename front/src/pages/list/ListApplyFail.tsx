import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const ListApplyFail = () => {
  return (
    <div>
      <div className="big_namecard">
        <div className="head_info">지원 실패</div>
        <div className="body_info">
          오류가 발생했습니다.<br></br>
          이전으로 돌아가 다시 시도해주십시오.
        </div>
      </div>

      <div className="mypageStorageButton">
        <Link to="/">
          <button id="button10">이전 페이지로 돌아가기</button>
        </Link>
      </div>
    </div>
  );
};

export default ListApplyFail;