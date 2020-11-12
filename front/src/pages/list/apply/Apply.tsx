import { Button } from 'antd';
import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

const Apply = (
  props: RouteComponentProps<{ subject: string; circle_id: string }>,
) => {
  const [notification, setNotification]: any = useState<boolean>(false);
  const [checkError, setCheckError] = useState('');
  const checkHandler: any = (e: Event) => {
    setNotification((e.target as any).checked);
  };
  // const onSubmit :any = (e:Event) =>{
  //     e.preventDefault();
  // }
  const renderSubmit = () => {
    if (notification) {
      return (
        <Link
          to={`/list/${props.match.params.subject}/${props.match.params.circle_id}/apply2`}
        >
          <button id="button4" type="submit">
            다음
          </button>
        </Link>
      );
    } else
      return (
        <button id="button4" type="submit" disabled>
          다음
        </button>
      );
  };
  const clubRecruitInfo = [
    {
      name: 'TAVE',
      notice:
        '- ㅇㅇㅇ의 활동 기간은 2020년11월부터 2021년 2월까지입니다. 만약, 이 기간내에 졸업을 예정하고 계신다면 아쉽지만 활동이 불가능합니다.\n\n- 코로나 19 사태로 인하여 정부의 사회적 거리두기 정책에 따라  면접은 전체 온라인으로 진행됩니다. 면접 시간에 대한 자세한 사항은 서류 합격자 대상으로 재공지 드리겠습니다.\n\n- 활동 회비는 최종 합격자 대상으로 첫 모임때에 공지됩니다.\n\n※ 프론티어란? ㅇㅇㅇ 7기를 이끌어가는 리더를 양성하는 과정으로 소정 기간의 교육을 통해 7기의 전체 운영을 담당하게 됩니다.\n\n※ 기타 문의 사항 : 플러스 친구 추가 후 문의( http://pf.kakao.com/_abcdef )',
    },
  ];
  return (
    <div>
      <h2>{clubRecruitInfo[0].name} 지원하기</h2>
      <div>
        <div className="middle_title">지원 전 공지사항</div>
        <div className="clubRecruitNotice">{clubRecruitInfo[0].notice}</div>
      </div>
      <div>
        {/* <form onSubmit={onSubmit} > */}
        <form className="noticeConsent">
          <label htmlFor=""></label>
          <input
            type="checkbox"
            name="agreement"
            checked={notification}
            onChange={checkHandler}
          />
          <span>본 공지사항을 모두 읽었으며 동의합니다.</span>
        </form>
        <div className="next">{renderSubmit()}</div>
      </div>
    </div>
  );
};

export default Apply;
