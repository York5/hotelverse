import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import { useAuth } from "./../../contexts/AuthContext";
import { useEffect } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const NotificationsBar = () => {
  const { messageType, message } = useAuth();
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  useEffect(() => {
    setOpen(true);
  }, [message]);

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      {message && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={handleClose}
          TransitionComponent={transition}
          key={transition ? transition.name : ""}
        >
          <Alert severity={messageType}>
            <AlertTitle>{message.title}</AlertTitle>
            {message.body}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default NotificationsBar;
