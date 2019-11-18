import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import Absolute from "./Absolute";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Absolute {...props}>
      <div data-testid="child" />
    </Absolute>
  );
  const container = getByTestId("absolute-container");
  return {
    getByTestId,
    container
  };
};

describe("Absolute", () => {
  describe("rendering", () => {
    test("it renders it's children", () => {
      const { container, getByTestId } = renderTest();
      expect(container.children.length).toBe(1);
      expect(getByTestId("child")).toBeDefined();
    });
  });
});
