import { useEffect, useState } from "react";
import { Container, LinearProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    marginBottom: "30px",
    "& h2, & p": {
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

function QuizHeader({ categoryName, currentQuestionNumber, totalQuestions }) {
  const classes = useStyles();
  const percentDone = (currentQuestionNumber / totalQuestions) * 100;

  return (
    <Container className={classes.header}>
      <Typography variant="h2">{categoryName}</Typography>
      <Typography variant="body1">
        {currentQuestionNumber} of {totalQuestions}
      </Typography>
      <LinearProgress
        color="primary"
        variant="determinate"
        value={percentDone}
      />
    </Container>
  );
}

export default QuizHeader;
