import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ListItem from "./ListItem";

afterEach(cleanup);

const createTestProps = () => ({
  server: {
    name: "Server",
    distance: 546
  }
});

it("renders without crashing", () => {
  const props = createTestProps();
  const div = document.createElement("div");
  ReactDOM.render(<ListItem {...props} />, div);
});

it("renders list item correctly", () => {
  const props = createTestProps();
  const { getByTestId } = render(<ListItem {...props} />);
  const container = getByTestId("list-item");
  const serverName = container.firstChild;
  const serverDistance = container.lastChild;

  expect(container.children.length).toBe(2);
  expect(serverName).toHaveTextContent("Server");
  expect(serverDistance).toHaveTextContent("546 km");
});
