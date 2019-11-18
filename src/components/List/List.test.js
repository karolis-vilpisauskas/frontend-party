import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import List from "./List";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <List {...props}>
      <div data-testid="child" />
    </List>
  );
  const container = getByTestId("list");
  return {
    getByTestId,
    container
  };
};

describe("List", () => {
  describe("rendering", () => {
    test("it renders it's children", () => {
      const { container, getByTestId } = renderTest();
      expect(container.children.length).toBe(1);
      expect(getByTestId("child")).toBeDefined();
    });
  });
});
