import React from "react";
import { mount } from "enzyme";
import UserInfomation from "./userInfo";

describe("User edit component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<UserInfomation />);
        expect(wrapper.find('div[className="container locate col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-3 "]').exists()).toEqual(true);
      });
})