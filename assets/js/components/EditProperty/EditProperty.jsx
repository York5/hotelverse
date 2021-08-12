import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropertyForm from "../Forms/PropertyForm";

const useStyles = makeStyles({});

const EditProperty = () => {
  const classes = useStyles();

  return <PropertyForm formTitle={"Edit Property"} />;
};

export default EditProperty;
