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
    answersJSON: {
      correctAnswer: "Brown",
      incorrectAnswers: ["Black", "Panda", "Koala"],
    },
  },
  {
    questionId: "54321-54321-54321-54321",
    category: "Beet Farming",
    questionText: "How long does it take a beet to go to seed?",
    answersJSON: {
      correctAnswer: "6 months",
      incorrectAnswers: ["2 weeks", "15 days", "3 years"],
    },
  },
];

function QuizView() {
  const [question, setQuestion] = useState(questions[0]);

  const onClickNext = () => {
    const nextQuestionIndex = questions.indexOf(question) + 1;

    if (nextQuestionIndex > questions.length - 1) {
      setQuestion(questions[0]);
    } else {
      setQuestion(questions[nextQuestionIndex]);
    }
  };

  const onClickPrevious = () => {
    const previousQuestionIndex = questions.indexOf(question) - 1;

    if (previousQuestionIndex < 0) {
      setQuestion(questions[questions.length - 1]);
    } else {
      setQuestion(questions[previousQuestionIndex]);
    }
  };

  const answersList = shuffle([
    ...question.answersJSON.incorrectAnswers,
    question.answersJSON.correctAnswer,
  ]);

  console.log(answersList);

  return (
    <Container maxWidth="md">
      <QuizHeader
        categoryName={question.category}
        currentQuestionNumber={questions.indexOf(question) + 1}
        totalQuestions={questions.length}
      />
      <QuizCard question={question.questionText} />
      <QuizAnswers answers={answersList} />
      <QuizNav onClickNext={onClickNext} onClickPrevious={onClickPrevious} />
    </Container>
  );
}

export default QuizView;
