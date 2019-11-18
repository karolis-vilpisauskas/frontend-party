import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup, render } from "@testing-library/react";
import ListItem from "./ListItem";
afterEach(cleanup);

const createTestProps = props => ({
  ...props,
  server: {
    name: "Server",
    distance: 546
  }
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(<ListItem {...props}></ListItem>);
  const container = getByTestId("list-item");
  return {
    getByTestId,
    container
  };
};

describe("ListItem", () => {
  describe("rendering", () => {
    test("it renders without crashing", () => {
      const { container } = renderTest();
      expect(container).toMatchSnapshot();
    });
  });
});
