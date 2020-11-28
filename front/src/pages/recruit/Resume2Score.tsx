import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  answer: string;
  score: number;
}

interface Props {
  question: Question;
  onUpdate(id: number, score: number): void;
}

const Resume2Score = ({ question, onUpdate }: Props) => {
  const [score, setScore] = useState<number>(question.score);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onUpdate(question.id, score);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScore((e.target.value as any) as number);
  };

  return (
    <div className="small_gray_namecard">
      <li>
        <div className="resumeQuestion">{question.question}</div>
        <div className="resumeAnswer">{question.answer}</div>
        <label htmlFor=""></label>
        <input
          type="number"
          value={score}
          onChange={handleChange}
          min={0}
          max={10}
        />
        <button type="submit" id="button4" onClick={handleClick}>
          저장
        </button>
      </li>
    </div>
  );
};

export default Resume2Score;
