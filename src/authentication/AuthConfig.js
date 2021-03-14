export const AuthConfig = {
  region: "us-east-1",
  userPoolId: "us-east-1_vyHvDX50R",
  userPoolWebClientId: "3mbdlci156h0um5dm9i6h2m87",
  oauth: {
    scope: ["aws.cognito.signin.user.admin", "openid"],
    responseType: "code",
    redirectSignIn: `${window.location.protocol}//${window.location.host}/login`,
    redirectSignOut: `${window.location.protocol}//${window.location.host}/logout`,
  },
};
