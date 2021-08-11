import React from "react";
import AddProperty from "../components/AddProperty/AddProperty";
import BookingDetailsBody from "../components/BookingDetails/BookingDetailsBody";
import FeaturedBody from "../components/Featured/FeaturedBody";
import MainLayout from "../Layouts/MainLayout";

const AddPropertyPage = () => {
  return (
    <MainLayout>
      <AddProperty />
    </MainLayout>
  );
};

export default AddPropertyPage;
