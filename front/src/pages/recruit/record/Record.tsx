import React from 'react';
import '../resume.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Record = () => {
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

  const selfIntoduction = [
    {
      question: '우리 동아리에 지원하게 된 동기를 말씀해 주세요.',
      answer: 'TAVE가 킹왕짱이기 때문입니다.',
    },
    {
      question: '우리 동아리에 지원하게 된 동기를 말씀해 주세요.',
      answer: 'TAVE가 킹왕짱이기 때문입니다.',
    },
    {
      question: '우리 동아리에 지원하게 된 동기를 말씀해 주세요.',
      answer: 'TAVE가 킹왕짱이기 때문입니다.',
    },
    {
      question: '우리 동아리에 지원하게 된 동기를 말씀해 주세요.',
      answer: 'TAVE가 킹왕짱이기 때문입니다.',
    },
  ];

  const interviewQuestions = [
    { id: 0, question: '간단한 자기소개 부탁드립니다.dd', maxScore: 9 },
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
  ];

  return (
    <div className="record">
      <h2>면접 평가서</h2>
      <h4>지원자의 면접 답변을 실시간으로 작성해보세요.</h4>
      <form action="">
        <label htmlFor=""></label>
        <div className="stateBox">
          <ul className="states">
            <li>
              <div className="stateName">한채은</div>
            </li>
            <li>
              <div className="stateName">한예송</div>
            </li>
          </ul>

          <div className="interviewDate">면접 일시 2020-11-28 16:00</div>
          <div className="interviewer">면접관 최우영, 왕희도</div>
          <div className="paperScore">서류 총점 : 39점</div>
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
            <div className="small_title">자기소개서</div>
            <form action="">
              <ul>
                {selfIntoduction.map((info) => {
                  return (
                    <div className="small_gray_namecard">
                      <li>
                        <div className="resumeQuestion">{info.question}</div>
                        <div className="resumeAnswer">{info.answer}</div>
                        <div className="answerScore">
                          <span>10점</span>
                        </div>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </form>

            <div className="small_title">면접 질문</div>
            {interviewQuestions.map((info, index) => {
              return (
                <div className="interviewQnA">
                  <div className="interviewQuestion">
                    질문 {index + 1}.<br></br>
                    {info.question}
                  </div>
                  <div className="interviewAnswer">
                    <input type="text"></input>
                  </div>
                  <div>
                    {[...Array(info.maxScore)].map((n, index) => {
                      return (
                        <span>
                          <label>
                            <input
                              type="radio"
                              name="score"
                              value={index + 1}
                            />
                            {index + 1}
                          </label>
                          {'  '}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {/* <div className="interviewQnA">
              <div className="interviewQuestion">
                질문 1.<br></br>간단히 자기소개 부탁드립니다.
              </div>
              <div className="interviewAnswer">
                <input></input>
              </div>
            </div>
            <div className="interviewQnA">
              <div className="interviewQuestion">
                질문 1.<br></br>간단히 자기소개 부탁드립니다.
              </div>
              <div className="interviewAnswer">
                <input></input>
              </div>
            </div>
            <div className="interviewQnA">
              <div className="interviewQuestion">
                질문 1.<br></br>간단히 자기소개 부탁드립니다.
              </div>
              <div className="interviewAnswer">
                <input></input>
              </div>
            </div>
            <div className="interviewQnA">
              <div className="interviewQuestion">
                질문 1.<br></br>간단히 자기소개 부탁드립니다.
              </div>
              <div className="interviewAnswer">
                <input></input>
              </div>
            </div>
            <button id="button_plus">+</button>
            <div className="interviewQnA">
              <div className="interviewExtra">비고</div>
              <div className="interviewExtraW">
                <input></input>
              </div>
            </div> */}
          </div>
        </div>
      </form>
      <div className="twoButtons">
        <Link to ="/recruit/interview/detail/1">
        <button id="button1_blue">저장</button></Link>
        <button id="button1">임시 저장</button>
      </div>
    </div>
  );
};

export default Record;
