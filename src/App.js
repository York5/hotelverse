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
    // secondary: {
    //     main: green[500],
    // },
    // error: {},
    // warning: {},
    // info: {},
    // success: {},
    // text: {},
    background: {
      // paper: "#E1EEF7",
      default: "#E1EEF7",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
