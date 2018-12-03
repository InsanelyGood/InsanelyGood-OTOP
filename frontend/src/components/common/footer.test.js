import React from "react";
import { mount } from "enzyme";
import FooterPage from "./footer";

describe("Footer component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<FooterPage />);
        expect(wrapper.exists()).toEqual(true);
      });
})