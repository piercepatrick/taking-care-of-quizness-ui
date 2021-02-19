import { Container, makeStyles } from "@material-ui/core";
import HatLogo from "../../assets/images/HatLogo.svg";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    marginBottom: "30px",
    "& p, & h2": {
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
    "& img": {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "65px",
    },
  },
}));

function NewQuestionFormHeader() {
  const classes = useStyles();

  return (
    <Container className={classes.Container} maxWidth="sm">
      <p>HEY USER</p>
      <h2>Let's start a new set of questions!</h2>
      <img src={HatLogo} alt="hat logo" />
    </Container>
  );
}

export default NewQuestionFormHeader;
