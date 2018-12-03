import React from "react";
import { mount } from "enzyme";
import OrderList from "./checkout_component";

describe("Check out component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<OrderList />);
        expect(wrapper.exists()).toEqual(true);
      });
})