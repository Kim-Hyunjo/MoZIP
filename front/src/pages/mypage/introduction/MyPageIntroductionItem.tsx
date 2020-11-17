/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import '../layout.css';
import '../button.css';

interface Question {
  id: number;
  title: string;
  content: string;
}

interface Props {
  propsQuestion: Question;
  onUpdate(id: number, content: string): void;
  onRemove(id: number): void;
}

const MyPageIntroductionItem: React.FunctionComponent<Props> = ({
  propsQuestion,
  onUpdate,
  onRemove,
}) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>(propsQuestion.content);

  const handleUpdate = () => {
    setEditing(!editing);
    onUpdate(propsQuestion.id, question);
  };

  const handleRemove = () => {
    onRemove(propsQuestion.id);
  };

  const handleToggle = () => {
    setEditing(!editing);
  };

  return (
    <div>
      <div className="introduction_question">{propsQuestion.title}</div>
      <div className="introduction_answer">
        {editing ? (
          <div className="input">
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={6}
              placeholder="질문에 대한 답안을 작성해주세요."
              variant="outlined"
              value={question}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
              ) => {
                setQuestion(e.target.value);
              }}
              fullWidth
            />
          </div>
        ) : (
          <div>
            <div className="savedAnswer">{propsQuestion.content}</div>
          </div>
        )}

        <div className="introduction_buttons">
          {editing ? (
            <button id="button1_blue" onClick={handleUpdate}>
              저장하기
            </button>
          ) : (
            <button id="button1_blue" onClick={handleToggle}>
              수정하기
            </button>
          )}
          <button id="button1_red" onClick={handleRemove}>
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPageIntroductionItem;
