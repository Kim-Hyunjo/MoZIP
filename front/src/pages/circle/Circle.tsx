import React, { Fragment, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const Circle = (
  props: RouteComponentProps<{ subject: string; circle_id: string }>,
) => {
  const [update, setUpdate] = useState<boolean>(false);
  const [faqs, setFaqs] = useState<FAQ[]>([
    { id: 0, question: '지원 동기/이유', answer: 'asdasdasd' },
    {
      id: 1,
      question:
        '대학 입학 후 현재까지 한 활동과 느낀점을 중심으로 자신을 소개해주세요.',
      answer: '',
    },
    { id: 2, question: '자기 소개(성격)', answer: '' },
    { id: 3, question: '취미/특기/관심사', answer: '' },
    { id: 4, question: '동아리 활동과 관련하여 지금까지 한 활동', answer: '' },
    {
      id: 5,
      question: '단체 생활을 한 경험, 느낀점, 단체에서의 역할',
      answer: '',
    },
    {
      id: 6,
      question: '타인과 갈등 발생했던 상황에서 성공/실패한 경험 느낀점',
      answer: '',
    },
    { id: 7, question: '공모전/대회 경력', answer: '' },
    { id: 8, question: '자신에게 가장 의미 있었던 경험', answer: '' },
    { id: 9, question: '동아리에서 하고 싶은 활동', answer: '' },
    { id: 10, question: '동아리 활동을 통해 얻고 싶은 점', answer: '' },
    { id: 11, question: '본인이 동아리에 도움이 될 수 있는 점', answer: '' },
    { id: 12, question: '동아리에서 본인을 뽑아야 하는 이유', answer: '' },
    { id: 13, question: '향후 학업 계획', answer: '' },
    { id: 14, question: '각오', answer: '' },
  ]);

  // let tmps: FAQ[] = [];
  const [tmpFaqs, setTmpFaqs] = useState<FAQ[]>([]);

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="circle" id="wrapper">
      <div className="circle_header">
        <h2>Tave</h2>
        <div className="small_title">국내 최초 4차 산업 혁명 동아리</div>
        <div className="openDate">2017.06.30 창립</div>
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
        안녕하세요! 제 4차 산업혁명 연구 동아리 TAVE에서 6기 회원을 모집합니다.
        <br></br>
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
              <div className="reviewer">나는야테이비</div>
              <div className="reviewDetail">
                TAVE 6기로 활동하였습니다. 최고의 동아리입니다. 글 길게 쓰면은
                말풍선이 길어지지롱 히히ㅣ히힣히ㅣㅣㅣ히히ㅣ히ㅣ ㅎ ㅣㅎ ㅣㅎ
                ㅣㅎ히 히 hello hi my mame dfsdj a dfid fsdf wef grigrgjowijg
                owjgowiejowijg oojweg kjflsjfl oh jflsdjfl sdf sfj df fjsf lfjs
                flsd ff lsdfj sf lf ldfdflkd fdf sdf sdlfj sdf sdlfsldfldsjf sdf
                djflsdkf fdsfs ff wef fw fwef wef ew f hr jr wr g e fwef w
                fjlsf여기가 끝이야
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
            <div className="circle_review">
              <div className="reviewer">나는야테이비</div>
              <div className="reviewDetail">
                TAVE 6기로 활동하였습니다. 최고의 동아리입니다.
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
          {update ? (
            <div className="FAQ_list">
              {/* {faqs.map((item) => {
                return (
                  <Fragment>
                    <div className="FAQ_question">{item.question}</div>
                    <div className="FAQ_answer">{item.answer}</div>
                  </Fragment>
                );
              })} */}
              {/* <div className="FAQ_question">다음 모집은 언제쯤인가요?</div>
              <div className="FAQ_answer">
                안녕하세요! 문의 주셔서 감사합니다. 다음 7기 모집은 21년 1월로
                예정하고 있습니다.
              </div>
              <div className="FAQ_question">다음 모집은 언제쯤인가요?</div>
              <div className="FAQ_answer">
                안녕하세요! 문의 주셔서 감사합니다. 다음 7기 모집은 21년 1월로
                예정하고 있습니다.
              </div> */}
            </div>
          ) : (
            <div>
              {tmpFaqs.map((item) => {
                return (
                  <Fragment>
                    <input
                      className="FAQ_question"
                      value={item.question}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        // let tmpFaq: FAQ = {};
                      }}
                    ></input>
                    <input className="FAQ_answer" value={item.answer}></input>
                  </Fragment>
                );
              })}
            </div>
          )}
          <div>{update}</div>
          <button id="button5B" onClick={handleUpdate}>
            {update ? (
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
