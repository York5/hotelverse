import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { Box } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
    width: drawerWidth,
    marginRight: 100,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  //   Sidebar Icons
  sidebarIcon: {
    margin: 10,
    width: 25,
    height: 25,
  },
  sidebarSettings: {},
  sidebarInner: {},
  sidebarLogo: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  sidebarContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  sidebarList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    alignItems: "center",
  },
  drawerWrapper: {
    width: 130,
  },
  listItem: {
    justifyContent: "center",
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        className={classes.sidebarContainer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List className={classes.sidebarList}>
          <Box>
            <ListItem button key={"Home"}>
              <img
                className={classes.sidebarLogo}
                src="images/logo.png"
                alt="Logo"
              />
            </ListItem>
          </Box>

          <Box className={classes.sidebarInner}>
            <Link to="/">
              <ListItem button key={"Home"}>
                <ListItemIcon className={classes.listItem}>
                  <HomeIcon className={classes.sidebarIcon} />
                </ListItemIcon>
              </ListItem>
            </Link>

            <ListItem button key={"Favorites"}>
              <ListItemIcon className={classes.listItem}>
                <FavoriteIcon className={classes.sidebarIcon} />
              </ListItemIcon>
            </ListItem>

            <ListItem button key={"Bookings"}>
              <ListItemIcon className={classes.listItem}>
                <LocalOfferIcon className={classes.sidebarIcon} />
              </ListItemIcon>
            </ListItem>

            <ListItem button key={"Notifications"}>
              <ListItemIcon className={classes.listItem}>
                <NotificationsIcon className={classes.sidebarIcon} />
              </ListItemIcon>
            </ListItem>
          </Box>

          <Box className={classes.sidebarSettings}>
            <ListItem button key={"Settings"}>
              <ListItemIcon className={classes.listItem}>
                <SettingsIcon className={classes.sidebarIcon} />
              </ListItemIcon>
            </ListItem>
          </Box>
        </List>
      </Drawer>
    </div>
  );
}
