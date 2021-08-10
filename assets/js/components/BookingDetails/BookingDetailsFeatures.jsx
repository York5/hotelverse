import React from "react";
import WifiOutlinedIcon from "@material-ui/icons/WifiOutlined";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import ZoomOutMapOutlinedIcon from "@material-ui/icons/ZoomOutMapOutlined";
import { Icon, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  featuresTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  //   featuresContainer: {},
  featuresItem: {
    opacity: "0.7 !important",
    display: "flex",
    alignItems: "center",
    margin: "0 30px 50px 0",
  },
  iconText: {
    fontSize: 15,
    margin: "0 10px",
  },
  featuresIconGroup: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const BookingDetailsFeatures = () => {
  const classes = useStyles();
  return (
    <div className={classes.featuresContainer}>
      <Typography variant="p" component="p" className={classes.featuresTitle}>
        Property Features
      </Typography>
      <div className={classes.featuresIconGroup}>
        <div className={classes.featuresItem}>
          <Icon>
            <WifiOutlinedIcon />
          </Icon>
          <div className={classes.iconText}>Wi-Fi</div>
        </div>
        <div className={classes.featuresItem}>
          <Icon>
            <KingBedOutlinedIcon />
          </Icon>
          <div className={classes.iconText}>Kings Bed</div>
        </div>
        <div className={classes.featuresItem}>
          <Icon>
            <BathtubOutlinedIcon />
          </Icon>
          <div className={classes.iconText}>Bathtub</div>
        </div>
        <div className={classes.featuresItem}>
          <Icon>
            <RestaurantOutlinedIcon />
          </Icon>
          <div className={classes.iconText}>Breakfast</div>
        </div>
        <div className={classes.featuresItem}>
          <Icon>
            <ZoomOutMapOutlinedIcon />
          </Icon>
          <div className={classes.iconText}>4m x 6m</div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsFeatures;
