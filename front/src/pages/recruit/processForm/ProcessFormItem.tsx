import React, { Fragment, useState } from 'react';
import MultiItem from './MultiItem';

interface Question {
  id: number;
  type: string;
  isSingleChoice: boolean;
  multi: string[];
  isLong: boolean;
  question: string;
}

interface Props {
  onUpdate(id: number, question: Question): void;
  onRemove(id: number): void;
  index: number;
  question: Question;
}

const ProcessFormItem = ({ index, question, onUpdate, onRemove }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [updateQuestion, setUpdateQuestion] = useState<string>(
    question.question,
  );

  const handleToggle = () => {
    if (toggle) {
      let tmp: Question = question;
      tmp.question = updateQuestion;
      onUpdate(question.id, tmp);
    }
    setToggle(!toggle);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateQuestion(e.target.value);
  };

  const handleUpdateMulitItem = (MultiItem: string) => {
    let tmp: Question = question;
    // tmp.
  };

  return (
    <Fragment>
      <div className="recruit_question">
        <div className="recruit_question_number">{index + 1}. </div>
        <div className="recruit_question_type">{question.type}</div>
        {toggle ? (
          <Fragment>
            <input type="text" value={updateQuestion} onChange={handleChange} />
          </Fragment>
        ) : (
          <Fragment>
            <div className="recruit_question_content">
              {question.question} <span>*</span>
            </div>
          </Fragment>
        )}
        <div>
          <button
            id="button6W_smaller"
            className="buttons_6"
            onClick={handleToggle}
          >
            {toggle ? '저장' : '수정'}
          </button>
          <button id="button6R_smaller" className="buttons_6">
            삭제
          </button>
        </div>
      </div>
      {question.type === '객관식' ? (
        <Fragment>
          <div className="recruit_question_content">
            {question.multi.map((item) => {
              return <div key={item}>- {item}</div>;
              // return (
              //   <MultiItem
              //     item={item}
              //     toggle={toggle}
              //     onUpdate={handleUpdateMulitItem}
              //   ></MultiItem>
              // );
            })}
          </div>
        </Fragment>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default ProcessFormItem;
