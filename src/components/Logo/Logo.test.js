import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Logo from "./Logo";

afterEach(cleanup);

const createTestProps = () => ({
  isBlack: true
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Logo />, div);
});

it("renders logo correctly", () => {
  const props = createTestProps();
  const { getByTestId } = render(<Logo {...props} />);
  const logo = getByTestId("logo");

  expect(logo.src).toBe("http://localhost/logo-black.png");
  expect(logo.classList.contains("black")).toBe(true);
});
  