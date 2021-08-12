import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Avatar, Button, Grid } from "@material-ui/core";
import Searchbar from "./Searchbar";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { URL_PATHS } from "../helpers/consts";
import { useAuth } from "../contexts/AuthContext";

const drawerWidth = 100;

const useStyles = makeStyles((theme) => {
  // console.log(theme);
  return {
    grow: {
      flexGrow: 1,
    },
    appBar: {
      position: "relative",
      // height: 130,
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    topBar: {
      backgroundColor: theme.palette.primary.light,
    },
    // landingBannerImg: {
    //     background: `${landingBanner} no-repeat center center fixed`,
    //     backgroundSize: "cover",
    // },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },

    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    addButton: {
      margin: 10,
      maxHeight: 50,
    },
  };
});

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();
  const { user, signOut } = useAuth();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const renderMiniSearchBar = () => {
    if (history.location.pathname === "/") {
      return null;
    } else {
      return (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      );
    }
  };

  return (
    <div className={classes.grow}>
      <AppBar
        className={classes.appBar}
        position="static"
        style={{ marginBottom: 100 }}
      >
        <Toolbar className={classes.topBar}>
          {renderMiniSearchBar()}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/add" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                // className={classes.addButton}
              >
                Become a Host
              </Button>
            </Link>
            {!user && (
              <>
                <Link to={URL_PATHS.SIGN_IN} style={{ textDecoration: "none" }}>
                  <Button
                    variant="link"
                    color="secondary"
                    // className={classes.addButton}
                  >
                    Sign in
                  </Button>
                </Link>
                <Link to={URL_PATHS.SIGN_UP} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    // className={classes.addButton}
                  >
                    Sign up
                  </Button>
                </Link>
              </>
            )}

            {user && (
              <>
                <Link style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={signOut}
                    // className={classes.addButton}
                  >
                    Sign out
                  </Button>
                </Link>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar src="/images/avatar.jpg">UK</Avatar>
                </IconButton>
              </>
            )}

            {/* <Link to="/registration/new" style={{ textDecoration: "none" }}>
            <Button
              onClick={handle_logout}
              variant="contained"
              color="secondary"
              className={classes.addButton}
            >
              Logout
            </Button>
            </Link> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        <Grid style={{ backgroundColor: "#E1EEF7" }}>
          <img
            style={{ width: "100%" }}
            src="/images/mountainBanner.jpg"
            alt="Banner"
          />
        </Grid>
        {history.location.pathname === "/" ? <Searchbar /> : null}
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Header;
