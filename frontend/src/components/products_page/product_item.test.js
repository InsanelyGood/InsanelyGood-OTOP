import React from "react";
import { mount } from "enzyme";
import ProductItem from "./product_item";
import ProductDetail from "../../views/product_detail";
import { BrowserRouter as Router } from "react-router-dom";

describe("Product item component", () => {
  const props = {
    product: {
      id: "111",
      image:
        "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
      name: "Test product",
      description: "test product description",
      price: 5
    }
  };
  let wrapper = mount(
    <Router>
      <ProductItem {...props} />
    </Router>
  );
  it("renders without crashing", () => {
    expect(
      wrapper.find('div[className="col-md-4 col-sm-6 product-item"]').exists()
    ).toEqual(true);
  });
});
