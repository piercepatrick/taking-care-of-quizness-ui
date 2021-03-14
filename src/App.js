import Auth from "@aws-amplify/auth";
import { Container, ThemeProvider } from "@material-ui/core";
import Illustration from "./assets/images/Illustration.svg";
import { theme } from "./theme";
import { AuthConfig } from "./authentication/AuthConfig";
import { withAuthenticator } from "@aws-amplify/ui-react";

Auth.configure(AuthConfig);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <img src={Illustration} alt="logo illustration" />
      </Container>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
