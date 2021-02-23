import { Button, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  answers: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    width: "100%",
  },
  answerRowLeft: {
    marginRight: "0.5em",
    marginBottom: "1em",
    width: "48.5%",
  },
  answerRowRight: {
    marginLeft: "0.5em",
    marginBottom: "1em",
    width: "49.5%",
  },
}));

function QuizAnswers({ answers }) {
  const classes = useStyles();

  return (
    <Container className={classes.answers}>
      <Button
        className={classes.answerRowLeft}
        variant="outlined"
        color="secondary"
      >
        {answers[0].answerText}
      </Button>
      <Button
        className={classes.answerRowRight}
        variant="outlined"
        color="secondary"
      >
        {answers[1].answerText}
      </Button>
      <Button
        className={classes.answerRowLeft}
        variant="outlined"
        color="secondary"
      >
        {answers[2].answerText}
      </Button>
      <Button
        className={classes.answerRowRight}
        variant="outlined"
        color="secondary"
      >
        {answers[3].answerText}
      </Button>
    </Container>
  );
}

export default QuizAnswers;
