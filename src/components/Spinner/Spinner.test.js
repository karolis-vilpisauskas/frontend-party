import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import Spinner from "./Spinner";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Spinner {...props}>
    </Spinner>
  );
  const container = getByTestId("spinner");
  return {
    getByTestId,
    container
  };
};

describe("Spinner", () => {
  describe("rendering", () => {
    test("it renders without crashing", () => {
      const { container } = renderTest();
      expect(container).toMatchSnapshot();
    });
  });
});
