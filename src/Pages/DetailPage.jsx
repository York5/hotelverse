import React from "react";
import BookingDetailsBody from "../components/BookingDetails/BookingDetailsBody";
import FeaturedBody from "../components/Featured/FeaturedBody";
import MainLayout from "../Layouts/MainLayout";

const DetailPage = () => {
  return (
    <MainLayout>
      <BookingDetailsBody />
    </MainLayout>
  );
};

export default DetailPage;
