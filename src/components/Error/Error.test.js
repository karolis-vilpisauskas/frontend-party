import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import Error from "./Error";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <Error {...props}>
    </Error>
  );
  const container = getByTestId("error");
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
