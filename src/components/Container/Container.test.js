import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import Container from "./Container";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Container {...props}>
      <div data-testid="child" />
    </Container>
  );
  const container = getByTestId("container");
  return {
    getByTestId,
    container
  };
};

describe("Container", () => {
  describe("rendering", () => {
    test("it renders it's children", () => {
      const { container, getByTestId } = renderTest();
      expect(container.children.length).toBe(1);
      expect(getByTestId("child")).toBeDefined();
    });
  });
});
