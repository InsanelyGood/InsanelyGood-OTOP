import React from "react";
import { mount } from "enzyme";
import CarousalHighlight from "./CarousalHighlight";

describe("Order item component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<CarousalHighlight />);
        expect(wrapper.find('div').exists()).toEqual(true);
      });
})