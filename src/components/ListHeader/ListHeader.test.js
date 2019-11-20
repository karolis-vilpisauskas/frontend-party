import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ListHeader from "./ListHeader";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListHeader />, div);
});

it("renders list header correctly", () => {
  const { getByTestId } = render(
    <ListHeader>
      <div data-testid="child-1"></div>
      <div data-testid="child-2"></div>
    </ListHeader>
  );

  expect(getByTestId("list-header").children.length).toBe(2);
  expect(getByTestId("child-1")).toBeDefined();
});
