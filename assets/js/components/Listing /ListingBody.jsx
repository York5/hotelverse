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
import { useProperties } from "../contexts/PropertyContext";

const useStyles = makeStyles((theme) => {
  console.log(theme.palette);
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

const itemData = [
  {
    img: "https://media.istockphoto.com/vectors/flat-design-vector-of-small-town-in-autumn-landscape-vector-id879004790?k=6&m=879004790&s=170667a&w=0&h=U9j2aQL2swmYkhtxmPu-s3oZWiSWRP7ZbaHRvsUODFg=",
    title: "Hollywood Hills Upscale",
    price: 1000,
    rating: 5,
    location: "USA",
    description:
      "Unwind at this stunning French Provencal beachside cottage. The house was lovingly built with stone floors, high-beamed ceilings, and antique details for a luxurious yet charming feel. Enjoy the sea and mountain views from the pool and lush garden. The house is located in the enclave of Llandudno Beach, a locals-only spot with unspoilt, fine white sand and curling surfing waves. Although shops and restaurants are only a five-minute drive away, the area feels peaceful and secluded.",
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
  {
    img: "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg",
    title: "Nordic Arctic Hall",
    price: 1000,
    rating: 4,
    location: "Kyrgyzstan",
  },
  {
    img: "https://media.istockphoto.com/vectors/flat-design-vector-of-small-town-in-autumn-landscape-vector-id879004790?k=6&m=879004790&s=170667a&w=0&h=U9j2aQL2swmYkhtxmPu-s3oZWiSWRP7ZbaHRvsUODFg=",
    title: "Hollywood Hills Upscale",
    price: 1000,
    rating: 7,
    location: "Canada",
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
    img: "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg",
    title: "Nordic Arctic Hall",
    price: 1000,
    rating: 4,
    location: "Kyrgyzstan",
  },
  {
    img: "https://media.istockphoto.com/vectors/flat-design-vector-of-small-town-in-autumn-landscape-vector-id879004790?k=6&m=879004790&s=170667a&w=0&h=U9j2aQL2swmYkhtxmPu-s3oZWiSWRP7ZbaHRvsUODFg=",
    title: "Hollywood Hills Upscale",
    price: 1000,
    rating: 7,
    location: "Canada",
  },
  {
    textDecoration: "none",
    img: "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg",
    title: "Nordic Arctic Hall",
    price: 1000,
    rating: 4,
    location: "Kyrgyzstan",
  },
];

export default function ListingBody() {
  const classes = useStyles();
  const { getPropertiesData, propertiesData } = useProperties();

  useEffect(() => {
    getPropertiesData();
  }, []);

  useEffect(() => {}, [propertiesData]);

  return (
    <div className={classes.listingContainer}>
      <Container className={classes.cardsContainer}>
        {propertiesData.map((item) => (
          <Link
            key={item.id}
            to={`/details/${item.id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className={classes.cardContainer}>
              <div
                className={classes.cardDiv}
                style={{
                  backgroundImage: `url(https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg)`,
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
                    variant="p"
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
