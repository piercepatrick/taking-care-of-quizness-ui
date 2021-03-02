import { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";

import QuizHeader from "./QuizHeader";
import QuizCard from "./QuizCard";
import QuizAnswers from "./QuizAnswers";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const questions = [
  {
    questionId: "12345-12345-12345-12345",
    categoryName: "Discrete Mathematics",
    question:
      "Which shortest path algorithm is able to handle negative weights?",
    answers: [
      {
        answerText: "Bellman-Ford Algorithm",
        isCorrect: true,
      },
      {
        answerText: "Gabow's Algorithm",
        isCorrect: false,
      },
      {
        answerText: "Dijkstra's Algorithm",
        isCorrect: false,
      },
      {
        answerText: "Thorup",
        isCorrect: false,
      },
    ],
  },
];

function QuizView() {
  const classes = useStyles();

  const [question, setQuestion] = useState(questions[0]);

  return (
    <Container className={classes.root} maxWidth="md">
      <QuizHeader
        categoryName={question.categoryName}
        currentQuestionNumber={questions.indexOf(question) + 1}
        totalQuestions={questions.length}
      />
      <QuizCard question={question.question} />
      <QuizAnswers answers={question.answers} />
    </Container>
  );
}

export default QuizView;
