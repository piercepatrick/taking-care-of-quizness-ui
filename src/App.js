import { ThemeProvider } from "@material-ui/core";

import NewQuestion from "./components/NewQuestion/NewQuestion";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewQuestion />
    </ThemeProvider>
  );
}

export default App;
