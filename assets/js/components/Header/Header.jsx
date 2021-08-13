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
import { BAR_SIZE, URL_PATHS } from "./../../helpers/consts";
import { useAuth } from "./../../contexts/AuthContext";

const useStyles = makeStyles((theme) => {
  return {
    grow: {
      flexGrow: 1,
      backgroundColor: "#ffffff00 !important",
    },
    appBar: {
      width: `calc(100% - ${BAR_SIZE}px)`,
      marginLeft: BAR_SIZE,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginLeft: 0,
      },
      backgroundColor: "#ffffff00 !important",
    },
    topBar: {
      backgroundColor: theme.palette.primary.light,
    },
    companyName: {
      textTransform: "capitalize",
      fontSize: 22,
      fontWeight: 600,
      color: "#fff",
    },
    signInBtn: {
      textTransform: "capitalize",
      fontWeight: 800,
      color: "#fff",
    },
    signUpBtn: {
      textTransform: "capitalize",
      fontWeight: 800,
      // color: "#A8C1D3",
    },
    hostBtn: {
      textTransform: "capitalize",
      fontWeight: 800,
    },

    landingBannerImg: {
      backgroundImage: "url(/images/mountainBanner.jpg)",
      minHeight: "40vh",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
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

  const handleSignOut = () => {
    signOut();
    handleMenuClose();
  };

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
      <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
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
      <MenuItem onClick={handleSignOut}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Sign out</p>
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
    <>
      <div className={classes.grow}>
        <AppBar className={classes.appBar} position="sticky">
          <Toolbar className={classes.topBar}>
            <Link to="#" style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                // color="secondary"
                className={classes.companyName}
              >
                Hotelverse
              </Button>
            </Link>

            {renderMiniSearchBar()}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {!user && (
                <>
                  <Link
                    to={URL_PATHS.SIGN_IN}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="text"
                      // color="secondary"
                      className={classes.signInBtn}
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Link
                    to={URL_PATHS.SIGN_UP}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.signUpBtn}
                    >
                      Sign up
                    </Button>
                  </Link>
                </>
              )}

              {user && (
                <>
                  <Link
                    to={URL_PATHS.PROPERTIES_CREATE}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      marginRight: 12,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.hostBtn}
                    >
                      Become a Host
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
          {history.location.pathname === "/" ? <Searchbar /> : null}
        </AppBar>
        <Grid className={classes.landingBannerImg}></Grid>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </>
  );
};

export default Header;
