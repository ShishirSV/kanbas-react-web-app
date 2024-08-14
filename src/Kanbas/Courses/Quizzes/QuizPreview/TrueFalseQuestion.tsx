import React from 'react';
import "./styles.css";

interface QuestionProps {
  question: {
    id: string;
    title: string;
    questionText: string;
    choices?: { text: string; isCorrect: boolean }[];
    isTrue?: boolean;
  };
  answer: any;
  onChange: (answer: any) => void;
}

function TrueFalseQuestion({ question, answer, onChange }: QuestionProps) {
  return (
    <div className="true-false-question">
      <h4 className="question-title">{question.title}</h4>
      <div className="question-text">{question.questionText}</div>
      <div className="choices">
        <label className="choice-label">
          <input
            type="radio"
            name={`question-${question.id}`}
            checked={answer === true}
            onChange={() => onChange(true)}
            className="choice-input"
          />
          True
        </label>
        <label className="choice-label">
          <input
            type="radio"
            name={`question-${question.id}`}
            checked={answer === false}
            onChange={() => onChange(false)}
            className="choice-input"
          />
          False
        </label>
      </div>
    </div>
  );
}

export default TrueFalseQuestion;