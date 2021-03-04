import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";

import NewQuestion from "./components/NewQuestion/NewQuestion";
import QuizView from "./components/QuizView/QuizView";
import SideBar from "./components/SideBar/SideBar";
import { theme } from "./theme";
import { AuthConfig } from "./authentication/config";

Amplify.configure(AuthConfig);

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

export default withAuthenticator(App);
