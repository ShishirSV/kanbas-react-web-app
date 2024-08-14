import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MultipleChoiceQuestion from './QuizPreview/MultipleChoiceQuestion';
import TrueFalseQuestion from './QuizPreview/TrueFalseQuestion';
import FillInBlanksQuestion from './QuizPreview/FillInBlanksQuestion';
import * as client from './client';

export interface Question {
  id: string;
  title: string;
  questionText: string;
  type: 'multiple-choice' | 'true-false' | 'fill-in-blanks';
  choices?: Array<{ text: string; isCorrect: boolean }>;
  isTrue?: boolean;
}

export interface AnswerMap {
  [key: string]: any;
}

function QuizPreviewScreen() {
  const { quizId } = useParams<{ quizId?: string }>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<AnswerMap>({});

  useEffect(() => {
    if (quizId) {
      const fetchQuestions = async () => {
        try {
          const questionsData = await client.fetchQuizQuestions(quizId);
          setQuestions(questionsData);

          const initialAnswers: AnswerMap = {};
          questionsData.forEach((question: Question) => {
            initialAnswers[question.id] = ''; // Initialize answers
          });
          setAnswers(initialAnswers);
        } catch (error) {
          console.error('Error fetching quiz questions:', error);
        }
      };

      fetchQuestions();
    }
  }, [quizId]);

  const handleAnswerChange = (questionId: string, answer: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  if (!questions.length) return <p>Loading...</p>;

  return (
    <div>
      {questions.map(question => {
        let QuestionComponent = null;

        switch (question.type) {
          case 'multiple-choice':
            QuestionComponent = MultipleChoiceQuestion;
            break;
          case 'true-false':
            QuestionComponent = TrueFalseQuestion;
            break;
          case 'fill-in-blanks':
            QuestionComponent = FillInBlanksQuestion;
            break;
          default:
            return null;
        }

        return QuestionComponent && (
          <QuestionComponent
            key={question.id}
            question={question}
            answer={answers[question.id]}
            onChange={(answer: any) => handleAnswerChange(question.id, answer)}
          />
        );
      })}
    </div>
  );
}

export default QuizPreviewScreen;