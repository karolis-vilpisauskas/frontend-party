import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "./Form";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Form />, div);
});

it("renders form correctly", () => {
  const fn = jest.fn();
  const { getByTestId } = render(
    <Form onSubmit={fn} id="login-form">
      <span data-testid="child-1"></span>
      <span data-testid="child-2"></span>
    </Form>
  );
  fireEvent.submit(getByTestId("form"));

  expect(getByTestId("form").children.length).toBe(2);
  expect(getByTestId("child-1")).toBeDefined();
  expect(getByTestId("form").id).toBe("login-form");
  expect(fn).toHaveBeenCalled();
});
