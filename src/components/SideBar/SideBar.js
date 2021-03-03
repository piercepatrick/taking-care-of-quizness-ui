import { useState } from "react";
import clsx from "clsx";
import { Container, Drawer, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import Navigation from "./Navigation";
import ProfileInfo from "./ProfileInfo";

const useStyles = makeStyles((theme) => ({
  Container: {
    borderRight: "1px solid #E5E5E5",
    paddingTop: "3em",
  },
  menuButton: {
    marginLeft: "0.5em",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)",
      color: "#6200EE",
    },
  },
  hide: {
    display: "none",
  },
  chevron: {
    justifyContent: "flex-end",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)",
      color: "#6200EE",
    },
  },
}));

function SideBar() {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const renderMenuButton = () => {
    return (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => setDrawerOpen(!isDrawerOpen)}
        className={clsx(classes.menuButton, isDrawerOpen && classes.hide)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    );
  };

  const rendeMenuDrawer = () => {
    return (
      <Container className={classes.Container}>
        <Drawer variant="persistent" anchor="left" open={true}>
          <IconButton
            onClick={() => setDrawerOpen(!isDrawerOpen)}
            className={classes.chevron}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <ProfileInfo userName="Dwight Schrute" />
          <Navigation />
        </Drawer>
      </Container>
    );
  };

  return isDrawerOpen ? rendeMenuDrawer() : renderMenuButton();
}

export default SideBar;
