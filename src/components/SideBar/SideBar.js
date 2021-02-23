import { Container, makeStyles } from "@material-ui/core";

import Navigation from "./Navigation";
import ProfileInfo from "./ProfileInfo";

const useStyles = makeStyles((theme) => ({
  Container: {
    borderRight: "1px solid #E5E5E5",
    paddingTop: "3em",
  },
}));

function SideBar() {
  const classes = useStyles();

  return (
    <Container className={classes.Container}>
      <ProfileInfo userName="Dwight Schrute" />
      <Navigation />
    </Container>
  );
}

export default SideBar;
