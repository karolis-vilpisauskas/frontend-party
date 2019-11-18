import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import Form from "./Form";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Form {...props}>
      <div data-testid="child" />
    </Form>
  );
  const container = getByTestId("form");
  return {
    getByTestId,
    container
  };
};

describe("Form", () => {
  describe("rendering", () => {
    test("it renders it's children", () => {
      const { container, getByTestId } = renderTest();
      expect(container.children.length).toBe(1);
      expect(getByTestId("child")).toBeDefined();
    });
  });
});
