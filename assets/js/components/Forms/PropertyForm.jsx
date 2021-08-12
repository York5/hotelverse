import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SearchableSelect from "../Header/SearchableSelect";
import { Controller, useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
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

const commonHeight = 48;

const PropertyForm = ({
  formTitle,
  options,
  property,
  handleInp,
  onSubmit,
}) => {
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const searchProps = {
    placeholder: "Select Property Features",
    width: "100%",
    height: commonHeight,
    isMulti: true,
    options: options,
    hideDropdown: true,
    hideSeparator: true,
    keepMenuOpen: true,
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <Container className={classes.container}>
        <h1 className={classes.title}>{formTitle}</h1>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="title"
            required={true}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                name="title"
                variant="outlined"
                label="Title"
                className={classes.textfield}
                style={{ marginBottom: 10 }}
              />
            )}
          />
          <Controller
            name="description"
            required={true}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                name="description"
                variant="outlined"
                label="Description"
                className={classes.textfield}
                style={{ marginBottom: 10 }}
              />
            )}
          />
          <Controller
            name="location"
            required={true}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                name="location"
                variant="outlined"
                label="Location"
                className={classes.textfield}
                style={{ marginBottom: 10 }}
              />
            )}
          />
          <Controller
            name="price"
            required={true}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                name="price"
                variant="outlined"
                label="Price"
                className={classes.textfield}
                style={{ marginBottom: 10 }}
              />
            )}
          />
          <Controller
            name="imageURLs"
            required={true}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                name="imageURLs"
                variant="outlined"
                label="Images Bucket URL"
                className={classes.textfield}
                style={{ marginBottom: 10 }}
              />
            )}
          />

          <Controller
            name="features"
            required={true}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SearchableSelect {...field} customProps={{ ...searchProps }} />
            )}
          />
          {/* <MultiImageUploader /> */}

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className={classes.publishButton}
          >
            Publish
          </Button>
        </form>
      </Container>
    </Paper>
  );
};

export default PropertyForm;
