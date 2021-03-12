import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <Divider variant="fullWidth" />
      <List>
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
