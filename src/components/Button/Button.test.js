import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup, render, fireEvent, getByText } from "@testing-library/react";
import Button from "./Button";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Button {...props}>
      <div data-testid="child" />
    </Button>
  );
  const container = getByTestId("btn");
  return {
    getByTestId,
    container
  };
};

describe("Button", () => {
  describe("rendering", () => {
    test("it renders it's children", () => {
      const { container, getByTestId } = renderTest();
      expect(container.children.length).toBe(2);
      expect(getByTestId("child")).toBeDefined();
    });
  });
});

describe("Button", () => {
  describe("rendering", () => {
    test("Renders label", () => {
      const { container } = renderTest();
      fireEvent.click(container);
    });
  });
});
