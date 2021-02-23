import { Grid, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NewQuestion from "./components/NewQuestion/NewQuestion";
import QuizView from "./components/QuizView/QuizView";
import SideBar from "./components/SideBar/SideBar";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={9}>
            <Switch>
              <Route path="/new">
                <NewQuestion />
              </Route>
              <Route path="/">
                <QuizView />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
