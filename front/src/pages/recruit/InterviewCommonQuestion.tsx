import React, { useState } from 'react';
import Circle from '../circle/Circle';

interface Question {
  id: number;
  question: string;
  maxScore: number;
}

const InterviewCommonQuestion = () => {
  let questionCount = 0;

  const [questions, setQuestions] = useState<Question[]>([
    { id: 0, question: '간단한 자기소개 부탁드립니다.', maxScore: 10 },
    {
      id: 1,
      question: 'TAVE를 통해 무엇을 얻어가고 싶은지, 왜 지원했는지?',
      maxScore: 10,
    },
    {
      id: 2,
      question: '프론트엔드와 백엔드의 차이는 무엇인가요?',
      maxScore: 10,
    },
  ]);

  const scoreList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClickRemove = () => {}; // 삭제

  const interviewFormList = questions.map((item, index) => {
    return (
      <div className="interviewQuestion" key={index}>
        <div className="small_title">질문{index + 1}</div>
        <input type="text" value={item.question}></input>
        <div className="maxScore">
          최대 부여 점수
          <select
            itemType="number"
            defaultValue={10}
            value={item.maxScore}
            onChange={(e) => {
              //   setScore(e.target.value as any);
              item.maxScore = (e.target.value as unknown) as number;
            }}
            // onBlur={(e) => setScore((e.target.value as any) as number)}
          >
            {scoreList.map((item2) => {
              return (
                <option key={index} value={item2}>
                  {item2}
                </option>
              );
            })}
          </select>
        </div>

        <button id="button_x" onClick={handleClickRemove}>x</button>
      </div>
    );
  });

  return (
    <div className="interview">
      <h2>면접 질문지 작성</h2>
      <h4>면접시에 물어볼 기본 질문지를 작성해보세요.</h4>

      <div>
        <div className="interviewQuestionList">{interviewFormList}</div>
      </div>
      <button id="button4">저장</button>
    </div>
  );
};

export default InterviewCommonQuestion;
