import React from "react";
import Form from "../components/Form";
import renderer from "react-test-renderer";

describe("Form component renders correctly with default props", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(<Form />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
