import React from "react";
import { mount } from "enzyme";
import NavBar from "./navbar";
import { BrowserRouter as Router } from "react-router-dom";

describe("NavBar component", () => {
  it("renders without crashing (No props)", () => {
    const wrapper = mount(
      <Router>
        <NavBar />
      </Router>
    );
    expect(wrapper.find("div").exists()).toEqual(true);
  });
});
