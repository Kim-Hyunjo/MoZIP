import React, { Fragment, useState } from 'react';

interface QnA {
  id: number;
  nickname: string;
  date: string;
  comment: string;
  manager: boolean;
}

interface Props {
  qna: QnA;
  isManager: boolean;
}

const CircleDetailQnA = ({ qna, isManager }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [reply, setReply] = useState<string>('');

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setToggle(!toggle);
  };

  const handleReply = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReply(reply);
  };

  return (
    <Fragment>
      <div className={isManager ? 'answer' : 'question'}>
        {/* <div className="question"> */}
        <div className="questioner">{qna.nickname}</div>
        <div className="questionDetail">{qna.comment}</div>
        <div className="questionDate">{qna.date}</div>
        <div className="movetoright">
          <button className="movemoreright" id="button0" onClick={handleToggle}>
            답글
          </button>
          <button id="button0">신고</button>
        </div>
      </div>
      <div>
        {toggle ? (
          <Fragment>
            <input type="text" value={reply} onChange={handleReply}></input>
            <button>등록</button>
          </Fragment>
        ) : (
          <div></div>
        )}
      </div>
    </Fragment>
  );
};

export default CircleDetailQnA;
