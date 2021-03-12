import { useEffect, useState } from "react";
import { Container, ThemeProvider } from "@material-ui/core";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { Auth, Hub } from "aws-amplify";

import SideBar from "./components/SideBar/SideBar";
import Illustration from "./assets/images/Illustration.svg";
import { theme } from "./theme";
import { AuthConfig } from "./authentication/config";

Auth.configure(AuthConfig);

function App() {
  const [user, updateUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => updateUser(user))
      .catch(() => console.log("No signed in user."));
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return updateUser(data.payload.data);
        case "signOut":
          return updateUser(null);
        default:
          throw new Error("Something when wrong with auth");
      }
    });
  }, []);

  if (user) {
    return (
      <ThemeProvider theme={theme}>
        <SideBar username={user.username} />
        <Container maxWidth="md">
          <img src={Illustration} alt="logo illustration" />
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <AmplifyAuthenticator data-testid="authenticator">
        <AmplifySignUp
          headerText="Sign up for Quizness"
          slot="sign-up"
          formFields={[
            { type: "username" },
            {
              type: "password",
              label: "Custom Password Label",
              placeholder: "custom password placeholder",
            },
            { type: "email" },
          ]}
        />
      </AmplifyAuthenticator>
    </div>
  );
}

export default App;
