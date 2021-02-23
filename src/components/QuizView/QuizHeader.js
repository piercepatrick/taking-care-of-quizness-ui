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
  const [percentDone, setPercentDone] = useState(0);

  useEffect(() => {
    setPercentDone((currentQuestionNumber / totalQuestions) * 100);
  }, [currentQuestionNumber, totalQuestions]);

  return (
    <Container className={classes.header}>
      <h2>{categoryName}</h2>
      <p>
        {currentQuestionNumber} of {totalQuestions}
      </p>
      <LinearProgress
        color="primary"
        variant="determinate"
        value={percentDone}
      />
    </Container>
  );
}

export default QuizHeader;
