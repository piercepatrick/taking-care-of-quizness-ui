import { ThemeProvider } from "@material-ui/core";

import NewQuestion from "./components/NewQuestion/NewQuestion";
import QuizView from "./components/QuizView/QuizView";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <NewQuestion /> */}
      <QuizView />
    </ThemeProvider>
  );
}

export default App;
