import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Container from "./Container";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Container />, div);
});

it("renders containers children correctly", () => {
  const { getByTestId } = render(
    <Container>
      <div data-testid="child-1"></div>
      <div data-testid="child-2"></div>
    </Container>
  );

  expect(getByTestId("container").children.length).toBe(2);
  expect(getByTestId("child-1")).toBeDefined();
});
