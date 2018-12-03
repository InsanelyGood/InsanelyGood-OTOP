import React from "react";
import { mount } from "enzyme";
import OrderTable from "./order_table";

describe("Cart table component", () => {
  const wrapper = mount(<OrderTable />);
  it("renders without crashing", () => {
    expect(wrapper.find('div[className="container mt-5"]').exists()).toEqual(true);
  });
});
