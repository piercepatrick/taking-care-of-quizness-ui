import { Container, Typography, makeStyles } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  root: {
    paddingBottom: "1em",
  },
});

function ProfileInfo({ userName }) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <AccountCircleIcon color="secondary" fontSize="large" />
      <Typography variant="h5">{userName}</Typography>
    </Container>
  );
}

export default ProfileInfo;
