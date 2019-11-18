import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { cleanup, render } from "@testing-library/react";
import ListFilter from "./ListFilter";
afterEach(cleanup);

const createTestProps = props => ({
  ...props
});

const renderTest = () => {
  const props = createTestProps();
  const { getByTestId } = render(
    <ListFilter {...props}>
    </ListFilter>
  );
  const container = getByTestId("list-filter");
  return {
    getByTestId,
    container
  };
};

describe("ListFilter", () => {
  describe("rendering", () => {
    test("it renders without crashing", () => {
      const { container } = renderTest();
      expect(container).toMatchSnapshot();
    });
  });
});
