import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import List from "./List";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<List />, div);
});

it("renders list correctly", () => {
  const { getByTestId } = render(
    <List>
      <div data-testid="child-1"></div>
      <div data-testid="child-2"></div>
    </List>
  );
  expect(getByTestId("list").children.length).toBe(2);
  expect(getByTestId("child-1")).toBeDefined();
});
