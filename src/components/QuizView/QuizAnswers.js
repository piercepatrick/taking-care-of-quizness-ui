import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  answers: { width: "100%", height: "100%" },
  answer: { width: "100%", height: "100%" },
}));

function QuizAnswers({ answers }) {
  const classes = useStyles();
  console.log(answers);
  return (
    <Grid container className={classes.answers} spacing={2}>
      {answers.map((value) => (
        <Grid item xs={12} sm={6}>
          <Button
            className={classes.answer}
            variant="outlined"
            color="secondary"
          >
            {value}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default QuizAnswers;
