import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  answer: { width: "100%", height: "100%" },
}));

function QuizAnswers({ answers }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {answers.map((value) => (
        <Grid item xs={12} sm={6} key={value}>
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
