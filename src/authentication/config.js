export const AuthConfig = {
  region: "us-east-1",
  userPoolId: "",
  userPoolWebClientId: "",
  oauth: {
    scope: ["aws.cognito.signin.user.admin", "openid"],
    redirectSignIn: `${window.location.protocol}//${window.location.host}/login`,
    redirectSignOut: `${window.location.protocol}//${window.location.host}/logout`,
    responseType: "code",
  },
};
