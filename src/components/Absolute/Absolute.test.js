import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Absolute from "./Absolute";

afterEach(cleanup);

const createTestProps = props => ({
  style: { opacity: 1 }
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Absolute />, div);
});

it("renders absolute container correctly", () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Absolute {...props}>
      <div data-testid="child-1"></div>
      <div data-testid="child-2"></div>
    </Absolute>
  );

  expect(getByTestId("absolute-container").children.length).toBe(2);
  expect(getByTestId("absolute-container")).toHaveAttribute("style");
  expect(getByTestId("child-1")).toBeDefined();
});
