import React from "react";
import { mount } from "enzyme";
import ProductsList from "./products_list";
import { BrowserRouter as Router } from "react-router-dom";

describe("Product list component", () => {
  const props = {
    productsShow: [
      {
        _id: "",
        id: "",
        name: "",
        description: "",
        price: 0,
        image: ""
      }
    ]
  };
  const wrapper = mount(
    <Router>
      <ProductsList {...props} />
    </Router>
  );
  it("renders without crashing", () => {
    expect(wrapper.find("ProductItem").exists()).toEqual(true);
  });
  it("renedrs without crashing (no props)", () => {
    const wrapper = mount(
      <Router>
        <ProductsList />
      </Router>
    );
    expect(wrapper.exists()).toEqual(true);
  });
});
