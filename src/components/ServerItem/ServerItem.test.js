import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup, render } from "@testing-library/react";
import ServerItem from "./ServerItem";
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
  const { getByTestId } = render(<ServerItem {...props}></ServerItem>);
  const container = getByTestId("server-item");
  return {
    getByTestId,
    container
  };
};

describe("ServerItem", () => {
  describe("rendering", () => {
    test("it renders without crashing", () => {
      const { container } = renderTest();
      expect(container).toMatchSnapshot();
    });
  });
});
