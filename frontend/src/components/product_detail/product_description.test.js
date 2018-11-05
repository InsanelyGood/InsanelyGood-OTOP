import React from "react";
import { mount } from "enzyme";
import ProductDescription from "./product_description";

describe("Product description component", () => {
  const props = {
    name: "",
    description: "",
    price: 0,
    id: ""
  };
  const wrapper = mount(<ProductDescription {...props} />);
  it("renders without crashing (No props)", () => {
    const wrapperNoProps = mount(<ProductDescription />);
    expect(wrapperNoProps.find("div").exists()).toEqual(true);
  });
  it("renders without crashing (include props)", () => {
    expect(wrapper.find("div").exists()).toEqual(true);
  });
  it("change quantity of product", () => {
    const instance = wrapper.instance();
    instance.handleValueChange({ target: { value: 5 } });
    expect(wrapper.state("quantity")).toEqual(5);
  });
});
