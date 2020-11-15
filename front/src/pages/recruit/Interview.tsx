import React from 'react';

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
        <button id="buttonSelect">자세히</button>
      </div>
    );
  });

  return (
    <div className="interview">
      <h2>면접 상세</h2>
      <div>
        <button id="button_red">면접 기본 질문 작성하기</button>
      </div>

      <div>
        <div className="middle_title">면접 일시</div>
        <div className="adminList">{interviewFormList}</div>
      </div>
      <div className="adminButton">
        <button id="button10">합격자 관리하기</button>
      </div>
    </div>
  );
};

export default Interview;
