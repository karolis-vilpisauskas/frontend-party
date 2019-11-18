import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import ServerHeader from "./ServerHeader";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <ServerHeader {...props}>
      <div data-testid="child" />
    </ServerHeader>
  );
  const container = getByTestId("server-header");
  return {
    getByTestId,
    container
  };
};

describe("ServerHeader", () => {
  describe("rendering", () => {
    test("it renders it's children", () => {
      const { container, getByTestId } = renderTest();
      expect(container.children.length).toBe(1);
      expect(getByTestId("child")).toBeDefined();
    });
  });
});