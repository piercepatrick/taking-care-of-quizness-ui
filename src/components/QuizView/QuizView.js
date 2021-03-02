import { useMemo, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import shuffle from "array-shuffle";

import QuizHeader from "./QuizHeader";
import QuizCard from "./QuizCard";
import QuizAnswers from "./QuizAnswers";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const questions = [
  {
    questionId: "12345-12345-12345-12345",
    category: "Discrete Mathematics",
    questionText:
      "Which shortest path algorithm is able to handle negative weights?",
    answersJSON: {
      correctAnswer: "Bellman-Ford Algorithm",
      incorrectAnswers: ["Gabow's Algorithm", "Dijkstra's Algorithm", "Thorup"],
    },
  },
];

function QuizView() {
  const classes = useStyles();

  const [question, setQuestion] = useState(questions[0]);

  const answersList = useMemo(() => {
    return shuffle([
      ...question.answersJSON.incorrectAnswers,
      question.answersJSON.correctAnswer,
    ]);
  }, [question]);

  return (
    <Container className={classes.root} maxWidth="md">
      <QuizHeader
        categoryName={question.category}
        currentQuestionNumber={questions.indexOf(question) + 1}
        totalQuestions={questions.length}
      />
      <QuizCard question={question.questionText} />
      <QuizAnswers answers={answersList} />
    </Container>
  );
}

export default QuizView;
