import React from "react";
import Card from "../components/Card";
import { mount } from "enzyme";

test("Card renders default name properly", () => {
  const wrapper = mount(<Card />);
  const p = wrapper.find(".card-name-name");
  expect(p.text()).toBe("FULL NAME");
});

test("Card renders name properly", () => {
  const name = "MiCHAl Kulesza";
  const wrapper = mount(<Card name={name} />);

  const p = wrapper.find(".card-name-name");
  expect(p.text()).toBe("MICHAL KULESZA");
});
