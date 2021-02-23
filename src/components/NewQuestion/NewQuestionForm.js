import { Button, TextField, makeStyles, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    "& .MuiTextField-root, & .MuiButtonBase-root": {
      margin: theme.spacing(1),
      flex: 1,
    },
  },
  divider: {
    marginTop: "2em",
    marginBottom: "2em",
  },
  bottomSpace: {
    paddingBottom: "3em",
  },
}));

function NewQuestionForm() {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        id="filled-basic"
        label="Category"
        variant="filled"
        className={classes.bottomSpace}
      />
      <TextField
        id="filled-basic"
        label="Question"
        variant="filled"
        rows={4}
        rowsMax={10}
        multiline
        className={classes.bottomSpace}
      />
      <TextField id="filled-basic" label="Correct Answer" variant="filled" />
      <TextField
        id="filled-basic"
        label="Incorrect Answer 1"
        variant="filled"
      />
      <TextField
        id="filled-basic"
        label="Incorrect Answer 2"
        variant="filled"
      />
      <TextField
        id="filled-basic"
        label="Incorrect Answer 3"
        variant="filled"
      />
      <Divider className={classes.divider} />
      <Button variant="outlined" color="primary">
        Add Question
      </Button>
    </form>
  );
}

export default NewQuestionForm;
