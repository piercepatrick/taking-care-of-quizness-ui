import { Container } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function ProfileInfo({ userName }) {
  return (
    <Container>
      <AccountCircleIcon color="secondary" fontSize="large" />
      <h3>{userName}</h3>
    </Container>
  );
}

export default ProfileInfo;
