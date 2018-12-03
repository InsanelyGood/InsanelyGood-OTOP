import React from "react";
import { mount } from "enzyme";
import Quote from "./Quote";

describe("Order item component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<Quote />);
        expect(wrapper.find('div').exists()).toEqual(true);
      });
})