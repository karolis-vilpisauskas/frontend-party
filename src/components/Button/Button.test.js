import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Button from "./Button";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("renders button correctly", () => {
  const fn = jest.fn() ;
  const { getByTestId } = render(
    <Button label="save" onClick={fn} styleClass="login">
      <span data-testid="child"></span>
    </Button>
  );
  fireEvent.click(getByTestId("btn"));
  expect(getByTestId("btn")).toHaveTextContent("save");
  expect(getByTestId("child")).toBeDefined();
  expect(getByTestId("btn").classList.contains("login")).toBe(true);
  expect(fn).toHaveBeenCalled();
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
