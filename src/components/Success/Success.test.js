import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Success from "./Success";

afterEach(cleanup);

const createTestProps = () => ({
  message: "test"
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Success />, div);
});

it("renders success correctly", () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Success {...props} />
  );
  expect(getByTestId("success")).toHaveTextContent("test");
  expect(getByTestId("success").classList.contains('is-active')).toBe(true);
});