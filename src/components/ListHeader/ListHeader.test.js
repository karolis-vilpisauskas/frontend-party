import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import ListHeader from "./ListHeader";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <ListHeader {...props}>
      <div data-testid="child" />
    </ListHeader>
  );
  const container = getByTestId("list-header");
  return {
    getByTestId,
    container
  };
};

describe("ListHeader", () => {
  describe("rendering", () => {
    test("it renders it's children", () => {
      const { container, getByTestId } = renderTest();
      expect(container.children.length).toBe(1);
      expect(getByTestId("child")).toBeDefined();
    });
  });
});
