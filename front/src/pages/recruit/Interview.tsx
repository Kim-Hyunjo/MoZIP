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
  ];

  const interviewFormList = interviewList.map((item) => {
    return (
      <div key={item.id}>
        <div>
          <span>{item.when}일차</span>
          <span>총 {item.personnel}명</span>
        </div>
        <div>{item.date}</div>
        <div>{item.time}</div>
        <div>{item.school}</div>
        <button>자세히</button>
      </div>
    );
  });

  return (
    <div>
      <h2>면접 상세</h2>
      <div>
        <button>면접 기본 질문 작성하기</button>
      </div>

      <div>
        <div>면접 일시</div>
        {interviewFormList}
      </div>
    </div>
  );
};

export default Interview;
