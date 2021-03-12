import { Container, ThemeProvider } from "@material-ui/core";

import Illustration from "./assets/images/Illustration.svg";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <img src={Illustration} alt="logo illustration" />
      </Container>
    </ThemeProvider>
  );
}

export default App;
