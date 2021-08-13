import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import NotificationsBar from "../components/Utils/NotificationsBar";
import { BAR_SIZE } from "../helpers/consts";
import styled, { keyframes } from "styled-components";
import { slideInUp, slideInDown } from "react-animations";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    // main: {
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "flex-end",
    // },
    content: {
      marginLeft: BAR_SIZE,
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
    },
  };
});

const MainLayout = ({ children }) => {
  const slideInUpAnimation = keyframes`${slideInUp}`;
  const slideInDownAnimation = keyframes`${slideInDown}`;

  const SlidingInUpDiv = styled.div`
    animation: 2s ${slideInUpAnimation};
  `;

  const SlidingInDownDiv = styled.div`
    animation: 1s ${slideInDownAnimation};
  `;

  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.main}>
      <Sidebar />
      {history.location.pathname === "/" ? (
        <SlidingInDownDiv>
          <Header />
        </SlidingInDownDiv>
      ) : (
        <Header />
      )}

      {history.location.pathname === "/" ? (
        <SlidingInUpDiv>
          <div className={classes.content}>{children}</div>
        </SlidingInUpDiv>
      ) : (
        <div className={classes.content}>{children}</div>
      )}
      <NotificationsBar />
    </div>
  );
};

export default MainLayout;
