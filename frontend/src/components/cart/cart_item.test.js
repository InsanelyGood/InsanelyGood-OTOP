import React from "react";
import { mount } from "enzyme";
import CartItem from "./cart_item";

describe("Cart Item component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<CartItem />);
        expect(wrapper.exists()).toEqual(true);
      });
})