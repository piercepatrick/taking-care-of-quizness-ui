import { Container, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function ProfileInfo({ userName }) {
  return (
    <Container>
      <AccountCircleIcon color="secondary" fontSize="large" />
      <Typography variant="h5">{userName}</Typography>
    </Container>
  );
}

export default ProfileInfo;
