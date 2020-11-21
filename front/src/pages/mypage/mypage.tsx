import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './namecard.css';
import './button.css';
import { DevelopUrl } from '../../http/HttpUrl';

interface myInform{
  group: string;
  name: string;
  education: string[];
  grader : string;
  states : string;
  birthday : string;
  telephone : string;
  email : string;
  address : string; 
  self_image : string;
  user_id : number;
}

const Mypage = (props: RouteComponentProps<{user_id: string}>) => {
  const [inform, setInform] = useState<myInform>({
  group: '',
  name: '',
  education: [],
  grader : '',
  states : '',
  birthday : '',
  telephone : '',
  email : '',
  address : '', 
  self_image : '',
  user_id : 0,
  })
  const getApi = async () => {
    await axios.get(DevelopUrl + '${props.match.params.subject}+/${props.match.params.circle_id/notice/}').then((r)=>{
      let res: myInform = r.data;
      setInform(res);
    })
  }
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
  const personalApplyCurrent = [
    { name: '~내가 지원한 동아리~', introduction: '~동아리의 상세설명~' },
    { name: '~내가 지원한 동아리2~', introduction: '~동아리의 상세설명2~' },
  ];
  const personalClublist = [
    {
      name: 'TAVE',
      introduction: '동아리의 상세설명~~~~~',
      position: '운영진',
    },
    {
      name: '나의동아리2~~~~~',
      introduction: '~동아리의 상세설명2~',
      position: '회원',
    },
  ];
  const personalOpenRequest = [
    {
      name: '~개설 요청 동아리~',
      introduction: '~동아리의 상세설명~',
      status: '진행중',
    },
    {
      name: '~개설 요청 동아리2~',
      introduction: '~동아리의 상세설명2~',
      status: '승인',
    },
  ];
  const personalApplyHistory = [
    {
      name: '~내가 지원한 동아리~',
      introduction: '~동아리의 상세설명~',
      status: '합격',
    },
    {
      name: '~내가 지원한 동아리2~',
      introduction: '~동아리의 상세설명2~',
      status: '불합격',
    },
  ];

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
          학년 : {personalInfo.grade}학년 {personalInfo.state}중 <br></br>
          생년월일 : {personalInfo.birth} <br></br>
          전화번호 : {personalInfo.phoneNum} <br></br>
          이메일 : {personalInfo.email} <br></br>
          거주지 : {personalInfo.address}
          <br></br>
        </div>
        <div className="inMyinform">
          <Link to="./mypage/edit">
            <button id="button1">수정하기</button>
          </Link>
        </div>
      </div>
      <div className="mypageStorageButton">
        <Link to ="/mypage/introduction">
        <button id="button10">자기소개함 관리</button></Link>
      </div>
      <div id="applyCurrent" className="small_section">
        <div className="middle_title">나의 지원 현황</div>
        <div className="horizontal_scroll">
          <ul className="small_namecard">
            <li>
              <div className="club_name">{personalApplyCurrent[0].name}</div>
              <div className="club_intro">
                {personalApplyCurrent[0].introduction}
              </div>
              <div className="clubImage">
                <img src="http://placehold.it/120x120" />
              </div>
              <Link to ="/mypage/:circle_id/notice">
              <button id="button2">최종 결과 확인</button></Link>
            </li>
            <li>
              <div className="club_name">{personalApplyCurrent[1].name}</div>
              <div className="club_intro">
                {personalApplyCurrent[1].introduction}
              </div>
              <div className="clubImage">
                <img src="http://placehold.it/120x120" />
              </div>
              <Link to ="/mypage/:circle_id/notice">
              <button id="button2">최종 결과 확인</button>
              </Link>
            </li>
            <li>
              <div className="club_name">{personalApplyCurrent[0].name}</div>
              <div className="club_intro">
                {personalApplyCurrent[0].introduction}
              </div>
              <div className="clubImage">
                <img src="http://placehold.it/120x120" />
              </div>
              <Link to ="/mypage/:circle_id/notice">
              <button id="button2">최종 결과 확인</button></Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="myClub" className="small_section">
        <div className="small_wrap"><div className="middle_title">My 동아리</div>
        <div className="word_button">
        <Link to="./mypage/status">Mozip 현황</Link>
        </div></div>
        <div className="horizontal_scroll">
          <ul className="small_namecard">
            <li>
              <Link to = "/list/:subject/:circle_id">
              <div className="club_position">
                {personalClublist[0].position}
              </div>
              <div className="club_name">{personalClublist[0].name}</div>
              <div className="club_intro">
                {personalClublist[0].introduction}
              </div>
              <div className="clubImage150">
                <img src="http://placehold.it/150x150" />
              </div>
              </Link>
            </li>
            <li>
              <div className="club_position">
                {personalClublist[1].position}
              </div>
              <div className="club_name">{personalClublist[1].name}</div>
              <div className="club_intro">
                {personalClublist[1].introduction}
              </div>
              <div className="clubImage150">
                <img src="http://placehold.it/150x150" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="openRequest" className="small_section">
        <div className="small_wrap"><div className="middle_title">개설 요청한 동아리</div>
        <div className="word_button">
        <Link to="./circle/open">동아리 개설하기</Link>
        </div></div>
        <div className="horizontal_scroll">
          <ul className="small_namecard">
            <li>
              <div className="club_position">
                {personalOpenRequest[0].status}
              </div>
              <div className="club_name">{personalOpenRequest[0].name}</div>
              <div className="club_intro">
                {personalOpenRequest[0].introduction}
              </div>
              <div className="clubImage150">
                <img src="http://placehold.it/150x150" />
              </div>
            </li>
            <li>
              <div className="club_position">
                {personalOpenRequest[1].status}
              </div>
              <div className="club_name">{personalOpenRequest[1].name}</div>
              <div className="club_intro">
                {personalOpenRequest[1].introduction}
              </div>
              <div className="clubImage150">
                <img src="http://placehold.it/150x150" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="applyHistory" className="small_section">
        <div className="middle_title">나의 지원 이력</div>
        <div className="horizontal_scroll">
          <ul className="small_namecard">
            <li>
              <div className="club_position">
                {personalApplyHistory[0].status}
              </div>
              <div className="club_name">{personalApplyHistory[0].name}</div>
              <div className="club_intro">
                {personalApplyHistory[0].introduction}
              </div>
              <div className="clubImage150">
                <img src="http://placehold.it/150x150" />
              </div>
            </li>
            <li>
              <div className="club_position">
                {personalApplyHistory[1].status}
              </div>
              <div className="club_name">{personalApplyHistory[1].name}</div>
              <div className="club_intro">
                {personalApplyHistory[1].introduction}
              </div>
              <div className="clubImage150">
                <img src="http://placehold.it/150x150" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
