import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});

it("renders header correctly", () => {
  const { getByTestId } = render(
    <Header>
      <div data-testid="child-1"></div>
      <div data-testid="child-2"></div>
    </Header>
  );

  expect(getByTestId("header").children.length).toBe(2);
  expect(getByTestId("child-1")).toBeDefined();
});
