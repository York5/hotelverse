import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import GoogleMap from "google-map-react";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  textRed: {
    color: "red",
  },
  mapFrame: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
    boxShadow: "1px 2px 3px rgba(0,0,0,.5)",
  },
  mapDiv: {
    width: "95%",
    height: "95%",
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translate(50%,-50%)",
  },
});

function Marker({ text }) {
  const classes = useStyles();
  return (
    <Tooltip title={text} placement="top">
      <Icon>
        <RoomIcon className={classes.textRed} />
      </Icon>
    </Tooltip>
  );
}

function ListingMap() {
  const classes = useStyles();
  return (
    <div className={classes.mapFrame}>
      <div className={classes.mapDiv}>
        <GoogleMap
          bootstrapURLKeys={{
            key: process.env.REACT_APP_MAP_KEY,
          }}
          defaultZoom={12}
          defaultCenter={[-34.397, 150.64]}
        >
          <Marker text="Marker Text" lat="-34.397" lng="150.644" />
        </GoogleMap>
      </div>
    </div>
  );
}

export default ListingMap;
