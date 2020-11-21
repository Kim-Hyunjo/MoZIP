import React, { useState } from 'react';
import Circle from '../circle/Circle';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  maxScore: number;
}

const InterviewCommonQuestion = () => {
  // var questionCount = 3;

  const [questions, setQuestions] = useState<Question[]>([
    { id: 0, question: '간단한 자기소개 부탁드립니다.', maxScore: 9 },
    {
      id: 1,
      question: 'TAVE를 통해 무엇을 얻어가고 싶은지, 왜 지원했는지?',
      maxScore: 10,
    },
    {
      id: 2,
      question: '프론트엔드와 백엔드의 차이는 무엇인가요?',
      maxScore: 5,
    },
  ]);

  const [count, setCount] = useState<number>(3);
  const [score, setScore] = useState<number>(10);
  const [question, setQuestion] = useState<string>('');

  const scoreList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const interviewFormList = questions.map((item, index) => {
    return (
      <div className="interviewQuestion" key={index}>
        <div className="small_title">질문 {index + 1}.</div>
        <input type="text" value={item.question}></input>
        <div className="maxScore">
          최대 부여 점수
          <select
            itemType="number"
            value={item.maxScore}
            onChange={(e) => {
              let q: Question[] = Object.assign([], questions);
              q.map((info) => {
                if (info.id === item.id) {
                  q[info.id].maxScore = (e.target.value as unknown) as number;
                }
              });
              setQuestions(q);
            }}
          >
            {scoreList.map((item2) => {
              return (
                <option key={item2} value={item2}>
                  {item2}
                </option>
              );
            })}
          </select>
        </div>

        <button
          id="button_x"
          onClick={() => {
            // let q: Question[] = Object.assign([], questions);
            // q.filter((info) => info.id !== item.id);
            let q: Question[] = [];
            questions.map((info) => {
              if (info.id !== item.id) {
                q.push(info);
              }
            });
            setQuestions(q);
          }}
        >
          x
        </button>
      </div>
    );
  });

  return (
    <div className="interview">
      <h2>면접 질문지 작성</h2>
      <h4>면접시에 물어볼 기본 질문지를 작성해보세요.</h4>

      <div>
        <div>
          <div className="interviewQuestionList">{interviewFormList}
            <div className="interviewQuestion">
              <div className="small_title">추가 질문</div>
              <input
                type="text"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              ></input>
              <div className="maxScore">
                최대 부여 점수
                <select
                  itemType="number"
                  value={score}
                  onChange={(e) => {
                    setScore((e.target.value as any) as number);
                  }}
                >
                  {scoreList.map((item2) => {
                    return (
                      <option key={item2} value={item2}>
                        {item2}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                id = "button1"
                onClick={(e) => {
                  let q: Question[] = Object.assign([], questions);
                  let info: Question = {
                    id: count,
                    question: question,
                    maxScore: score,
                  };
                  q.push(info);
                  let id = count + 1;
                  setCount(id);
                  setQuestion('');
                  setScore(10);
                  setQuestions(q);
                  console.log(questions);
                }}
              >
                질문 추가
              </button>
            </div>
          </div>
        </div>
        <Link to ="/recruit/interview">
        <button id="button4">저장</button></Link>
      </div>
    </div>
  );
};

export default InterviewCommonQuestion;
