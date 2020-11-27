import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './namecard.css';
import './button.css';
import { DevelopUrl } from '../../http/HttpUrl';

interface myInform {
  profile: Profile;
  applying_list: ApplyingList[];
  myclub: MyClub[];
  clubs_on_approval_process: OnAprrov[];
  applied_list: AppliedList[];
}

interface Profile {
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

interface Education {
  school: string;
  major: string;
}

interface ApplyingList {
  name: string;
  information: string;
}

interface MyClub {
  name: string;
  information: string;
  image: string;
  position: string;
}

interface AppliedList {
  name: string,
  information: string,
}

interface OnAprrov {
  name: string;
  information: string;
  approval_choice: string;
}


const Mypage = (props: RouteComponentProps<{ user_id: string }>) => {
  const [inform, setInform] = useState<myInform>({
    profile: {
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
      education: { school: '', major: '' },
    },
    applying_list: [{
      name: '',
      information: '',
    }],
    myclub: [{
      name: '',
      information: '',
      image: '',
      position: '',
    }],
    clubs_on_approval_process: [{
      name: '',
      information: '',
      approval_choice: '',
    }],
    applied_list: [{
      name: '',
      information: '',
    }],
  })
  const getApi = async () => {
    await axios.get(`http://3.35.234.131:8000/mypage/1/`).then((r) => {
      let res: myInform = r.data;
      setInform(res);
    })
  }
  useEffect(() => {
    getApi()
  }, [])
  const personalInfo = {
    name: inform.profile.name,
    sort: inform.profile.group,
    school: inform.profile.education.school,
    major: inform.profile.education.major,
    grade: inform.profile.grader,
    state: inform.profile.states,
    birth: inform.profile.birthday,
    phoneNum: inform.profile.telephone,
    email: inform.profile.email,
    address: inform.profile.address,
  };
  const personalApplyCurrent = inform.applying_list;
  const personalClublist = inform.myclub;
  const personalOpenRequest = inform.clubs_on_approval_process;
  const personalApplyHistory = inform.applied_list;

  return (
    <div className="mypage">
      <h2>My page</h2>
      <div className="warning">
        *본인 확인을 위해 사진 포함 모든 정보를 등록해주셔야 동아리 지원이
        가능합니다.
      </div>
      <div className="big_namecard">
        <div className="profileImage">
          <img src="http://placehold.it/180x180" />
        </div>
        <div className="right_side">
          <div className="name">{personalInfo.name}</div>
          분류 : {personalInfo.sort} <br></br>
          학교 및 학과 : {personalInfo.school} {personalInfo.major}
          <br></br>
          학년 : {personalInfo.grade} {personalInfo.state}중 <br></br>
          생년월일 : {personalInfo.birth} <br></br>
          전화번호 : {personalInfo.phoneNum} <br></br>
          이메일 : {personalInfo.email} <br></br>
          거주지 : {personalInfo.address}
          <br></br>
        </div>
        <div className="inMyinform">
          <Link to={`/mypage/edit/${props.match.params.user_id}`}>
            <button id="button1">수정하기</button>
          </Link>
        </div>
      </div>
      <div className="mypageStorageButton">
        <Link to="/mypage/introduction">
          <button id="button10">자기소개함 관리</button></Link>
      </div>
      <div id="applyCurrent" className="small_section">
        <div className="middle_title">나의 지원 현황</div>
        <div className="horizontal_scroll">
          <ul className="small_namecard">
            {personalApplyCurrent.map((item) => {
              return (
                <li>
                  <div className="club_name">{item.name}</div>
                  <div className="club_intro">
                    {item.information}
                  </div>
                  <div className="clubImage">
                    <img src="http://placehold.it/120x120" />
                  </div>
                  <Link to="/mypage/:circle_id/notice">
                    <button id="button2">최종 결과 확인</button></Link>
                </li>
              );
            })}

          </ul>
        </div>
      </div>
      <div id="myClub" className="small_section">
        <div className="small_wrap"><div className="middle_title">My 동아리</div>
          <div className="word_button">
            <Link to="/mypage/status">Mozip 현황</Link>
          </div></div>
        <div className="horizontal_scroll">
          <ul className="small_namecard">
            {personalClublist.map((item) => {
              return (
                <li>
                  <Link to="/list/:subject/:circle_id">

                    <div className="club_position">
                      {item.position === 'owner' ? ('회장') : item.position === 'guest' ? ('회원') : ('운영진')}
                    </div>

                    <div className="club_name">{item.name}</div>
                    <div className="club_intro">
                      {item.information}
                    </div>
                    <div className="clubImage150">
                      <img src="http://placehold.it/150x150" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div id="openRequest" className="small_section">
        <div className="small_wrap"><div className="middle_title">개설 요청한 동아리</div>
          <div className="word_button">
            <Link to="/circle/open">동아리 개설하기</Link>
          </div></div>
        <div className="horizontal_scroll">
          <ul className="small_namecard">
            {personalOpenRequest.map((item) => {
              return (
                <li>
                  <div className="club_position">
                    {item.approval_choice}
                  </div>
                  <div className="club_name">{item.name}</div>
                  <div className="club_intro">
                    {item.information}
                  </div>
                  <div className="clubImage150">
                    <img src="http://placehold.it/150x150" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div id="applyHistory" className="small_section">
        <div className="middle_title">나의 지원 이력</div>
        <div className="horizontal_scroll">
          <ul className="small_namecard">
            {personalApplyHistory.map((item) => {
              return (
                <li>
                  <div className="club_position">
                    합격
                  </div>
                  <div className="club_name">{item.name}</div>
                  <div className="club_intro">
                    {item.information}
                  </div>
                  <div className="clubImage150">
                    <img src="http://placehold.it/150x150" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
