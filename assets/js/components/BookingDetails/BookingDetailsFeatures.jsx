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

const BookingDetailsFeatures = ({ features }) => {
  const classes = useStyles();
  return (
    <div className={classes.featuresContainer}>
      <Typography component="p" className={classes.featuresTitle}>
        Property Features
      </Typography>
      <div className={classes.featuresIconGroup}>
        {features.map((feat) => (
          <div key={feat.id} className={classes.featuresItem}>
            <Icon>{feat.icon}</Icon>
            <div className={classes.iconText}>{feat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingDetailsFeatures;
