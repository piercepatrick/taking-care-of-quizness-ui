import { Button, Grid, Icon, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  nav: {
    width: "100%",
    height: "100%",
    paddingTop: "3em",
    placeContent: "space-between",
  },
  previous: {
    width: "15%",
    justifyItem: "flex-start",
  },
  next: {
    width: "15%",
    alignItems: "flex-end",
  },
});

function QuizNav({ onClickPrevious, onClickNext }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.nav} spacing={2}>
      <Button
        variant="contained"
        color="primary"
        className={classes.previous}
        disableElevation
        onClick={onClickPrevious}
      >
        Previous
      </Button>
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
  );
}

export default QuizNav;
