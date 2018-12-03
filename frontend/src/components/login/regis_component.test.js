import React from "react";
import { mount } from "enzyme";
import RegisComponent from "./regis_component";

describe("Regis component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<RegisComponent />);
        expect(wrapper.exists()).toEqual(true);
      });
})