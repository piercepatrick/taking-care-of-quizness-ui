export const AuthConfig = {
  region: "",
  userPoolId: "",
  userPoolWebClientId: "",
  oauth: {
    scope: ["aws.cognito.signin.user.admin", "openid"],
    redirectSignIn: `${window.location.protocol}//${window.location.host}/login`,
    redirectSignOut: `${window.location.protocol}//${window.location.host}/logout`,
    responseType: "code",
  },
};
