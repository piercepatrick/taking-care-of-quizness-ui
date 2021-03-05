import { useState } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  answer: {
    width: "100%",
    height: "100%",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  correct: {
    width: "100%",
    height: "100%",
    backgroundColor: "#C8FFF4",
    "&:hover": {
      backgroundColor: "#C8FFF4",
    },
  },
  incorrect: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F5DBDB",
    "&:hover": {
      backgroundColor: "#F5DBDB",
    },
  },
}));

function QuizAnswers({ answers }) {
  const classes = useStyles();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const renderAnswerButton = (answer) => {
    if (selectedAnswer && selectedAnswer.value === answer.value) {
      return (
        <Button
          className={answer.isCorrect ? classes.correct : classes.incorrect}
          variant="contained"
          disableElevation
          onClick={() => setSelectedAnswer(answer)}
        >
          {answer.value}
        </Button>
      );
    } else {
      return (
        <Button
          className={classes.answer}
          variant="outlined"
          color="secondary"
          onClick={() => setSelectedAnswer(answer)}
        >
          {answer.value}
        </Button>
      );
    }
  };

  return (
    <Grid container spacing={2}>
      {answers.map((answer) => (
        <Grid item xs={12} sm={6} key={answer.value}>
          {renderAnswerButton(answer)}
        </Grid>
      ))}
    </Grid>
  );
}

export default QuizAnswers;
