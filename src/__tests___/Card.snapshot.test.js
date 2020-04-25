import React from "react";
import Card from "../components/Card";
import renderer from "react-test-renderer";

describe("Card component renders correctly with default props", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(<Card />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
