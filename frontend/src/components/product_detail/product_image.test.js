import React from "react";
import { mount } from "enzyme";
import ProductImage from "./product_image";

describe("Product image component", () => {
  const props = {
    imageUrl:
      "http://www.khaosodenglish.com/wp-content/uploads/2017/08/pasted-image-0.png"
  };
  const wrapper = mount(<ProductImage {...props} />);
  it("renders without crashing", () => {
    const wrapperNoProps = mount(<ProductImage />);
    expect(wrapperNoProps.exists()).toEqual(true);
  });
  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
