import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { Dialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogContentText } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';

import './namecard.css';

const myPageEdit = () => {
  const personalInfo = {
    name: '최우영',
    sort: '직장인',
    school: '테이브대학교',
    major: '서핑학과',
    grade: '3',
    state: '재학',
    birth: '2020.11.07',
    phoneNum: '010-0000-0000',
    email: 'tave@naver.com',
    address: '서울시 강남구',
  };
  const personalApplyHistory = [
    { name: '~내가 지원한 동아리~', introduction: '~동아리의 상세설명~' },
    { name: '~내가 지원한 동아리2~', introduction: '~동아리의 상세설명2~' },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>개인정보 수정</h2>
      <div className="warning"></div>
      <div className="wrapper">
        <div className="big_namecard">
          <div>{/* 사진추가부분 */}</div>
          <div className="right_side">
            <form noValidate>
              <div className="이름">
                <label htmlFor="firstName">이름:</label>
                <input
                  type="text"
                  className="mypageEdit"
                  value={personalInfo.name}
                  placeholder="이름"
                  name="name"
                />
              </div>
              <div className="분류">
                <label htmlFor="분류">분류:</label>
                <input
                  type="text"
                  className="mypageEdit"
                  placeholder="분류"
                  name="name"
                />
              </div>
              <div className="학교">
                <label htmlFor="학교">학교:</label>
                <input
                  type="text"
                  className="mypageEdit"
                  placeholder="학교"
                  name="name"
                />
              </div>
              <div className="전공">
                <label htmlFor="전공">전공:</label>
                <input
                  type="text"
                  className="mypageEdit"
                  placeholder="전공"
                  name="name"
                />
              </div>
              <div className="학년">
                <label htmlFor="학년">학년:</label>
                <input
                  type="text"
                  className="mypageEdit"
                  placeholder="학년"
                  name="name"
                />
              </div>
              <div className="생년월일">
                <label htmlFor="생년월일">생년월일:</label>
                <input
                  type="text"
                  className="mypageEdit"
                  placeholder="생년월일"
                  name="name"
                />
              </div>
              <div className="전화번호">
                <label htmlFor="firstName">전화번호:</label>
                <input
                  type="text"
                  className="mypageEdit"
                  placeholder="전화번호"
                  name="name"
                />
              </div>
              <div className="이메일">
                <label htmlFor="이메일">이메일:</label>
                <input
                  type="text"
                  className="mypageEdit"
                  placeholder="이메일"
                  name="name"
                />
              </div>
              <div className="거주지">
                <label htmlFor="거주지">거주 지역:</label>
                <input
                  type="text"
                  className="mypageEdit"
                  placeholder="거주지"
                  name="name"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="mypageEditButton">
          {/* <Link to="/mypage"> */}
          <button onClick={handleClickOpen}>확인</button>
          {/* </Link> */}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'저장하고 수정을 완료하시겠습니까?'}
        </DialogTitle>

        <DialogActions>
          <Link to="/mypage">
            <Button onClick={handleClose} color="primary" autoFocus>
              예
            </Button>
          </Link>
          {/* <Button onClick={handleClose} color="primary" autoFocus>
            예
          </Button> */}
          <Button onClick={handleClose} color="primary">
            아니오
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default myPageEdit;
