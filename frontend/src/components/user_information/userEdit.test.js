import React from "react";
import { mount } from "enzyme";
import UserEdit from "./userEdit";

describe("User edit component", () => {
  const wrapper = mount(<UserEdit />);
  it("renders without crashing (No props)", () => {
    expect(
      wrapper
        .find(
          'div[className="container locate col-sm-4 col-sm-offset-2 col-md-7 col-md-offset-3"]'
        )
        .exists()
    ).toEqual(true);
  });
});
