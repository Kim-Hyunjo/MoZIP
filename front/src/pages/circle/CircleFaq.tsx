import React, { Fragment, useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  onUpdate(id: number, question: string, answer: string): void;
  isUpdate: boolean;
  faq: FAQ;
}

const CircleFaq = ({ onUpdate, isUpdate, faq }: Props) => {
  const [question, setQuestion] = useState<string>(faq.question);
  const [answer, setAnswer] = useState<string>(faq.answer);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'question') {
      setQuestion(e.target.value);
    } else {
      setAnswer(e.target.value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onUpdate(faq.id, question, answer);
  };

  return (
    <Fragment>
      {isUpdate ? (
        <Fragment>
          <div className="FAQ_question">{faq.question}</div>
          <div className="FAQ_answer">{faq.answer}</div>
        </Fragment>
      ) : ( 
      <div className="editFAQ">
          <input
            className="FAQ_question"
            type="text"
            name="question"
            value={question}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          <input
            className="FAQ_answer"
            type="text"
            name="answer"
            value={answer}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </div>
      )}
    </Fragment>
  );
};

export default CircleFaq;
