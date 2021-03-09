import { Box, LinearProgress, makeStyles, Typography } from "@material-ui/core";

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
    <Box className={classes.header}>
      <Typography variant="h2">{categoryName}</Typography>
      <Typography variant="body1">
        {currentQuestionNumber} of {totalQuestions}
      </Typography>
      <LinearProgress
        color="primary"
        variant="determinate"
        value={percentDone}
      />
    </Box>
  );
}

export default QuizHeader;
