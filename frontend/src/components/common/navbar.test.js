import React from "react";
import { mount } from "enzyme";
import NavBar from "./navbar";

describe("NavBar component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<NavBar />);
        expect(wrapper.find("div").exists()).toEqual(true);
      });
})