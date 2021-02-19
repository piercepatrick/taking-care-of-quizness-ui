import { Container } from "@material-ui/core";
import NewQuestionFormHeader from "./NewQuestionFormHeader";
import NewQuestionForm from "./NewQuestionForm";

function NewQuestion() {
  return (
    <Container maxWidth="sm">
      <NewQuestionFormHeader />
      <NewQuestionForm />
    </Container>
  );
}

export default NewQuestion;
