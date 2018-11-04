import React from "react";
import { mount } from "enzyme";
import CartTable from "./cart_table";

describe("Cart table component", () => {
  const wrapper = mount(<CartTable />);
  it("renders without crashing", () => {
    expect(wrapper.find('div[className="container"]').exists()).toEqual(true);
  });
});
