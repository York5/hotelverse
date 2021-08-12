import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import FeaturedNav from "./FeaturedNav";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Link } from "react-router-dom";
import { URL_PATHS } from "./../../helpers/consts";

const useStyles = makeStyles((theme) => {
  return {
    cardDiv: {
      height: 250,
      backgroundColor: "#00008b",
      color: "#fff",
      fontSize: "4em",
      boxShadow: "1px 2px 3px rgba(0,0,0,.5)",
      overflow: "hidden",
      borderRadius: 20,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: 430,
    },
    carouselContainer: {
      margin: "0 10px 0 110px",
    },
    carouselButtons: {
      width: 150,
    },
    carouselNavContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginLeft: 10,
    },
    buttonShape: {
      minWidth: "auto",
      width: 40,
      height: 40,
      borderRadius: 50,
      margin: 5,
      backgroundColor: "white",
    },
    navPaper: {
      backgroundColor: "transparent",
      boxShadow: "none",
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
    },
    typographyLocation: {
      fontSize: 18,
    },
  };
});

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const itemData = [
  {
    img: "https://media.istockphoto.com/vectors/flat-design-vector-of-small-town-in-autumn-landscape-vector-id879004790?k=6&m=879004790&s=170667a&w=0&h=U9j2aQL2swmYkhtxmPu-s3oZWiSWRP7ZbaHRvsUODFg=",
    title: "Hollywood Hills Upscale",
    price: 1000,
    rating: 5,
    location: "USA",
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
];

export default function FeaturedBody() {
  let carousel;
  const classes = useStyles();
  return (
    <div className={classes.carouselContainer}>
      <div className={classes.carouselNavContainer}>
        <div className={classes.carouselNav}>
          <FeaturedNav />
        </div>
        <div className={classes.carouselButtons}>
          <Button
            onClick={() => carousel.slidePrev()}
            variant="contained"
            className={classes.buttonShape}
          >
            {"<"}
          </Button>
          <Button
            onClick={() => carousel.slideNext()}
            variant="contained"
            className={classes.buttonShape}
          >
            {">"}
          </Button>
        </div>
      </div>

      <Carousel
        ref={(ref) => (carousel = ref)}
        breakPoints={breakPoints}
        pagination={false}
        showArrows={false}
        itemPadding={[10, 10]}
      >
        {itemData.map((item, index) => (
          <div
            key={index}
            className={classes.cardDiv}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className={classes.cardInner}>
              <div>
                <div className={classes.cardTextInner}>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h6"
                      className={classes.typographyCustom}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box className={classes.favIcon}>
                    <IconButton aria-label={`star ${item.title}`}>
                      <FavoriteBorderIcon style={{ fill: "#fff" }} />
                    </IconButton>
                  </Box>
                </div>

                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.typographyCustom}
                >
                  US ${item.price}
                </Typography>

                <div className={classes.ratingBlock}>
                  <StarIcon className={classes.starIcon} />
                  <Typography
                    variant="h6"
                    component="h6"
                    className={classes.typographyCustom}
                  >
                    {item.rating}
                  </Typography>
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
            </div>
          </div>
        ))}
      </Carousel>
      <Paper className={classes.navPaper}>
        <Link to={URL_PATHS.PROPERTIES_LIST}>
          <Button className={(classes.navItem, classes.showMore)}>
            Show More
          </Button>
        </Link>
      </Paper>
    </div>
  );
}
