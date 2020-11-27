import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

interface Candidate {
  id: number;
  name: string;
  group: string;
  time: string;
  score: number;
  status: string;
  isChecked: boolean;
}

interface Props {
  candidate: Candidate;
  onChangeCheck(id: number, isChecked: boolean): void;
}

const ResumeCandidate = ({ candidate, onChangeCheck }: Props) => {
  const handleChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeCheck(candidate.id, e.target.checked);
  };

  return (
    <Fragment>
      <label htmlFor=""></label>
      <input type="checkbox" onChange={handleChangeCheck} />
      <span className="personalName">{candidate.name} </span>
      <span className="personalTime">
        {candidate.group}
        {candidate.time}
      </span>
      <div className="rightSide">
        <span className="personalScore"> 점수 :{candidate.score}점</span>
        <strong className={(candidate.status === '합격') ? 'stateName_pass_w' :
          (candidate.status === '불합격') ? 'stateName_nonpass_w' :
            (candidate.status === '보류') ? 'stateName_keep_w' :
              (candidate.status === '미결정') ? 'stateName_yet_w' : 'stateName_none'}
          id="skip">{candidate.status}</strong>



        <Link to="/recruit/resume/:member_id">
          <button id="button1">상세보기</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default ResumeCandidate;
