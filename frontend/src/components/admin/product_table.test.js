import React from "react";
import { mount } from "enzyme";
import ProductTable from "./product_table";

describe("Product table component", () => {
    it("renders without crashing (No props)", () => {
        const wrapper = mount(<ProductTable />);
        expect(wrapper.find('div[className="container mt-3"]').exists()).toEqual(true);
      });
})