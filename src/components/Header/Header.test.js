import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup, render } from "@testing-library/react";
import Header from "./Header";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Header {...props}>
      <div data-testid="child" />
    </Header>
  );
  const container = getByTestId("header");
  return {
    getByTestId,
    container
  };
};

describe("Header", () => {
  describe("rendering", () => {
    test("it renders children crashing", () => {
      const { container, getByTestId } = renderTest();
      expect(container.children.length).toBe(1);
      expect(getByTestId("child")).toBeDefined();
    });
  });
});
