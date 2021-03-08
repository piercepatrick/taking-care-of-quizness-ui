import { useState } from "react";
import { Container } from "@material-ui/core";
import shuffle from "array-shuffle";

import QuizHeader from "./QuizHeader";
import QuizCard from "./QuizCard";
import QuizAnswers from "./QuizAnswers";
import QuizNav from "./QuizNav";

const questions = [
  {
    questionId: "12345-12345-12345-12345",
    category: "Bears",
    questionText: "Which kind of bear is best?",
    answersJSON: JSON.stringify({
      correctAnswer: "Brown",
      incorrectAnswers: ["Black", "Panda", "Koala"],
    }),
  },
  {
    questionId: "54321-54321-54321-54321",
    category: "Beet Farming",
    questionText: "How long does it take a beet to go to seed?",
    answersJSON: JSON.stringify({
      correctAnswer: "6 months",
      incorrectAnswers: ["2 weeks", "15 days", "3 years"],
    }),
  },
];

function QuizView() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];
  const { correctAnswer, incorrectAnswers } = JSON.parse(question.answersJSON);
  const answers = shuffle([
    correctAnswer,
    ...incorrectAnswers,
  ]).map((value) => ({ value, isCorrect: value === correctAnswer }));

  const onClickNext = () =>
    setQuestionIndex((currentIndex) => (currentIndex + 1) % questions.length);
  const onClickPrevious = () =>
    setQuestionIndex(
      (currentIndex) => (currentIndex - 1 + questions.length) % questions.length
    );

  return (
    <Container maxWidth="md">
      <QuizHeader
        categoryName={question.category}
        currentQuestionNumber={questions.indexOf(question) + 1}
        totalQuestions={questions.length}
      />
      <QuizCard question={question.questionText} />
      <QuizAnswers answers={answers} />
      <QuizNav onClickNext={onClickNext} onClickPrevious={onClickPrevious} />
    </Container>
  );
}

export default QuizView;
