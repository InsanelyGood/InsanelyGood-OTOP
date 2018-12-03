import React from "react";
import { mount } from "enzyme";
import ProductItem from "./product_item";

describe("Product item component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<ProductItem />);
        expect(wrapper.exists()).toEqual(true);
      });
})