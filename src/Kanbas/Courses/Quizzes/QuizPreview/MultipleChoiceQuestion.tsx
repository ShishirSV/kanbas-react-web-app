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

function MultipleChoiceQuestion({ question, answer, onChange }: QuestionProps) {
  return (
    <div className="question-container">
      <h4 className="question-title">{question.title}</h4>
      <div className="question-text">{question.questionText}</div>
      <div className="choices">
        {question.choices && question.choices.map((choice, index) => (
          <label key={index} className="choice-label">
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={answer === choice.text}
              onChange={() => onChange(choice.text)}
              className="choice-input"
            />
            {choice.text}
          </label>
        ))}
      </div>
    </div>
  );
}

export default MultipleChoiceQuestion;