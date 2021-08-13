import { Button, div, makeStyles, Toolbar } from "@material-ui/core";
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
    // flexWrap: "wrap",
    // position: "absolute",
    // bottom: -50,
    width: "100%",
    position: "absolute",
    top: "30vh",
  },
  searchBar: {
    height: "100%",
    maxWidth: "80%",
    borderRadius: 8,
    padding: "8px 8px 8px 8px",
    color: theme.palette.grey,
    boxShadow: "1px 2px 3px rgba(0,0,0,.5)",
    backgroundColor: theme.palette.background.paper,
  },
  searchBarWrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  searchBarRow: {
    display: "flex",
    maxWidth: 450,
    margin: "8px 0px 8px 0px",
  },
  searchBarItem: {
    height: "100%",
    display: "flex",
    // alignItems: "center",
    padding: "0 4px 0 4px",
  },
  checkInPicker: {
    height: "100%",
    display: "flex",
    // alignItems: "center",
    padding: "0 4px 0 4px",
    minWidth: 120,
  },
  checkOutPicker: {
    height: "100%",
    display: "flex",
    // alignItems: "center",
    padding: "0 4px 0 4px",
    minWidth: 120,
  },
  searchIcon: {
    color: theme.palette.info.main,
    marginLeft: "0.5rem",
  },
  buttonFind: {
    height: commonHeight,
    minWidth: 120,
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
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
      <Toolbar className={classes.searchBar}>
        <div className={classes.searchBarWrapper}>
          <div className={classes.searchBarRow}>
            <div className={classes.searchBarItem}>
              <Controller
                name="searchString"
                required={true}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <SearchableSelect
                    {...field}
                    customProps={{ ...searchProps }}
                  />
                )}
              />
            </div>
            <div className={classes.searchBarItem}>
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
            </div>
            <div className={classes.searchBarItem}>
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
          <div className={classes.searchBarRow}>
            <div className={classes.checkInPicker}>
              <DateSelect label="Check in" />
            </div>
            <div className={classes.checkOutPicker}>
              <DateSelect label="Check out" />
            </div>
            <div className={classes.searchBarItem}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.buttonFind}
              >
                Find Now
              </Button>
            </div>
          </div>
        </div>
      </Toolbar>
    </form>
  );
};

export default Searchbar;
