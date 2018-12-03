import React from "react";
import { mount } from "enzyme";
import OrderItem from "./order_item";

describe("Order item component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<OrderItem />);
        expect(wrapper.exists()).toEqual(true);
      });
})