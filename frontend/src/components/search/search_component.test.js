import React from "react";
import { mount } from "enzyme";
import SearchComponent from "./search_component";

describe("Search", () => {
  const wrapper = mount(<SearchComponent />);
  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it("input text to search area", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "bag" } });
    expect(wrapper.state("search_value")).toEqual("bag");
  });
});
