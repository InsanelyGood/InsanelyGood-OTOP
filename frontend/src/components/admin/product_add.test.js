import React from "react";
import { mount } from "enzyme";
import ProductAdd from "./product_add";

describe("Product add component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<ProductAdd />);
        expect(wrapper.find('div').exists()).toEqual(true);
      });
})