import { Button, makeStyles, Paper, Tab, Tabs } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import FeaturedNav from "./FeaturedNav";

const useStyles = makeStyles((theme) => ({
  cardDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    backgroundColor: "#00008b",
    color: "#fff",
    fontSize: "4em",
    overflow: "hidden",
    borderRadius: 20,
  },
  cardImg: {
    flexSrink: 0,
    minWidth: "100%",
    minHeight: "100%",
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
}));

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
  },
  {
    img: "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg",
    title: "Nordic Arctic Hall",
    price: 1000,
    rating: 3,
  },
  {
    img: "https://i.pinimg.com/originals/e7/a1/e6/e7a1e6910486befc2507c6462528c3d7.png",
    title: "Cozy House on Clandike",
    price: 1000,
    rating: 5,
  },

  {
    img: "https://img.freepik.com/free-vector/countryside-landscape-illustration-concept_23-2148655444.jpg?size=626&ext=jpg",
    title: "Hollywood Hills Upscale",
    price: 1,
    rating: "author",
  },
  {
    img: "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg",
    title: "Nordic Arctic Hall",
    price: 1000,
    rating: 3,
  },
  {
    img: "https://media.istockphoto.com/vectors/flat-design-vector-of-small-town-in-autumn-landscape-vector-id879004790?k=6&m=879004790&s=170667a&w=0&h=U9j2aQL2swmYkhtxmPu-s3oZWiSWRP7ZbaHRvsUODFg=",
    title: "Hollywood Hills Upscale",
    price: 1000,
    rating: 5,
  },
];

export default function FeaturedBody() {
  let carousel;
  const classes = useStyles();
  return (
    <>
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
          {itemData.map((item) => (
            <>
              <div className={classes.cardDiv}>
                <img src={item.img} alt="" srcset="" />
              </div>
            </>
          ))}
        </Carousel>
        <Paper className={classes.navPaper}>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            aria-label="disabled tabs example"
          >
            <Tab
              className={(classes.navItem, classes.showMore)}
              label="Show More"
            />
          </Tabs>
        </Paper>
      </div>
    </>
  );
}
