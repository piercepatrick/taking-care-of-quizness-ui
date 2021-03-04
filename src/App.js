import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NewQuestion from "./components/NewQuestion/NewQuestion";
import QuizView from "./components/QuizView/QuizView";
import SideBar from "./components/SideBar/SideBar";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <SideBar />
        <Switch>
          <Route path="/new">
            <NewQuestion />
          </Route>
          <Route path="/quiz">
            <QuizView />
          </Route>
          <Route path="/">
            <NewQuestion />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
