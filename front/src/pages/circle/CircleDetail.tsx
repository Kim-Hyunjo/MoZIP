import React, { useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import CircleDetailQnA from './CircleDetailQnA';
import poster from '../images2/poster@2x.png';

interface QnA {
  id: number;
  nickname: string;
  date: string;
  comment: string;
  manager: boolean;
}

const CircleDetail = (
  props: RouteComponentProps<{ subject: string; circle_id: string }>,
) => {
  const [qnas, setQnas] = useState<QnA[]>([
    {
      id: 0,
      nickname: '미래테이비',
      date: '2020-11-19',
      comment: '다음모집은 언제쯤인가요?',
      manager: false,
    },
    {
      id: 1,
      nickname: '미래테이비',
      date: '2020-11-19',
      comment:
        '안녕하세요 문의주셔서 감사합니다. 다음 7기 모집은 21년 1월로 예정하고 있습니다.',
      manager: true,
    },
    {
      id: 2,
      nickname: '미래테이비',
      date: '2020-11-19',
      comment: '다음모집은 언제쯤인가요?',
      manager: false,
    },
    {
      id: 3,
      nickname: '미래테이비',
      date: '2020-11-19',
      comment:
        '안녕하세요 문의주셔서 감사합니다. 다음 7기 모집은 21년 1월로 예정하고 있습니다.',
      manager: true,
    },
  ]);
  const [id, setId] = useState<number>(4);
  const [comment, setComment] = useState<string>('');

  const handleSave = () => {
    let today: Date = new Date();
    let tmps: QnA[] = Object.assign([], qnas);
    let tmp: QnA = {
      id: id,
      nickname: '미래테이비',
      date: today.toLocaleString(),
      comment: comment,
      manager: false,
    };
    tmps.push(tmp);
    setId(id + 1);
    setComment('');
    setQnas(tmps);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setComment(e.target.value);
  };

  return (
    <div className="circleDetail">
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
        <div className="recruitDetailButton">
          <Link
            to={`/list/${props.match.params.subject}/${props.match.params.circle_id}/apply`}
          >
            <button id="button5B">동아리 지원하기!</button>
          </Link>
          <Link
            to={`/list/${props.match.params.subject}/${props.match.params.circle_id}`}
          >
            <button id="button5W">동아리 메인페이지</button>
          </Link>
        </div>
        <img></img>
      </div>
      
      <div className="circle_detail">
      <img className="poster"
        src={ poster }
        alt='tab_icon' />
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
        <div className="applyButton">
          <button id="button10">동아리 지원하기!</button>
        </div>
      </Link>
      <div className="centeralign_wrapper">
        <div className="small_title">QnA {'개수'}</div>
        <div className="Qu_List">
          {qnas.map((item) => {
            return (
              <CircleDetailQnA
                qna={item}
                isManager={item.manager}
              ></CircleDetailQnA>
            );
          })}
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
            value={comment}
            onChange={handleChange}
          />
          <button id="button4" onClick={handleSave}>
            입력
          </button>
        </div>
      </div>
    </div>
  );
};

export default CircleDetail;
