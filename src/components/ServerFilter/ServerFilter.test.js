import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import ServerFilter from "./ServerFilter";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <ServerFilter {...props}>
    </ServerFilter>
  );
  const container = getByTestId("server-filter");
  return {
    getByTestId,
    container
  };
};

describe("ServerFilter", () => {
  describe("rendering", () => {
    test("it renders without crashing", () => {
      const { container } = renderTest();
      expect(container).toMatchSnapshot();
    });
  });
});
