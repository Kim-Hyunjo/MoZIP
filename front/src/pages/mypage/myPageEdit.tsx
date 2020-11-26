import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import { Dialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogContentText } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';

import './namecard.css';
import axios from 'axios';
import { DevelopUrl } from '../../http/HttpUrl';
import { stringify } from 'querystring';
import { setgroups } from 'process';

interface Education {
  school: string;
  major: string;
}

interface MyInform {
  group: string;
  name: string;
  grader: string;
  states: string;
  birthday: string;
  telephone: string;
  email: string;
  address: string;
  self_image: string;
  user_id: number;
  education: Education;
}

// interface Academy{
//   cc_id: number;
//   name: string;
//   information: string;
//   category:  string;
//   self_image: string;
// }

// interface Status{
//   user_id : number;
//   states : string;
//   club_in : string;
// }

const MyPageEdit = () => {
  // const[status, setStatus] = useState<Status>({user_id:0,states:'', club_in:''})
  // const [_academy, setAcademy] = useState<Academy[]>([]);
  const [inform, setInform] = useState<MyInform>({
    group: '',
    name: '',
    grader: '',
    states: '',
    birthday: '',
    telephone: '',
    email: '',
    address: '',
    self_image: '',
    user_id: 0,
    education: {
      school: '',
      major: '',
    },
  })

  const getApi = async () => {
    await axios.get('http://3.35.234.131:8000/mypage/1/edit/').then((r) => {
      let res: MyInform = r.data;
      setInform(res);
      setname(res.name);
      setgroup(res.group);
      setschool(res.education.school);
      setmajor(res.education.major);
      setgrade(res.grader);
      setbirth(res.birthday);
      setphoneNum(res.telephone);
      setemail(res.email);
      setaddress(res.address);
    })
  }

  useEffect(() => {
    getApi()
  }, [])

  const [name, setname] = useState('');
  const [group, setgroup] = useState('');
  const [school, setschool] = useState('');
  const [major, setmajor] = useState('');
  const [grade, setgrade] = useState('');
  const [birth, setbirth] = useState('');
  const [phoneNum, setphoneNum] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');

  const [userId, setuserId] = useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
    axios.post(DevelopUrl + 'mypage/1/edit/', {
      group: group,
      name: name,
      grader: grade,
      states: inform.states,
      birthday: birth,
      telephone: phoneNum,
      email: email,
      address: address,
      self_image: inform.self_image,
      user_id: inform.user_id,
      education: {
        school: school,
        major: major,
      },
    });
  };
  const handleClose2 = () => {
    setOpen(false);
  };
  return (
    <div className="mypage">
      <h2>개인정보 수정</h2>
      <div className="warning"></div>
      <div className="wrapper">
        <div className="big_namecard">
          <div className="profileImage">
            <img src="http://placehold.it/180x180" />
          </div>
          <div className="right_side">
            <form noValidate>
              <div className="이름">
                <label htmlFor="firstName">이름 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="이름"
                  name="name"
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      setname(e.target.value);
                    }
                  }
                  value={name}
                />
              </div>
              <div className="분류">
                <label htmlFor="분류">분류 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="분류"
                  name="group"
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      setgroup(e.target.value);
                    }}
                  value={group}
                />
              </div>
              <div className="학교">
                <label htmlFor="학교">학교 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="학교"
                  name="school"
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      setschool(e.target.value);
                    }}
                  value={school}
                />
              </div>
              <div className="전공">
                <label htmlFor="전공">전공 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="전공"
                  name="major"
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      setmajor(e.target.value);
                    }}
                  value={major}
                />
              </div>
              <div className="학년">
                <label htmlFor="학년">학년 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="학년"
                  name="grader"
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      setgrade(e.target.value);
                    }}
                  value={grade}
                />
              </div>
              <div className="생년월일">
                <label htmlFor="생년월일">생년월일 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="생년월일"
                  name="birthday"
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      setbirth(e.target.value);
                    }}
                  value={birth}
                />
              </div>
              <div className="전화번호">
                <label htmlFor="firstName">전화번호 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="전화번호"
                  name="telephone"
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      setphoneNum(e.target.value);
                    }}
                  value={phoneNum}
                />
              </div>
              <div className="이메일">
                <label htmlFor="이메일">이메일 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="이메일"
                  name="email"
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      setemail(e.target.value);
                    }}
                  value={email}
                />
              </div>
              <div className="거주지">
                <label htmlFor="거주지">거주 지역 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="거주지"
                  name="address"
                  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => {
                      setaddress(e.target.value);
                    }}
                  value={address}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="MyPageEditButton">
          {/* <Link to="/mypage"> */}
          <button id="button4" onClick={handleClickOpen}>
            완료
          </button>
          {/* </Link> */}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">수정 완료</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            저장하시겠습니까?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Link to="/mypage">
            <Button
              type="submit"
              onClick={handleClose1}
              color="primary"
              autoFocus
            >
              예
            </Button>
          </Link>
          {/* <Button onClick={handleClose} color="primary" autoFocus>
            예
          </Button> */}
          <Button onClick={handleClose2} color="primary">
            아니오
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyPageEdit;
