import { InfoOutlined } from '@material-ui/icons';
import React, { Fragment, useState, useEffect } from 'react';
import SelfIntroduction from '../SelfIntroduction';
import { RouteComponentProps, Link } from 'react-router-dom';
import Resume2Score from './Resume2Score';

interface Question {
  id: number;
  question: string;
  answer: string;
  score: number;
  tempScore: number;
}

const Resume2 = (props: RouteComponentProps<{ member_id: string }>) => {
  const info = [
    {
      name: '한채은',
      school: '테이브 대학교',
      grade: '3학년',
      date: '2001.07.07',
      phone: '010-0000-0000',
      city: '서울시 강남구',
    },
  ];

  const [selfIntroductionList, setSelfIntroductionList] = useState<Question[]>([
    {
      id: 1,
      question: '우리 동아리에 지원하게 된 동기를 말씀해 주세요.',
      answer: 'TAVE가 킹왕짱이기 때문입니다.',
      score: 0,
      tempScore: 0,
    },
    {
      id: 2,
      question: '우리 동아리에 지원하게 된 동기를 말씀해 주세요.1',
      answer: 'TAVE가 킹왕짱이기 때문입니다.',
      score: 0,
      tempScore: 0,
    },
    {
      id: 3,
      question: '우리 동아리에 지원하게 된 동기를 말씀해 주세요.2',
      answer: 'TAVE가 킹왕짱이기 때문입니다.',
      score: 0,
      tempScore: 0,
    },
    {
      id: 4,
      question: '우리 동아리에 지원하게 된 동기를 말씀해 주세요.3',
      answer: 'TAVE가 킹왕짱이기 때문입니다.',
      score: 0,
      tempScore: 0,
    },
  ]);

  const handleChange = (id: number, score: number) => {
    let tmps: Question[] = Object.assign([], selfIntroductionList);
    tmps.map((info) => {
      if (info.id === id) {
        info.score = Number(score);
      }
    });
    setSelfIntroductionList(tmps);
  };

  useEffect(() => {
    console.log(selfIntroductionList);
  }, [selfIntroductionList]);

  return (
    <div className="resume">
      <div>
        <h2>지원자 지원서 정보</h2>
        <div className="small_title">
          지원자의 정보 및 자기소개서를 확인해보세요.{' '}
        </div>
      </div>

      <div className="personScore">
        점수 총점 : {selfIntroductionList[0].score}점
      </div>
      <div className="gray_namecard">
        <div>
          <span>프로필 사진</span>
          <div className="right_side">
            <ul>
              <li className="name">{info[0].name}</li>
              <li>
                {info[0].school}
                {info[0].grade}
              </li>
              <li>{info[0].date}</li>
              <li>{info[0].phone}</li>
              <li>{info[0].city}</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="title">자기소개서</div>
        <form action="">
          <ul>
            {selfIntroductionList.map((question) => {
              return (
                <Resume2Score
                  question={question}
                  onUpdate={handleChange}
                ></Resume2Score>
              );
            })}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Resume2;
