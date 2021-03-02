import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Let's start a new set of questions!/i);
  expect(linkElement).toBeInTheDocument();
});
