import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DetailChips from "./ChipsBlock";
import PropertyDetailsTabs from "./PropertyDetailsTabs";
import {
  Button,
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Tooltip,
  Typography,
} from "@material-ui/core";
import BookingDetailsFeatures from "./BookingDetailsFeatures";
import BookingForm from "./BookingForm/BookingForm";
import { Link, useParams } from "react-router-dom";
import { useProperties } from "./../../contexts/PropertyContext";
import { URL_PATHS } from "./../../helpers/consts";
import {
  AttachMoney,
  DeleteForever,
  Edit,
  People,
  PeopleAlt,
} from "@material-ui/icons";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useState } from "react";
import PropertyForm from "../Forms/PropertyForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",

    // justifyContent: "space-around",
    overflow: "hidden",
    margin: "30px 0px 0px 30px",
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
    fontWeight: 600,
  },
  descriptionNav: {
    margin: "20px 0",
  },
  occupancy: {
    fontWeight: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function PropertyDetails() {
  const classes = useStyles();

  const { id } = useParams();
  const {
    getPropertyDetails,
    propertyDetails,
    deleteProperty,
    history,
    openEditMode,
    isEditMode,
    getFeatures,
    featuresData,
    editProperty,
  } = useProperties();

  useEffect(() => {
    if (isEditMode) {
      getFeatures();
    }
  }, [isEditMode]);

  useEffect(() => {
    getPropertyDetails(id);
  }, [id]);

  const adults = () => (propertyDetails.max_adults > 1 ? "Adults" : "Adult");
  const kids = () => (propertyDetails.max_kids > 1 ? "Kids" : "Child");

  const options = featuresData.map((feature) => ({
    value: feature.id,
    label: feature.name,
    icon: feature.icon,
  }));

  function handleDeleteProperty() {
    deleteProperty(id);
    history.push(URL_PATHS.PROPERTIES_LIST);
  }

  const handleEditProperty = async (property) => {
    property = normalizeImgURLs(property);
    const newProperty = await editProperty(property);
    await getPropertyDetails(id);
  };

  function normalizeImgURLs(property) {
    property.images = property.imageURLs.split(";");
    return property;
  }

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
          <div>
            <Tooltip title="Edit Your Listing">
              <Link
                to="#"
                // to={`${URL_PATHS.PROPERTIES_EDIT}/${id}`}
                style={{ textDecoration: "none" }}
              >
                <IconButton
                  color="secondary"
                  className={classes.editButton}
                  onClick={openEditMode}
                >
                  <Icon>
                    <Edit />
                  </Icon>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Delete Your Listing">
              <IconButton
                color="secondary"
                className={classes.editButton}
                onClick={handleDeleteProperty}
              >
                <Icon>
                  <DeleteForever />
                </Icon>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className={classes.chipsBlock}>
          <div>
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
          </div>
          <div>
            <div>
              <ListItem>
                <Tooltip title="Max Occupancy">
                  <div className={classes.occupancy}>
                    <Icon color="disabled">
                      <PeopleAlt />
                    </Icon>
                    <div>
                      {`${propertyDetails.max_adults} ${adults()} ${
                        propertyDetails.max_kids
                      } ${kids()}`}
                    </div>
                  </div>
                </Tooltip>
              </ListItem>
            </div>
            <div>
              <Alert
                icon={<AttachMoney fontSize="inherit" />}
                variant="outlined"
                severity="success"
              >
                {propertyDetails.price} / Night
              </Alert>
            </div>
          </div>
        </div>

        <PropertyDetailsTabs
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
        {isEditMode ? (
          <PropertyForm
            options={options}
            formTitle={"Edit Property"}
            onSubmit={handleEditProperty}
            isEditMode={isEditMode}
            property={propertyDetails}
          />
        ) : (
          <BookingForm property={propertyDetails} />
        )}
      </div>
    </div>
  );
}
