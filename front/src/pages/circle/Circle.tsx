import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';


const Circle = (
  props: RouteComponentProps<{ subject: string; circle_id: string }>,
) => {
  return (
    <div id="wrapper">
      <div className="circle_header">
        <h2>Tave</h2>
        <div className="small_title">국내 최초 4차 산업 혁명 동아리</div>
        <div className="openDate">2017.06.30 창립</div>
        <div className="hashtag">#학술</div>
        <div className="detailButton">
          <Link to={`${props.match.url}/detail`}>
            <button id="button8">모집 상세</button>
          </Link>
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
        <div>
          <div className="small_title">FAQ</div>
          <div className="FAQ_list">
            <div className="FAQ_question">다음 모집은 언제쯤인가요?</div>
            <div className="FAQ_answer">
              안녕하세요! 문의 주셔서 감사합니다. 다음 7기 모집은 21년 1월로
              예정하고 있습니다.
            </div>
            <div className="FAQ_question">다음 모집은 언제쯤인가요?</div>
            <div className="FAQ_answer">
              안녕하세요! 문의 주셔서 감사합니다. 다음 7기 모집은 21년 1월로
              예정하고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
