import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import { Button } from "@material-ui/core";
// import MultiImageUploader from "./MultiImageUploader";
import SearchableSelect from "../Header/SearchableSelect";
import { Controller, useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    // color: theme.palette.bacground.secondary,
    marginLeft: 100,
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "grey",
  },
  container: {
    flexDirection: "row",
    color: "black",
    maxWidth: 800,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 40,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textfield: {
    marginTop: 10,
  },
  publishButton: {
    margin: "20px 0",
  },
}));

const tempData = [
  { value: "breakfast", label: "Breakfast" },
  { value: "wifi", label: "Wi-Fi" },
  { value: "bathtub", label: "Bathtub" },
  { value: "kingsbed", label: "Kings Bed" },
];

const commonHeight = 48;

const AddProperty = () => {
  const classes = useStyles();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const searchProps = {
    placeholder: "Property features?",
    width: "100%",
    height: commonHeight,
    isMulti: true,
    options: tempData,
    hideDropdown: true,
    hideSeparator: true,
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <Container className={classes.container}>
        <h1 className={classes.title}>Add Your Property</h1>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            // onChange={handleInp}
            className={classes.textfield}
          />
          <TextField
            name="description"
            variant="outlined"
            label="Description"
            // onChange={handleInp}
            className={classes.textfield}
          />
          <TextField
            name="location"
            variant="outlined"
            label="Location"
            // onChange={handleInp}
            className={classes.textfield}
          />
          <TextField
            name="price"
            variant="outlined"
            label="Price"
            // onChange={handleInp}
            className={classes.textfield}
          />
          <TextField
            name="image"
            variant="outlined"
            label="Images Bucket URL"
            // onChange={handleInp}
            className={classes.textfield}
            style={{ marginBottom: 10 }}
          />
          <Controller
            name="searchString"
            required={true}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SearchableSelect customProps={{ ...searchProps }} />
            )}
          />
          {/* <MultiImageUploader /> */}

          <Button
            variant="contained"
            color="secondary"
            className={classes.publishButton}
            // onClick={() => handleClick(product)}
          >
            Publish
          </Button>
        </form>
      </Container>
    </Paper>
  );
};

export default AddProperty;
