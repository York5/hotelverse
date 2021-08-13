import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navPaper: {
    backgroundColor: "transparent",
    boxShadow: "none",
    marginTop: 20,
  },
  navItem: {
    margin: "0 0",
    minWidth: "auto",
    fontWeight: 600,
    color: "#000",
    textTransform: "capitalize",
  },
});

export default function PropertyDetailsTabs() {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.navPaper}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab className={classes.navItem} label="Description" />
        <Tab className={classes.navItem} label="Facilities" />
        <Tab className={classes.navItem} label="Availability" />
        <Tab className={classes.navItem} label="Rates" />
      </Tabs>
    </Paper>
  );
}
