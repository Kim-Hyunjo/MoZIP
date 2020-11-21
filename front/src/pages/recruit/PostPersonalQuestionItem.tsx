import React, { useState } from 'react';

interface Props {
  toggle: boolean;
}

const PostPersonalQuestionItem = ({ toggle }: Props) => {
  const [score, setScore] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScore(Number(e.target.value));
  };

  return (
    <div className="small_gray_namecard">
      <div className="interviewQuestion">간단히 자기소개 부탁드립니다.</div>
      <div className="interviewAnswer">저는 저입니다.</div>
      <div className="answerScore">
        {toggle ? (
          <span>
            <input type="number" value={score} onChange={handleChange}></input>
          </span>
        ) : (
          <span>3점</span>
        )}
      </div>
    </div>
  );
};

export default PostPersonalQuestionItem;
