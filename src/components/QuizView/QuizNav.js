import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  nav: {
    paddingTop: "3em",
    placeContent: "space-between",
  },
  previous: {
    width: "100%",
    justifyItem: "flex-start",
  },
  next: {
    width: "100%",
    alignItems: "flex-end",
  },
});

function QuizNav({ onClickPrevious, onClickNext }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.nav} spacing={2}>
      <Grid item xs={6} sm={3}>
        <Button
          variant="contained"
          color="primary"
          className={classes.previous}
          disableElevation
          onClick={onClickPrevious}
        >
          Previous
        </Button>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Button
          variant="contained"
          color="primary"
          className={classes.next}
          disableElevation
          onClick={onClickNext}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default QuizNav;
