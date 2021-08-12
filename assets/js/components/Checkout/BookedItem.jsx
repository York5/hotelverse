import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: "100%",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 15,
  },
}));

export default function BookedItem({ booking }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://images.assetsdelivery.com/compings_v2/vectorpouch/vectorpouch1902/vectorpouch190200100.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs={8} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {"Booking title"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  check-in:{"08/12/2021"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  check-out:{"30/12/2021"}
                </Typography>
                <Typography gutterBottom variant="body2">
                  Adults: {"2"}
                </Typography>
                <Typography gutterBottom variant="body2">
                  Children: {"3"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: {"Wisconsing Minisota"}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={2}
              alignContent={"flex-end"}
              justifyContent={"space-between"}
            >
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
