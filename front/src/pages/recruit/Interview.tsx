import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Interview = () => {
  const interviewList = [
    {
      id: 1,
      when: '1',
      personnel: '12',
      date: '7월 10일',
      time: '4~7',
      school: '동국대학교',
    },
    {
      id: 2,
      when: '2',
      personnel: '12',
      date: '7월 10일',
      time: '4~7',
      school: '동국대학교',
    },
    {
      id: 3,
      when: '3',
      personnel: '12',
      date: '7월 10일',
      time: '4~7',
      school: '동국대학교',
    },
    {
      id: 4,
      when: '4',
      personnel: '12',
      date: '7월 10일',
      time: '4~7',
      school: '동국대학교',
    },
    {
      id: 5,
      when: '5',
      personnel: '1',
      date: '7월 10일',
      time: '4~7',
      school: '동국대학교',
    },
  ];

  const interviewFormList = interviewList.map((item) => {
    return (
      <div className="tiny_gray_namecard" key={item.id}>
        <div>
          <span className="tiny_name">{item.when}일차</span>
          <span className="tiny_status">총 {item.personnel}명</span>
        </div>
        <p>{item.date}<br></br>
        {item.time} 시<br></br>
        {item.school}</p>
        <Link to ="/recruit/interview/detail/1">
        <button id="buttonSelect">자세히</button></Link>
      </div>
    );
  });

  return (
    <div className="interview">
      <h2>면접 상세</h2>
      <div>
        <Link to ="/recruit/interview/commonquestion">
        <button id="button_red">면접 기본 질문 작성하기</button></Link>
      </div>

      <div>
        <div className="middle_title">면접 일시</div>
        <div className="adminList">{interviewFormList}</div>
      </div>
      <div className="adminButton">
        <Link to ="/recruit/interview/postprocessing">
        <button id="button10">합격자 관리하기</button></Link>
      </div>
    </div>
  );
};

export default Interview;
