import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DetailChips from "./ChipsBlock";
import BookingDetailsTabs from "./BookingDetaisTabs";
import { Button, Typography } from "@material-ui/core";
import BookingDetailsFeatures from "./BookingDetailsFeatures";
import BookingForm from "./BookingForm/BookingForm";
import { Link, useParams } from "react-router-dom";
import { useProperties } from "./../../contexts/PropertyContext";
import { URL_PATHS } from "./../../helpers/consts";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",

    // justifyContent: "space-around",
    overflow: "hidden",
    marginLeft: 120,
  },
  detailsBlock: {
    width: "70%",
  },
  bookingForm: {
    width: "25%",
    margin: "0 20px",
  },
  imageList: {
    height: "60vh",
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: "translateZ(0)",
  },
  chipsBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editButton: {
    maxHeight: 30,
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  detailsDescription: {
    lineHeight: "2rem",
    margin: "0 0 30px 0",
    opacity: "0.7",
  },
  addressText: {
    opacity: "0.7",
  },
  detailsTitle: {
    margin: "10px 0",
  },
  descriptionNav: {
    margin: "20px 0",
  },
}));

const itemData = [
  {
    img: "https://i.pinimg.com/originals/e7/a1/e6/e7a1e6910486befc2507c6462528c3d7.png",
    title: "Cozy House on Clandike",
    price: 1000,
    rating: 5,
    location: "Los Alamos",
    featured: true,
  },
  {
    img: "https://img.freepik.com/free-vector/countryside-landscape-illustration-concept_23-2148655444.jpg?size=626&ext=jpg",
    title: "Hollywood Hills Upscale",
    price: 1,
    rating: 2,
    location: "New Jersey",
  },
  {
    img: "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg",
    title: "Nordic Arctic Hall",
    price: 1000,
    rating: 3,
    location: "Russian Federation",
  },
  {
    img: "https://i.pinimg.com/originals/e7/a1/e6/e7a1e6910486befc2507c6462528c3d7.png",
    title: "Cozy House on Clandike",
    price: 1000,
    rating: 5,
    location: "Los Alamos",
  },
  {
    img: "https://img.freepik.com/free-vector/countryside-landscape-illustration-concept_23-2148655444.jpg?size=626&ext=jpg",
    title: "Hollywood Hills Upscale",
    price: 1,
    rating: 2,
    location: "New Jersey",
  },
];

export default function BookingDetailsBody() {
  const classes = useStyles();

  const { id } = useParams();
  const { getPropertyDetails, propertyDetails } = useProperties();

  useEffect(() => {
    getPropertyDetails(id);
  }, [id]);

  useEffect(() => {
    console.log(propertyDetails);
  }, [propertyDetails]);

  return (
    <div className={classes.root}>
      <div className={classes.detailsBlock}>
        <ImageList
          rowHeight={200}
          gap={1}
          className={classes.imageList}
          style={{ borderRadius: 20 }}
        >
          {propertyDetails.images &&
            propertyDetails.images.map((imgUrl, index) => (
              <ImageListItem
                key={index}
                cols={!index ? 2 : 1}
                rows={!index ? 2 : 1}
              >
                <img src={imgUrl} />
                <ImageListItemBar
                  title={propertyDetails.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      aria-label={`star ${propertyDetails.title}`}
                      className={classes.icon}
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                  className={classes.titleBar}
                />
              </ImageListItem>
            ))}
        </ImageList>

        <div className={classes.chipsBlock}>
          <DetailChips rating={propertyDetails.rating} />
          <Link
            to={`${URL_PATHS.PROPERTIES_EDIT}/${id}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              color="secondary"
              className={classes.editButton}
            >
              Edit Property
            </Button>
          </Link>
        </div>
        <Typography
          variant="h5"
          component="h5"
          className={classes.detailsTitle}
        >
          {propertyDetails.title}
        </Typography>
        <Typography component="p" className={classes.addressText}>
          {propertyDetails.location}
        </Typography>
        <BookingDetailsTabs
        // className={classes.descriptionNav}
        />
        <Typography component="p" className={classes.detailsDescription}>
          {propertyDetails.description}
        </Typography>

        {propertyDetails.features && (
          <BookingDetailsFeatures features={propertyDetails.features} />
        )}
      </div>
      <div className={classes.bookingForm}>
        <BookingForm />
      </div>
    </div>
  );
}
