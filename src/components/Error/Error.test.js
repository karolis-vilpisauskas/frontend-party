import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Error from "./Error";

afterEach(cleanup);

const createTestProps = () => ({
  message: "test"
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Error />, div);
});

it("renders error correctly", () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Error {...props} />
  );
  expect(getByTestId("error")).toHaveTextContent("test");
  expect(getByTestId("error").classList.contains('is-active')).toBe(true);
});