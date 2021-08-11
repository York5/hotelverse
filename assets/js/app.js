// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss";

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Routes from "./Routes/Routes";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1562E0",
      light: "#4193EA",
    },
    secondary: {
      main: "#A9DE52",
    },
    // error: {},
    // warning: {},
    info: {
      main: "#A8C1D3",
    },
    // success: {},
    text: {
      primary: "#000",
      secondary: "#000",
    },
    background: {
      paper: "#E1EEF7",
      default: "#E1EEF7",
    },
  },
});

if (theme.palette.type === "light") {
  theme.palette.action.active = "#fff";
} else {
  theme.palette.action.active = "#000";
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);
