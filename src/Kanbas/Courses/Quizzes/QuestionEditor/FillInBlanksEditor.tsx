import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaTrash } from 'react-icons/fa';

interface FillInBlanksEditorProps {
  onSave: (questionData: any) => void;
  onCancel: () => void;
}

interface Answer {
  text: string;
}

interface QuestionData {
  type: 'fill-in-blanks';
  title: string;
  points: number;
  questionText: string;
  correctAnswers: Answer[];
}

function FillInBlanksEditor({ onSave, onCancel }: FillInBlanksEditorProps) {
  const [question, setQuestion] = useState<QuestionData>({
    type: 'fill-in-blanks',
    title: '',
    points: 1,
    questionText: '',
    correctAnswers: [{ text: '' }]
  });

  // Handle changes to individual answer inputs
  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = question.correctAnswers.map((answer, i) => {
      if (i === index) {
        return { ...answer, text: value };
      }
      return answer;
    });
    setQuestion({ ...question, correctAnswers: updatedAnswers });
  };

  // Add a new answer input field
  const addAnswer = () => {
    setQuestion(prev => ({
      ...prev,
      correctAnswers: [...prev.correctAnswers, { text: '' }]
    }));
  };

  // Remove an answer input field
  const removeAnswer = (index: number) => {
    const updatedAnswers = question.correctAnswers.filter((_, i) => i !== index);
    setQuestion({ ...question, correctAnswers: updatedAnswers });
  };

  // Handle the save action
  const handleSave = () => {
    // Create a sanitized version of the question data to pass to onSave
    const sanitizedQuestion = {
      type: question.type,
      title: question.title,
      points: question.points,
      questionText: question.questionText,
      correctAnswers: question.correctAnswers.filter(answer => answer.text.trim() !== '') // Remove empty answers
    };
    onSave(sanitizedQuestion);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Question Title"
        value={question.title}
        onChange={(e) => setQuestion({ ...question, title: e.target.value })}
      />
      <div className="mb-2">
        <label htmlFor="points" className="form-label">Points:</label>
        <input
          type="number"
          className="form-control"
          id="points"
          placeholder="Points"
          value={question.points}
          onChange={(e) => setQuestion({ ...question, points: parseInt(e.target.value, 10) })}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="questionText" className="form-label">Question:</label>
        <ReactQuill
          theme="snow"
          id="questionText"
          value={question.questionText}
          onChange={(value) => setQuestion({ ...question, questionText: value })}
        />
      </div>
      <div className="mb-2">
        {question.correctAnswers.map((answer, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Correct Answer"
              value={answer.text}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
            <button
              type="button"
              className="btn btn-link text-danger"
              onClick={() => removeAnswer(index)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <button className="btn btn-secondary me-2" onClick={addAnswer}>Add Answer</button>
        <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
        <button className="btn btn-danger" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default FillInBlanksEditor;
