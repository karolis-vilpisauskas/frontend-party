import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

afterEach(cleanup);

const createTestProps = () => ({
  icon: "random-icon",
  error: true,
  type: "text",
  placeholder: "username",
  name: "username"
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Input />, div);
});

it("renders input correctly", () => {
  const fn = jest.fn();
  const props = createTestProps();
  const { getByTestId } = render(<Input {...props} onChange={fn} />);
  const input = getByTestId("input").childNodes[1];
  const icon = getByTestId("input").firstChild;
  const validationIcon = getByTestId("input").childNodes[2];

  fireEvent.change(input, { target: { value: 'a' }});

  expect(icon).toBeDefined();
  expect(input).toHaveAttribute("type");
  expect(input).toHaveAttribute("placeholder");
  expect(input).toHaveAttribute("name");
  expect(validationIcon.classList[4]).toBe("is-error");
  expect(fn).toHaveBeenCalled();
});
