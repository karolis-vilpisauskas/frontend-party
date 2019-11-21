import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Spinner from "./Spinner";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Spinner />, div);
});

it("renders spinner correctly", () => {
  const { getByTestId } = render(<Spinner />);

  expect(getByTestId("spinner").children.length).toBe(4);
});
