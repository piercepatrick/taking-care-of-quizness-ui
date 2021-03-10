import { Container, makeStyles } from "@material-ui/core";

import NewQuestionFormHeader from "./NewQuestionFormHeader";
import NewQuestionForm from "./NewQuestionForm";

const useStyles = makeStyles((theme) => ({
  Container: {},
}));

// async function fetchQuestions() {
//   const accessToken = (await Auth.currentSession()).getIdToken().getJwtToken();
//   console.log((await Auth.currentSession()).getIdToken().getJwtToken());
//   try {
//     const res = await fetch("",{
//         method: "POST",
//         headers: {
//           "x-api-key": "",
//           "Authorization": accessToken,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           category: "Bears",
//           questionText: "How many brown bears live in Katmai National Park in Alaska?",
//           answers: {
//             correctAnswer: "more than 2000",
//             incorrectAnswers: [
//               "about 200",
//               "exactly 12",
//               "no one actually knows",
//             ]
//           }
//         })
//       }
//     );
//     return await res.json();
//   } catch (err) {
//     console.log(err);
//   }
// }

function NewQuestion() {
  const classes = useStyles();

  // fetchQuestions();

  return (
    <Container className={classes.Container} maxWidth="sm">
      <NewQuestionFormHeader />
      <NewQuestionForm />
    </Container>
  );
}

export default NewQuestion;
