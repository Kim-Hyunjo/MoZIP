import React from 'react';
import './resume.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const InterviewPostprocessing = () => {
  const candidateStatus = [
    {
      name: '한채은',
      group: '1조',
      time: '13:00',
      score: '10점',
      status: '보류',
    },
    {
      name: '한채은',
      group: '1조',
      time: '13:00',
      score: '10점',
      status: '보류',
    },
    {
      name: '한채은',
      group: '1조',
      time: '13:00',
      score: '10점',
      status: '보류',
    },
    {
      name: '한채은',
      group: '1조',
      time: '13:00',
      score: '10점',
      status: '보류',
    },
    {
      name: '한채은',
      group: '1조',
      time: '13:00',
      score: '10점',
      status: '보류',
    },
    {
      name: '한채은',
      group: '1조',
      time: '13:00',
      score: '10점',
      status: '보류',
    },
    {
      name: '한채은',
      group: '1조',
      time: '13:00',
      score: '10점',
      status: '보류',
    },
    {
      name: '한채은',
      group: '1조',
      time: '13:00',
      score: '10점',
      status: '보류',
    },
    {
      name: '한채은',
      group: '1조',
      time: '13:00',
      score: '10점',
      status: '보류',
    },
  ];
  return (
    <div className="resume">
      <h2>면접 합격자 관리</h2>
      <h4>
        최종 합격자를 발표해보세요. 미결정 혹은 보류 인원 존재 시 최종 합격
        발표를 할 수 없습니다.
      </h4>
      <form action="">
        <label htmlFor=""></label>
        <button id="button4">통계 보기</button>
        <div className="stateBox">
          <ul className="states">
            <li>
              <div className="stateName">전체</div>
            </li>
            <li>
              <div className="stateName">미결정</div>
            </li>
            <li>
              <div className="stateName">합격</div>
            </li>
            <li>
              <div className="stateName">불합격</div>
            </li>
            <li>
              <div className="stateName">보류</div>
            </li>
          </ul>

          <div className="stateUsers">총 100명</div>
          <ul className="horizontal_people_list">
            {candidateStatus.map((info) => {
              return (
                <li>
                  <label htmlFor=""></label>
                  <input type="checkbox" />
                  <span className="personalName">{info.name} </span>
                  <span className="personalTime">
                    {info.group}
                    {info.time}
                  </span>
                  <div className="rightSide">
                    <span className="personalScore"> 점수 :{info.score}</span>
                    <strong id="skip">{info.status}</strong>
                    <Link to="/recruit/interview/postprocessing/detail">
                      <button id="button1">상세보기</button>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="changeButtons">
            *선택한 후 아래 버튼을 누르면 해당 인원이 이동합니다.
            <div className="changeButton3">
              <button id="skipButt">보류</button>
              <button id="outButt">불합격</button>
              <button id="inButt">합격</button>
            </div>
          </div>
        </div>
      </form>
      <div>
        <Link to="/recruit/interview/postprocessing/notice">
          <button id="button_red">합격 안내문 작성하기</button>
        </Link>
      </div>
    </div>
  );
};

export default InterviewPostprocessing;
