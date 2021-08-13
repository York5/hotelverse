import React from "react";
import PropertyDetails from "../components/BookingDetails/PropertyDetails";
import FeaturedBody from "../components/Featured/FeaturedBody";
import MainLayout from "../Layouts/MainLayout";

const DetailPage = () => {
  return (
    <MainLayout>
      <PropertyDetails />
    </MainLayout>
  );
};

export default DetailPage;
