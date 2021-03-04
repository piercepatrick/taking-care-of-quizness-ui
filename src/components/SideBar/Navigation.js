import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NotificationsIcon from "@material-ui/icons/Notifications";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

const useStyles = makeStyles({
  navItem: {
    color: "rgba(0, 0, 0.6)",
    "&:hover": {
      backgroundColor: "#F2E7FE",
    },
    "&:hover > *": {
      color: "#6200EE",
    },
  },
  navText: {
    textDecoration: "none",
  },
  signOut: {
    alignSelf: "flex-end",
    backgroundColor: "#6200EE",
    "& > *": {
      color: "#FFFFFF",
    },
    "&:hover": {
      backgroundColor: "#F2E7FE",
    },
    "&:hover > *": {
      color: "#6200EE",
    },
  },
});

function Navigation() {
  const classes = useStyles();

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
      window.location.reload();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <Divider variant="fullWidth" />
      <List>
        <ListItem component={Link} to="/new" button className={classes.navItem}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add new question" />
        </ListItem>
        <ListItem
          component={Link}
          to="/quiz"
          button
          className={classes.navItem}
        >
          <ListItemIcon>
            <QuestionAnswerIcon />
          </ListItemIcon>
          <ListItemText className={classes.navText} primary="My questions" />
        </ListItem>
      </List>
      <Divider variant="fullWidth" />
      <List>
        <ListItem button className={classes.navItem}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Account settings" />
        </ListItem>
        <ListItem button className={classes.navItem}>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button className={classes.signOut} onClick={() => signOut()}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
    </div>
  );
}

export default Navigation;
