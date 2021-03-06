import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navPaper: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  navItem: {
    margin: "0 0",
    minWidth: "auto",
  },
});

export default function FeaturedNav() {
  const [value, setValue] = React.useState(2);
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
        aria-label="disabled tabs example"
      >
        <Tab className={classes.navItem} label="New" />
        <Tab className={classes.navItem} label="Popular" />
        <Tab className={classes.navItem} label="Recomendations" />
        <Tab className={classes.navItem} label="Best Price" />
      </Tabs>
    </Paper>
  );
}
