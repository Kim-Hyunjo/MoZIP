import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import CircleFaq from './CircleFaq';
import axios from'axios'
import { DevelopUrl } from '../../http/HttpUrl';
import { StringLiteral, StringLiteralType } from 'typescript';
import { StringifyOptions } from 'querystring';
interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const Circle = (
  props: RouteComponentProps<{ subject: string; circle_id: string }>,
) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [faqs, setFaqs] = useState<FAQ[]>([
    { id: 0, question: 'TAVE에서는 주로 무슨 활동을 하나요?', answer: '본인의 흥미에 맞는 공부를 원하는 사람들과 함께 할 수 있습니다.' },
    {
      id: 1,
      question:
        '활동 시기는 어떻게 되나요?',
      answer: '반년마다 새로운 기수를 모집 중이며, 한 기수는 반년간 전반기, 후반기로 나누어 활동을 진행합니다. 다음 기수를 뽑았더라도 계속 활동을 하고 싶으시다면 OB로 지속적으로 활동하시는 것도 가능합니다 :)',
    },
  ]);
  const [id, setId] = useState<number>(15);
  const [newQuestion, setNewQuestion] = useState<string>('');
  const [newAnswer, setNewAnswer] = useState<string>('');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'question') {
      setNewQuestion(e.target.value);
    } else {
      setNewAnswer(e.target.value);
    }
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let tmps: FAQ[] = Object.assign([], faqs);
    let tmp: FAQ = {
      id: id,
      question: newQuestion,
      answer: newAnswer,
    };
    tmps.push(tmp);
    setFaqs(tmps);
    setId(id + 1);
    setNewQuestion('');
    setNewAnswer('');
  };

  const onUpdate = (id: number, question: string, answer: string) => {
    let tmps: FAQ[] = Object.assign([], faqs);
    tmps.map((info) => {
      if (info.id === id) {
        info.question = question;
        info.answer = answer;
      }
    });
    setFaqs(tmps);
  };

  const onRemove = (id: number) => {
    let tmps: FAQ[] = [];
    console.log(id + 'asd');
    faqs.map((info) => {
      if (info.id !== id) {
        tmps.push(info);
      }
    });
    console.log(tmps);
    setFaqs(tmps);
  };
const [info, setinfo] = useState<any>([]);
const getData = async() =>{
  await axios.get('http://localhost:8000/list/academy/1/').then((r)=>{
    let res = r.data;
    console.log(res)
    setinfo(res)
    setFaqs(res)
  })
}
useEffect(() => {
getData()

}, [])
const foundationdates = Object.assign({},info.foundationdate)
const foundationdates2 = Object.values(foundationdates)
const value = foundationdates2.join('.')
console.log(foundationdates2);

// const reviews = info.map((info:string)=>{
//   return(
//     <div className="circle_review">
//               <div className="reviewer">{info.name}</div>
//               <div className="reviewDetail">
//                 {info.content}
//               </div>
//               <div className="reviewDate">2020-09-19 17:00</div>
//             </div>
//   )
// })
return (
    <div className="circle" id="wrapper">
      <div className="circle_header">
        <h2>{info.name}</h2>
        <div className="small_title">{info.information}</div>
  <div className="openDate">{value}창립</div>
        <div className="hashtag">#학술</div>
        <div className="detailButton">
          <Link to={`${props.match.url}/detail`}>
            <button id="button5B">모집 상세</button>
          </Link>
        </div>
        <div className="clubImage150">
          <img src="http://placehold.it/150x150" />
        </div>
      </div>
      <div className="circle_detail">
        커리큘럼은 4차산업혁명 관련 세션과 스터디 그리고 프로젝트로, 4차
        산업혁명에 관한 시야를 넓힐 수 있고 자신의 실력을 향상시킬 수 있도록
        구성했습니다.<br></br>
        또한 다양한 분야의 사람들과 교류하며 네트워크를 형성할 수 있습니다!
        <br></br>
        전체 오프라인 모임은 한강 Ice Breaking, OT, 컨퍼런스 총3번 진행되며
        스터디 및 프로젝트 활동은 팀별로 소규모로 진행됩니다.<br></br>
        자세한 내용은 TAVE 카카오톡 플러스 친구를 통해 문의 바랍니다.
      </div>
      <div>
        <div className="section_wrapper">
          <div className="small_title">동아리원 후기</div>
          <div className="circle_reviewList">
            <div className="circle_review">
              <div className="reviewer"></div>
              <div className="reviewDetail">
                TAVE 6기로 활동하였습니다. 정말 많은 것을 배우고 느낄 수 있었습니다. <br></br>특히 너무 좋은 조원들과
                재미있게 스터디와 프로젝트를 진행할 수 있어서 너무나도 값진 경험이었습니다. <br></br>
                지원을 고민 중이시라면 망설이지 말고 지원하세요!
              </div>
              <div className="reviewDate">2020-09-19 17:00</div>
            </div>
            <div className="circle_review">
              <div className="reviewer">나는야테이비</div>
              <div className="reviewDetail">
                TAVE 6기로 활동하였습니다. 최고의 동아리입니다.
              </div>
              <div className="reviewDate">2020-09-19 17:00</div>
            </div>
          </div>
        </div>
        <div className="section_wrapper">
          <div className="small_title">FAQ</div>
          <div className="FAQ_list">
            {faqs.map((item) => {
              return (
                <CircleFaq
                  key={item.id}
                  onUpdate={onUpdate}
                  onRemove={onRemove}
                  isUpdate={toggle}
                  faq={item}
                ></CircleFaq>
              );
            })}
          </div>
          {toggle ? (
            <div></div>
          ) : (
            <div className="editFAQ">
              <div className="small_title">FAQ 추가하기</div>
              <input
                className="FAQ_question"
                type="text"
                name="question"
                placeholder="자주 묻는 질문을 작성해보세요."
                value={newQuestion}
                onChange={handleChange}
              ></input>
              <input
                className="FAQ_answer"
                type="text"
                name="answer"
                placeholder="질문에 대한 답변을 작성해보세요."
                value={newAnswer}
                onChange={handleChange}
              ></input>
              <button id="button5W" onClick={handleSave}>
                질문 답변 저장
              </button>
            </div>
          )}
          <button
            className="FAQeditButton"
            id="button5B"
            onClick={handleToggle}
          >
            {toggle ? (
              <Fragment>FAQ 수정</Fragment>
            ) : (
              <Fragment>FAQ 저장</Fragment>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Circle;
