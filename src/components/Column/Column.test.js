import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Column from "./Column";

afterEach(cleanup);

const createTestProps = props => ({
  alignment: "left"
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Column />, div);
});

it("renders column correctly", () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Column {...props}>
      <div data-testid="child-1"></div>
      <div data-testid="child-2"></div>
    </Column>
  );

  expect(getByTestId("column").children.length).toBe(2);
  expect(getByTestId("child-1")).toBeDefined();
  expect(getByTestId("column").classList.contains("left")).toBe(true);
});
