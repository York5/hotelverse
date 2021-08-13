import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Chip, Divider } from "@material-ui/core";
import DateSelect from "../../Header/DateSelect";
import { Controller, useForm } from "react-hook-form";
import SearchableSelect from "../../Header/SearchableSelect";
import ExtraFeatures from "./BookingFormChecksGroup";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 20,
    marginBottom: 30,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bookButton: {
    margin: "0 auto",
    borderRadius: 15,
    margin: "0px 8px 16px 8px",
  },
  totalPrice: {
    marginRight: 50,
  },
  dateInputsGroup: {
    display: "flex",
    marginTop: 30,
    // justifyContent: "center",
  },
  dateInput: {
    width: 170,
  },
  guestsInputGroup: {
    display: "flex",
    // justifyContent: "space-between",
    margin: "20px 0",
  },
  guestsInput: {
    width: 300,
  },
  checksGroup: {
    padding: 10,
  },
  priceForm: {
    backgroundColor: "#eeeeee",
    padding: 10,
    borderRadius: 20,
  },
  priceItem: {
    display: "flex",
    justifyContent: "space-between",
  },
  formHeader: {
    display: "flex",
    alignItems: "center",
    padding: "5px 0",
  },
});

const occupancyAdults = [1, 2, 3, 4, 5, 6];
const occupancyChildren = [0, 1, 2, 3, 4];
const commonHeight = 48;

const adultsSelectProps = {
  placeholder: "Adults",
  width: 120,
  height: commonHeight,
  options: returnOptions(occupancyAdults),
};

const childrenSelectProps = {
  placeholder: "Kids",
  width: 120,
  height: commonHeight,
  options: returnOptions(occupancyChildren),
};

function returnOptions(array) {
  return array.map((option) => ({ value: option, label: option }));
}

export default function BookingForm({ property }) {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.formHeader}>
          <Typography
            variant="body2"
            variant="h5"
            className={classes.totalPrice}
          >
            {`${property.price}$/night`}
          </Typography>
          <Chip
            style={{ backgroundColor: "#f73378", color: "#fff" }}
            label="20% OFF"
          />
        </div>
        <Divider />
        <div className={classes.dateInputsGroup}>
          <Box className={classes.dateInput}>
            <DateSelect label="Check-in" />
          </Box>
          <Box className={classes.dateInput}>
            <DateSelect label="Check-out" />
          </Box>
        </div>
        <div>
          <p>Guests</p>
          <div className={classes.guestsInputGroup}>
            <Controller
              name="adultsCount"
              required={true}
              control={control}
              render={({ field }) => (
                <SearchableSelect
                  {...field}
                  customProps={{ ...adultsSelectProps }}
                />
              )}
            />
            <Controller
              name="childrenCount"
              control={control}
              render={({ field }) => (
                <SearchableSelect
                  {...field}
                  customProps={{ ...childrenSelectProps }}
                />
              )}
            />
          </div>
        </div>
        <div className={classes.checksGroup}>
          <p>Extra Features</p>
          <ExtraFeatures />
        </div>
        <div>
          <p>Price</p>
          <div className={classes.priceForm}>
            <div className={classes.priceItem}>
              <p>1 Nights</p>
              <p>$501</p>
            </div>
            <div className={classes.priceItem}>
              <p>Discount 20%</p>
              <p>-$200</p>
            </div>
            <div className={classes.priceItem}>
              <p>Breakfast a day per person</p>
              <p>$10</p>
            </div>
            <div className={classes.priceItem}>
              <p>Service fee</p>
              <p>$5</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.bookButton}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
