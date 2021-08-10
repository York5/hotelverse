import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes/Routes";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

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
      // paper: "#E1EEF7",
      default: "#E1EEF7",
    },
  },
});

if (theme.palette.type === "light") {
  theme.palette.action.active = "#fff";
} else {
  theme.palette.action.active = "#000";
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
