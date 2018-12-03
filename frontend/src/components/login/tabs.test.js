import React from "react";
import { mount } from "enzyme";
import TabsComponent from "./tabs";

describe("Tabs component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<TabsComponent />);
        expect(wrapper.exists()).toEqual(true);
      });
})