import React, { useRef } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import TabScrollButton from "@material-ui/core/TabScrollButton";
import {
  Container,
  Tabs,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      marginLeft: 135,
      marginTop: 300,
    },
    imageList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
      marginLeft: 300,
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    carouselItem: {
      borderRadius: "10%",
    },
    list: {
      // overflowY: "auto",
      // margin: 0,
      // padding: 0,
      // listStyle: "none",
      // height: "100%",
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: 0,
      },
      "&::-webkit-scrollbar-button:single-button": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.5)",
        display: "block",
        width: 30,
      },
      // "&::-webkit-scrollbar-thumb": {
      //   backgroundColor: "#1562E0",
      //   outline: "10px solid slategrey",
      // },
      // "&::-webkit-scrollbar-thumb": {
      //   backgroundColor: "#1562E0",
      //   outline: "10px solid slategrey",
      // },
    },
  })
);

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
    img: "https://img.freepik.com/free-vector/countryside-landscape-illustration-concept_23-2148655444.jpg?size=626&ext=jpg",
    title: "Hollywood Hills Upscale",
    price: 1,
    rating: "author",
  },
  {
    img: "https://img.freepik.com/free-vector/countryside-landscape-illustration-concept_23-2148655444.jpg?size=626&ext=jpg",
    title: "Hollywood Hills Upscale",
    price: 1,
    rating: "author",
  },
];

export default function Home() {
  const classes = useStyles();
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  // button.addEventListener("mousedown", () => {
  //   let mouseIsDown = true;
  //   document.body.addEventListener("mouseup", () => clearTimeout(intervalLog));
  //   document.body.addEventListener("mouseover", (e) => {
  //     if (e.target !== button) clearTimeout(intervalLog);
  //   });
  //   const intervalLog = setInterval(
  //     () => console.log("mouse is down over button."),
  //     300
  //   );
  // });

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onMouseDown={function (e) {
            scroll(-90);
            // setInterval(() => {
            //   scroll(-90);
            //   console.log("hey");
            // }, 300);
            // e.target.onMouseUP = {
            //   function() {
            //     clearTimeout(intervalLog);
            //   },
            // };
          }}
        >
          LEFT
        </Button>
        <Button onKeyPress={() => scroll(40)}>RIGHT</Button>
      </ButtonGroup>
      <ImageList
        className={classes.imageList}
        cols={2.5}
        classes={{ root: classes.list }}
        ref={ref}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            style={{ height: 350, padding: 10 }}
            classes={{
              item: classes.carouselItem,
            }}
          >
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={
                <>
                  <p>US${item.price}</p>
                  <span>
                    <StarBorderOutlinedIcon style={{ fill: "#fff" }} />
                    {item.rating}
                  </span>
                </>
              }
              classes={
                {
                  // paper: classes.titleBar,
                }
              }
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <FavoriteBorderIcon style={{ fill: "#fff" }} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
