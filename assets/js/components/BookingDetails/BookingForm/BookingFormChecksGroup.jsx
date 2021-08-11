import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// const GreenCheckbox = withStyles({
//   checkInput: {
//     opacity: "0.7",
//   },
// })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
  checkInputLabel: {
    opacity: "0.7",
  },
  checkInputItem: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function ExtraFeatures() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    pet: false,
    breakfast: false,
    parking: false,
    pillow: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <div className={classes.checkInputItem}>
        <FormControlLabel
          className={classes.checkInputLabel}
          control={
            <Checkbox
              checked={state.pet}
              onChange={handleChange}
              name="pet"
              color="primary"
            />
          }
          label="Allow to bring pet"
        />
        <p>$13</p>
      </div>
      <div className={classes.checkInputItem}>
        <FormControlLabel
          className={classes.checkInputLabel}
          control={
            <Checkbox
              checked={state.breakfast}
              onChange={handleChange}
              name="breakfast"
              color="primary"
            />
          }
          label="Breakfast a day per person"
        />
        <p>$10</p>
      </div>

      <div className={classes.checkInputItem}>
        <FormControlLabel
          className={classes.checkInputLabel}
          control={
            <Checkbox
              checked={state.parking}
              onChange={handleChange}
              name="parking"
              color="primary"
            />
          }
          label="Parking a day"
        />
        <p>$6</p>
      </div>
      <div className={classes.checkInputItem}>
        <FormControlLabel
          className={classes.checkInputLabel}
          control={
            <Checkbox
              checked={state.pillow}
              onChange={handleChange}
              name="pillow"
              color="primary"
            />
          }
          label="Extra pillow"
        />
        <p>Free</p>
      </div>
    </FormGroup>
  );
}
