import {
  Box,
  Button,
  Container,
  IconButton,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ListingMap from "../GoogleMap/GoogleMap";
import { Link } from "react-router-dom";
import { useProperties } from "./../../contexts/PropertyContext";
import { URL_PATHS } from "./../../helpers/consts";

const useStyles = makeStyles((theme) => {
  return {
    cardDiv: {
      height: 200,
      color: "#fff",
      fontSize: "4em",
      boxShadow: "1px 2px 3px rgba(0,0,0,.5)",
      overflow: "hidden",
      borderRadius: 20,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: 300,
      marginBottom: 10,
    },
    showMore: {
      color: theme.palette.primary.main,
    },
    cardInner: {
      backgroundColor: "rgba(48, 48, 44, 0.27)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 10,
      height: "100%",
      borderRadius: 20,
    },
    favIcon: {
      display: "flex",
      float: "right",
    },
    cardTextInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    ratingBlock: {
      display: "flex",
      alignItems: "center",
    },
    starIcon: {
      marginRight: 5,
    },
    typographyCustom: {
      fontWeight: 800,
    },
    locationBlock: {
      display: "flex",
      alignItems: "center",
      opacity: "0.7",
    },
    typographyLocation: {
      fontSize: 18,
    },
    cardsContainer: {
      display: "flex",
      flexWrap: "wrap",
    },
    listingContainer: {
      display: "flex",
      marginLeft: 100,
    },
    mapContainer: {
      width: "40%",
      height: "100vh",
      position: "sticky",
      top: 0,
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      margin: 20,
    },
  };
});

export default function ListingBody() {
  const classes = useStyles();
  const { getPropertiesData, propertiesData } = useProperties();

  useEffect(() => {
    getPropertiesData();
  }, []);

  return (
    <div className={classes.listingContainer}>
      <Container className={classes.cardsContainer}>
        {propertiesData.map((item) => (
          <Link
            key={item.id}
            to={`${URL_PATHS.PROPERTIES_DETAILS}/${item.id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className={classes.cardContainer}>
              <div
                className={classes.cardDiv}
                style={{
                  backgroundImage: `url(${item.images[0]})`,
                }}
              >
                <Box className={classes.favIcon}>
                  <IconButton aria-label={`star ${item.title}`}>
                    <FavoriteBorderIcon style={{ fill: "black" }} />
                  </IconButton>
                </Box>
              </div>
              <div
              // className={classes.cardInner}
              >
                <div>
                  <div className={classes.cardTextInner}>
                    <Box>
                      <Typography className={classes.typographyCustom}>
                        {item.title}
                      </Typography>
                    </Box>
                    <div className={classes.ratingBlock}>
                      <StarIcon className={classes.starIcon} />
                      <Typography>{item.rating}</Typography>
                    </div>
                  </div>
                </div>

                <div className={classes.locationBlock}>
                  <LocationOnOutlinedIcon className={classes.locationIcon} />
                  <Typography
                    component="p"
                    className={classes.typographyLocation}
                  >
                    {item.location}
                  </Typography>
                </div>
                <Typography className={classes.typographyCustom}>
                  ${item.price}/night
                </Typography>
              </div>
            </div>
          </Link>
        ))}
      </Container>

      <Container
        className={classes.mapContainer}
        // style={{ width: 400, height: 400 }}
      >
        <ListingMap />
      </Container>
    </div>
  );
}
