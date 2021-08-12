import React from "react";
import PropertyForm from "../Forms/PropertyForm";
import { useProperties } from "./../../contexts/PropertyContext";
import { URL_PATHS } from "./../../helpers/consts";
import { useEffect } from "react";

const AddProperty = () => {
  const { getFeatures, featuresData, addProperty, history } = useProperties();

  useEffect(() => {
    getFeatures();
  }, []);

  const options = featuresData.map((feature) => ({
    value: feature.id,
    label: feature.name,
    icon: feature.icon,
  }));

  const onSubmit = async (property) => {
    property = normalizeImgURLs(property);
    const newProperty = await addProperty(property);
    history.push(`${URL_PATHS.PROPERTIES_DETAILS}/${newProperty.id}`);
  };

  function normalizeImgURLs(property) {
    property.images = property.imageURLs.split(";");
    return property;
  }

  return (
    <PropertyForm
      options={options}
      formTitle={"Add New Property"}
      onSubmit={onSubmit}
    />
  );
};

export default AddProperty;
