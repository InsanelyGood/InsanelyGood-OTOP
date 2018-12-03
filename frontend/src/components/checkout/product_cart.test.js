import React from "react";
import { mount } from "enzyme";
import ProductCart from "./product_cart";

describe("Product cart component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<ProductCart />);
        expect(wrapper.exists()).toEqual(true);
      });
})