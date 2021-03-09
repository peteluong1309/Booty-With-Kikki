import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Fragment } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import theme from './theme';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="App">
            <Homepage />
          </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
