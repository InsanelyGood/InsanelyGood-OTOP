import React from "react";
import { mount } from "enzyme";
import LoginComponent from "./login_component";

describe("Login component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<LoginComponent />);
        expect(wrapper.exists()).toEqual(true);
      });
})