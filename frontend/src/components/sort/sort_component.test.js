import React from "react";
import { mount } from "enzyme";
import Sort from "./sort_component";

describe("User password component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<Sort />);
        expect(wrapper.exists()).toEqual(true);
      });
})