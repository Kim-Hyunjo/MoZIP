import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom';
import React, { useState,useEffect } from 'react';

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

interface MyInform{
  group: string;
  name: string;
  grader : string;
  states : string;
  birthday : string;
  telephone : string;
  email : string;
  address : string; 
  self_image : string;
  user_id : number;
  education : Education;
}

interface Education{
  school : string;
  major : string;
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

const MyPageEdit = (props: RouteComponentProps<{user_id: string}>) => {
  // const[status, setStatus] = useState<Status>({user_id:0,states:'', club_in:''})
  // const [_academy, setAcademy] = useState<Academy[]>([]);
  const [inform, setInform] = useState<MyInform>({
  group: '',
  name: '',
  grader : '',
  states : '',
  birthday : '',
  telephone : '',
  email : '',
  address : '', 
  self_image : '',
  user_id : 0,
  education : {school: '', major: ''},
  })

  const getApi = async () => {
    await axios.get(`http://3.35.234.131:8000/mypage/${props.match.params.user_id}/edit/`).then((r)=>{
      let res: MyInform = r.data;
      setInform(res);
    })
  }

useEffect(()=>{
  getApi()
},[])

  const [name, setname] = useState('');
  const [sort, setsort] = useState('');
  const [school, setschool] = useState('');
  const [major, setmajor] = useState('');
  const [grade, setgrade] = useState('');
  const [birth, setbirth] = useState('');
  const [phoneNum, setphoneNum] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');

  const handleChangeName: any = (e: Event) => {
    setname((e.currentTarget as any).value);
  };
  const handleChangeSort: any = (e: Event) => {
    setsort((e.currentTarget as any).value);
  };
  const handleChangeSchool: any = (e: Event) => {
    setschool((e.currentTarget as any).value);
  };
  const handleChangeMajor: any = (e: Event) => {
    setmajor((e.currentTarget as any).value);
  };
  const handleChangeGrade: any = (e: Event) => {
    setgrade((e.currentTarget as any).value);
  };
  const handleChangeBirth: any = (e: Event) => {
    setbirth((e.currentTarget as any).value);
  };
  const handleChangePhoneNum: any = (e: Event) => {
    setphoneNum((e.currentTarget as any).value);
  };
  const handleChangeEmail: any = (e: Event) => {
    setemail((e.currentTarget as any).value);
  };
  const handleChangeAddress: any = (e: Event) => {
    setaddress((e.currentTarget as any).value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
    axios.post('https://skhu-pwk.firebaseio.com/todo1.json', {
      name: name,
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
                  onChange={handleChangeName}
                  value={inform.name}
                />
              </div>
              <div className="분류">
                <label htmlFor="분류">분류 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="분류"
                  name="name"
                  onChange={handleChangeSort}
                  value={inform.group}
                />
              </div>
              <div className="학교">
                <label htmlFor="학교">학교 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="학교"
                  name="name"
                  onChange={handleChangeSchool}
                  value={inform.education.school}
                />
              </div>
              <div className="전공">
                <label htmlFor="전공">전공 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="전공"
                  name="name"
                  onChange={handleChangeMajor}
                  value={inform.education.major}
                />
              </div>
              <div className="학년">
                <label htmlFor="학년">학년 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="학년"
                  name="name"
                  onChange={handleChangeGrade}
                  value={inform.grader}
                />
              </div>
              <div className="생년월일">
                <label htmlFor="생년월일">생년월일 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="생년월일"
                  name="name"
                  onChange={handleChangeBirth}
                  value={inform.birthday}
                />
              </div>
              <div className="전화번호">
                <label htmlFor="firstName">전화번호 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="전화번호"
                  name="name"
                  onChange={handleChangePhoneNum}
                  value={inform.telephone}
                />
              </div>
              <div className="이메일">
                <label htmlFor="이메일">이메일 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="이메일"
                  name="name"
                  onChange={handleChangeEmail}
                  value={inform.email}
                />
              </div>
              <div className="거주지">
                <label htmlFor="거주지">거주 지역 :</label>
                <input
                  type="text"
                  className="MyPageEdit"
                  placeholder="거주지"
                  name="name"
                  onChange={handleChangeAddress}
                  value={inform.address}
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
