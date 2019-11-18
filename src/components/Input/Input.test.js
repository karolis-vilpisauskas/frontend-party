import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import Input from "./Input";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Input {...props}>
    </Input>
  );
  const container = getByTestId("input");
  return {
    getByTestId,
    container
  };
};

describe("Error", () => {
  describe("rendering", () => {
    test("it renders without crashing", () => {
      const { container } = renderTest();
      expect(container).toMatchSnapshot();
    });
  });
});
