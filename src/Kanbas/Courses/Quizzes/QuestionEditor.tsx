import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MultipleChoiceEditor from './QuestionEditor/MultipleChoiceEditor';
import TrueFalseEditor from './QuestionEditor/TrueFalseEditor';
import FillInBlanksEditor from './QuestionEditor/FillInBlanksEditor';
import * as client from './client';

export default function QuestionEditor() {
  console.log("Params:", useParams());
  const { cid: courseId, qid: quizId } = useParams<{ cid: string; qid: string }>();
  console.log('Course ID:', courseId, 'Quiz ID:', quizId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questionType, setQuestionType] = useState('multipleChoice');

  const handleSave = async(questionData:any) => {
    console.log('Saving data:', questionData);
    await client.addQuestionToQuiz(quizId as string, questionData);
    // Navigate back to quiz details
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/Details/${quizId}`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/Details/${quizId}`);
  };

  const renderEditor = () => {
    switch (questionType) {
      case 'multipleChoice':
        return <MultipleChoiceEditor onSave={handleSave} onCancel={handleCancel} />;
      case 'trueFalse':
        return <TrueFalseEditor onSave={handleSave} onCancel={handleCancel} />;
      case 'fillInBlanks':
        return <FillInBlanksEditor onSave={handleSave} onCancel={handleCancel} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
        <option value="multipleChoice">Multiple Choice</option>
        <option value="trueFalse">True/False</option>
        <option value="fillInBlanks">Fill in the Blanks</option>
      </select>
      {renderEditor()}
    </div>
  );
}