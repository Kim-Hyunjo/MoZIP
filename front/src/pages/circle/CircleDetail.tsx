import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const CircleDetail = (
  props: RouteComponentProps<{ subject: string; circle_id: string }>,
) => {
  return (
    <div>
      {/* <h2>{props.match.params.subject}</h2>
      <h2>{props.match.params.circle_id}</h2> */}
      <div className="circle_header">
        <h2>4차 산업혁명 동아리 Tave 6기 모집 (~7/18)</h2>
        <div className="recruitDetail">
          <div>모집인원: {'0명'}</div>
          <div>모임지역: {'서울, 경기'}</div>
          <div>참여대상: {'대학생, 직장인, 일반인'}</div>
          <div>모임시작: {'미정'}</div>
        </div>
        <div className ="recruitDetailButton">
          <Link to={`/list/${props.match.params.subject}/${props.match.params.circle_id}/apply`}>
            <button id ="button5B">동아리 지원하기!</button>
          </Link>
          <button id="button5W">동아리 메인페이지</button>
        </div>
      <img></img>
      </div>
      
      <div className="circle_detail">
        <div>
          안녕하세요! 제 4차 산업혁명 연구 동아리 TAVE에서 6기 회원을
          모집합니다.커리큘럼은 4차산업혁명 관련 세션과 스터디 그리고
          프로젝트로, 4차 산업혁명에 관한 시야를 넓힐 수 있고 자신의 실력을
          향상시킬 수 있도록 구성했습니다.또한 다양한 분야의 사람들과 교류하며
          네트워크를 형성할 수 있습니다!전체 오프라인 모임은 한강 Ice Breaking,
          OT, 컨퍼런스 총3번 진행되며 스터디 및 프로젝트 활동은 팀별로 소규모로
          진행됩니다. 자세한 내용은 TAVE 카카오톡 플러스 친구를 통해 문의
          바랍니다.
        </div>
        <br />
        <div>▼ TAVE 지원지원서 : https://forms.gle/RwMERfagmBNTkNap7 </div>
        <div>
          ▼ 모집 책자 :
          https://drive.google.com/file/d/1vFs_FkMcoCfVg4pVoLjFfArz7xjuivWk/view?usp=sharing
        </div>
        <div>
          ▼ 컨퍼런스 :
          동영상https://www.youtube.com/channel/UCLEXVED0YBiMCl7tFCSD7cQ
        </div>
        <div>▼ 컨퍼런스 자료 : https://blog.naver.com/t-ave/221994568807</div>
      </div>

      <Link
        to={`/list/${props.match.params.subject}/${props.match.params.circle_id}/apply`}
      >
        <div className="applyButton"><button id="button10">동아리 지원하기!</button></div>
      </Link>
      <div>
        <div className="small_title">QnA {'개수'}</div>
        <div className="Qu_List">
          <div className="question">
            <div className="questioner">{'미래테이비'}</div>
            <div className="questionDetail">{'다음모집은 언제쯤인가요?'}</div>
            <div className="questionDate">{'날짜'}</div>
            <button id="button0" hidden={true}>답글</button>
            <button id="button0">신고</button>
          </div>
          <div className="answer">
            <div className="questioner">{'최우영(회장)'}</div>
            <div className="questionDetail">
              {
                '안녕하세요 문의주셔서 감사합니다. 다음 7기 모집은 21년 1월로 예정하고 있습니다.'
              }
            </div>
            <div className="questionDate">{'날짜'}</div>
            <button id="button0" hidden={false}>답글</button>
            <button id="button0">신고</button>
          </div>
          <div className="question">
            <div className="questioner">{'미래테이비'}</div>
            <div className="questionDetail">{'다음모집은 언제쯤인가요?'}</div>
            <div className="questionDate">{'날짜'}</div>
            <button id="button0" hidden={true}>답글</button>
            <button id="button0">신고</button>
          </div>
          <div className="answer">
            <div className="questioner">{'최우영(회장)'}</div>
            <div className="questionDetail">
              {
                '안녕하세요 문의주셔서 감사합니다. 다음 7기 모집은 21년 1월로 예정하고 있습니다.'
              }
            </div>
            <div className="questionDate">{'날짜'}</div>
            <button id="button0" hidden={false}>답글</button>
            <button id="button0">신고</button>
          </div>
        </div>
        <div className="questionWrite">
            <TextField
            id="outlined-multiline-static"
            label="댓글 작성"
            multiline
            rows={4}
            
            placeholder="동아리에 궁금한 점을 입력해주세요."
            variant="outlined"
            fullWidth
          />
          <button id="button4">입력</button>
        </div>
      </div>
    </div>
  );
};

export default CircleDetail;
