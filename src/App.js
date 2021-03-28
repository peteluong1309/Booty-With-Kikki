import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import theme from './theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WorkoutPlanPage from "./pages/Workoutpage";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <NavBar />
          <div className="App">
            <Switch>
              <Route path='/' exact component={Homepage} />
              <Route exact path='/workout-plan' component={WorkoutPlanPage} />
            </Switch>
          </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
