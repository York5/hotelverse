import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { Box, Tooltip } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import { BAR_SIZE, URL_PATHS } from "../../helpers/consts";

const useStyles = makeStyles((theme) => ({
  verticalBar: {
    width: BAR_SIZE,
    // display: "block",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  horizontalBar: {
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },

  drawer: {
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
    width: BAR_SIZE,
  },
  //   Sidebar Icons
  sidebarIcon: {
    margin: "10px 0 10px 0",
    width: 25,
    height: 25,
  },
  sidebarLogo: {
    height: 48,
    width: 48,
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  sidebarList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    alignItems: "center",
  },
  listItem: {
    justifyContent: "center",
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.verticalBar}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List className={classes.sidebarList}>
          <Link to={URL_PATHS.HOME}>
            <ListItem className={classes.logoWrapper}>
              <img
                className={classes.sidebarLogo}
                src="/images/logo.png"
                alt="Logo"
              />
            </ListItem>
          </Link>

          <Box className={classes.sidebarInner}>
            <Tooltip title="Homepage" placement="top-start">
              <Link to={URL_PATHS.HOME}>
                <ListItem button key={"Home"}>
                  <ListItemIcon className={classes.listItem}>
                    <HomeIcon className={classes.sidebarIcon} />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Tooltip>

            <Tooltip title="Favorites" placement="top-start">
              <Link to={URL_PATHS.FAVOURITES}>
                <ListItem button key={"Favorites"}>
                  <ListItemIcon className={classes.listItem}>
                    <FavoriteIcon className={classes.sidebarIcon} />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Tooltip>

            <Tooltip title="Bookings" placement="top-start">
              {/* <Link to={URL_PATHS.BOOKINGS}> */}
              <Link to={URL_PATHS.CHECKOUT}>
                <ListItem button key={"Bookings"}>
                  <ListItemIcon className={classes.listItem}>
                    <LocalOfferIcon className={classes.sidebarIcon} />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Tooltip>

            <Tooltip title="Notifications" placement="top-start">
              <Link to={URL_PATHS.NOTIFICATIONS}>
                <ListItem button key={"Notifications"}>
                  <ListItemIcon className={classes.listItem}>
                    <NotificationsIcon className={classes.sidebarIcon} />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Tooltip>
          </Box>

          <Box>
            <Tooltip title="Settings" placement="top-start">
              <Link to={URL_PATHS.SETTINGS}>
                <ListItem button key={"Settings"}>
                  <ListItemIcon className={classes.listItem}>
                    <SettingsIcon className={classes.sidebarIcon} />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Tooltip>
          </Box>
        </List>
      </Drawer>
    </div>
  );
}
