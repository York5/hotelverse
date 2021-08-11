import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropertyForm from "../Forms/PropertyForm";
import { useProperties } from "../contexts/PropertyContext";

const useStyles = makeStyles({});

const AddProperty = () => {
  const classes = useStyles();
  const { addProperty, history } = useProperties();

  const onSubmit = (property) => {
    console.log(property);
    const data = addProperty(property);
    history.push("/");
  };

  // const handleInp = (e) => {
  //   console.log(property);
  //   let obj = {
  //     ...property,
  //     [e.target.name]: e.target.value,
  //   };
  //   setProperty(obj);
  // };

  return (
    <PropertyForm
      formTitle={"Add New Property"}
      // property={property}
      // handleInp={handleInp}
      onSubmit={onSubmit}
    />
  );
};

export default AddProperty;
