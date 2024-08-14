import React from 'react';

interface QuestionProps {
  question: {
    id: string;
    title: string;
    questionText: string;
    choices?: { text: string; isCorrect: boolean }[];
  };
  answer: any;
  onChange: (answer: any) => void;
}

function FillInBlanksQuestion({ question, answer, onChange }: QuestionProps) {
  // Split the question text by placeholders and create an array of segments and blank inputs
  const parts = question.questionText.split('{{blank}}');

  return (
    <div className="fill-in-blanks-question" style={{ marginBottom: '20px' }}>
      <h4 className="question-title" style={{ marginBottom: '10px' }}>{question.title}</h4>
      <div className="question-text" style={{ marginBottom: '15px' }}>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <input
                type="text"
                value={answer[index] || ''}
                onChange={(e) => onChange(e.target.value)}
                className="blank-input"
                placeholder="Type your answer here"
                style={{ width: '200px', margin: '0 5px', borderRadius: '4px', border: '1px solid #ced4da', padding: '5px' }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default FillInBlanksQuestion;
