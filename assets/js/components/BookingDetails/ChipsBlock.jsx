import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import StarIcon from "@material-ui/icons/Star";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    display: "flex",
    // justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function DetailChips({ rating }) {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      <Chip label="Hotels" clickable color="default" />
      <Chip label="New Building" clickable color="primary" variant="outlined" />
      <Chip label="Hot value" clickable color="secondary" variant="outlined" />
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating name="read-only" value={rating} readOnly />
      </Box>
    </div>
  );
}
