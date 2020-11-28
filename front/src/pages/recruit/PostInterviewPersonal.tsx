import React, { useEffect, useState } from 'react';
import PostPersonalSelfItem from './PostPersonalSelfItem';
import './resume.css';
import profile from '../images2/member7@2x.png';

interface Question {
  id: number;
  question: string;
  answer: string;
  score: number;
}

const PostInterviewPersonal = () => {
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

  const [selfIntoduction, setSelfIntroduction] = useState<Question[]>([
    {
      id: 1,
      question: '우리 동아리에 지원하게 된 동기를 말씀해 주세요.',
      answer: 'TAVE가 킹왕짱이기 때문입니다.',
      score: 0,
    },
    {
      id: 2,
      question: '우리 동아리가 어떤 점이 마음에 들었어요?',
      answer: '너무 멋진 사람들이 모여있어요.',
      score: 0,
    },
    {
      id: 3,
      question: '식사는 하셨나요?',
      answer: '돈까스를 먹었어요.',
      score: 0,
    },
    {
      id: 4,
      question: '한국인은 밥심입니다. 알겠습니까?',
      answer: '네네! 선장님!',
      score: 0,
    },
  ]);

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      question: '우리 동아리에 지원하게 된 동기를 말씀해 주세요.',
      answer: 'TAVE가 킹왕짱이기 때문입니다.',
      score: 0,
    },
    {
      id: 2,
      question: '우리 동아리가 어떤 점이 마음에 들었어요?',
      answer: '너무 멋진 사람들이 모여있어요.',
      score: 0,
    },
    {
      id: 3,
      question: '식사는 하셨나요?',
      answer: '돈까스를 먹었어요.',
      score: 0,
    },
    {
      id: 4,
      question: '한국인은 밥심입니다. 알겠습니까?',
      answer: '네네! 선장님!',
      score: 0,
    },
  ]);

  const [totalScore, setTotalScore] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setToggle(!toggle);
    if (toggle) {
      getTotalScore();
    }
  };

  const handleUpdateScoreIntroduction = (id: number, score: number) => {
    let tmps: Question[] = Object.assign([], selfIntoduction);
    tmps.map((info) => {
      if (info.id === id) {
        info.score = score;
      }
    });
    setSelfIntroduction(tmps);
  };

  const handleUpdateScoreQuestion = (id: number, score: number) => {
    let tmps: Question[] = Object.assign([], questions);
    tmps.map((info) => {
      if (info.id === id) {
        info.score = score;
      }
    });
    setQuestions(tmps);
  };

  const getTotalScore = () => {
    let tmpScore: number = 0;
    selfIntoduction.map((info) => {
      tmpScore += Number(info.score);
    });
    questions.map((info) => {
      tmpScore += Number(info.score);
    });
    setTotalScore(tmpScore);
  };

  useEffect(() => {
    getTotalScore();
  }, []);

  return (
    <div className="record">
      <h2>지원자 지원서 정보</h2>
      <h4>지원자의 정보 및 자기소개서를 확인해보세요.</h4>
      <form action="">
        <label htmlFor=""></label>
        <div className="paperScore">점수 총점 : {totalScore}점</div>
        <div className="gray_namecard">
          <div className="display_horiz">
            <img
              className="record_profileimg"
              src={profile}
              alt='profile image' />
            <div className="right_side record_personalinfo">
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
          <div className="small_title">자기소개서</div>
          {selfIntoduction.map((item) => {
            return (
              <PostPersonalSelfItem
                key={item.id}
                toggle={toggle}
                item={item}
                onUpdate={handleUpdateScoreIntroduction}
              ></PostPersonalSelfItem>
            );
          })}
          <div className="small_title">면접 질문</div>
          {questions.map((item) => {
            return (
              <PostPersonalSelfItem
                key={item.id}
                toggle={toggle}
                item={item}
                onUpdate={handleUpdateScoreQuestion}
              ></PostPersonalSelfItem>
            );
          })}
        </div>
      </form>

      <div className="post_twoButtons">
        {/* <button id="button1" onClick={handleUpdate}>
          수정하기
        </button> */}
        {toggle ? (<button onClick={(event) => handleUpdate(event)} id="button1">저장하기</button>) :
          (<button onClick={(event) => handleUpdate(event)} id="button1">수정하기</button>)}

        <button id="button1_blue">돌아가기</button>
      </div>
    </div>
  );
};

export default PostInterviewPersonal;
