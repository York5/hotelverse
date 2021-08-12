import { Button, Grid, makeStyles, Toolbar } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import SearchableSelect from "./SearchableSelect";
import DateSelect from "./DateSelect";

const occupancyAdults = [1, 2, 3, 4, 5, 6];
const occupancyChildren = [0, 1, 2, 3, 4];
const tempData = [
  { value: "NCE", label: "NICE" },
  { value: "FRA", label: "FRANKFURT" },
  { value: "FRU", label: "BISHKEK" },
];

const commonHeight = 48;

const useStyles = makeStyles((theme) => ({
  searchForm: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: -50,
    width: "100%",

    // height: 80,
  },
  searchBar: {
    height: "100%",
    borderRadius: 8,
    padding: "0 8px 0 8px",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.grey,
    boxShadow: "1px 2px 3px rgba(0,0,0,.5)",
  },
  searchBarItem: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    color: theme.palette.info.main,
    marginLeft: "0.5rem",
  },
  buttonFind: {
    height: commonHeight,
    // borderRadius: "0 16px 16px 0",
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 700,
    textTransform: "capitalize",
  },
}));

const Searchbar = () => {
  const classes = useStyles();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  function returnOptions(array) {
    return array.map((option) => ({ value: option, label: option }));
  }

  const searchProps = {
    name: "searchString",
    placeholder: "Where are you going?",
    width: 200,
    height: commonHeight,
    isMulti: false,
    options: tempData,
    prefix: <LocationOnOutlinedIcon className={classes.searchIcon} />,
    hideDropdown: true,
    hideSeparator: true,
  };

  const adultsSelectProps = {
    name: "adultsCount",
    placeholder: "Adults",
    width: 100,
    height: commonHeight,
    options: returnOptions(occupancyAdults),
  };

  const childrenSelectProps = {
    name: "childrenCount",
    placeholder: "Kids",
    width: 90,
    height: commonHeight,
    options: returnOptions(occupancyChildren),
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.searchForm}>
      <Toolbar>
        <Grid
          container
          spacing={1}
          alignItems="center"
          className={classes.searchBar}
        >
          <Grid item className={classes.searchBarItem}>
            <Controller
              name="searchString"
              required={true}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <SearchableSelect {...field} customProps={{ ...searchProps }} />
              )}
            />
          </Grid>
          <Grid item className={classes.searchBarItem}>
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
          </Grid>
          <Grid item className={classes.searchBarItem}>
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
          </Grid>
          <Grid item xs className={classes.searchBarItem}>
            <DateSelect label="Check in" />
          </Grid>
          <Grid item xs className={classes.searchBarItem}>
            <DateSelect label="Check out" />
          </Grid>
          <Grid item xs={2} className={classes.searchBarItem}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.buttonFind}
            >
              Find Now
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </form>
  );
};

export default Searchbar;
