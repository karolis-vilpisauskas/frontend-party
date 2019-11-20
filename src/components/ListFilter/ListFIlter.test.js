import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ListFilter from "./ListFilter";

afterEach(cleanup);

const fn = jest.fn();

const createTestProps = () => ({
  handleFilter: fn,
  value: "asc",
  isAsc: true,
  label: "filter"
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListFilter />, div);
});

it("renders list filter correctly", () => {
  const props = createTestProps();
  const { getByTestId } = render(<ListFilter {...props} />);
  const button = getByTestId("list-filter");
  const icon = button.childNodes[1];

  fireEvent.click(button) ;

  expect(button).toHaveTextContent("filter");
  expect(button.value).toBe("asc");
  expect(icon.classList.contains("is-active")).toBe(true);
  expect(fn).toHaveBeenCalled();
});
